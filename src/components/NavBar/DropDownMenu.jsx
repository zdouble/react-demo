import React, { Component } from 'react'
import cs from 'classnames'

class DropDowmMenu extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         show: false
    //     }
    // }
    // DropShow = () => {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        欢迎您，{this.props.user}<strong className="caret"></strong></a>
                    <ul className="dropdown-menu">
                        <li><a href="javascript:;" onClick={this.props.logout}>注销登录</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default DropDowmMenu
