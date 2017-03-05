import React, { Component } from 'react'
import { Link } from 'react-router'

export default class WelCome extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>欢迎使用 <br/> React Demo</h1>
                <p>
                    <Link role="button" className="btn btn-success btn-lg" to="/msg">前往留言板 &gt;</Link>&nbsp;
                    <Link role="button" className="btn btn-success btn-lg" to="/todo">前往待办事项 &gt;</Link>
                </p>
            </div>
        )
    }
}
