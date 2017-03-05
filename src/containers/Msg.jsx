import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/msg'
import { bindActionCreators } from 'redux'
class Msg extends Component {

    render() {
        const children = React.Children.map(this.props.children,
            (child) => cloneElement(child, {
              actions: this.props.actions,
              user: this.props.user,
              msg: this.props.msg
            })
        )
        return (
            <div>
                {children}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    ({user,msg}) => ({user,msg}),
    mapDispatchToProps
)(Msg)
