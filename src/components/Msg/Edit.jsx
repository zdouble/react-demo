import React, { Component } from 'react'
import { timeFormt, findMsg } from '../../utils'

class Edit extends Component {
    constructor(props) {
        super(props)


        this.state = {
            title: '',
            content: '',
            id: ''
        }
    }

    componentDidMount() {
        let data = {}
        if(this.props.params.msgid){
            data = findMsg(this.props.msg,this.props.params.msgid).data
        }

        let {
            title,
            content,
            id
        } = data

        this.setState({
            title,
            content,
            id
        })
    }
    submit = (id,e) => {
        e.preventDefault()
        let msgid = this.props.params.msgid
        let data = {
            title: this.state.title,
            content: this.state.content,
            id: msgid?id:Date.now(),
            time: timeFormt(Date.now()),
            author: this.props.user
        }

        let method = msgid?'modify_msg':'save_msg'
        this.props.actions[method](data)
        this.cancel()
    }
    cancel = () => {
        this.props.router.go('-1')
    }
    handleChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }
    handleChangeContent = (e) => {
        this.setState({content: e.target.value})
    }
    render() {
        return (
            <div>
                <br/>
                <form onSubmit={this.submit.bind(this,this.state.id)}>
                    <div className="form-group">
                        <label htmlFor="title">标题</label>
                        <input type="text" className="form-control" name="title" placeholder="请输入标题..." value={this.state.title} onChange={this.handleChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">内容</label>
                        <textarea name="content" className="form-control" rows="3" placeholder="请输入内容..." value={this.state.content} onChange={this.handleChangeContent}></textarea>
                    </div>
                    <div role="group" className="btn-group btn-group-justified">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning" onClick={this.cancel}><span className="glyphicon glyphicon-arrow-left"></span>
                                &nbsp;取消
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="submit" className="btn btn-success">
                                提交&nbsp;
                                <span className="glyphicon glyphicon-ok"></span></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
