import React, { Component } from 'react'
import * as actions from '../actions/todo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { timeFormt } from '../utils'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    submit = (e) => {
        e.preventDefault()
        this.props.actions.add_todo({
            content: this.state.value,
            time:timeFormt(Date.now()),
            id:Date.now()
        })
        this.setState({
            value: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        let list = this.props.todo.map(item => {
            return (
                <li key={item.id} >
                    <span style={{textDecoration: item.completed?'line-through':'none'}} onClick={this.props.actions.toggle_todo.bind(this,item.id)}>{item.content}</span>
                    <a href="javascript:;" className="pull-right" onClick={this.props.actions.delete_todo.bind(this,item.id)}>⊗</a>
                    <span className="label label-default pull-right">{item.time}</span>
                </li>
            )
        })
        return (
            <div className="center-block">
                <div>
                    <ul>
                        {list}
                    </ul>
                    <form onSubmit={this.submit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="inputVal" placeholder="请输入待办事项，敲回车确认添加" required value={this.state.value} onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    ({todo}) => ({todo}),
    mapDispatchToProps
)(Todo)
