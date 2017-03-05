import React, { Component } from 'react'
import { findMsg } from '../../utils'
import { Link } from 'react-router'

class Detail extends Component {

    back = () => {
        this.props.router.go(-1)
    }

    delete = (id) => {
        this.props.actions.delect_msg(id)
        this.back()
    }

    render() {
        let { data } = findMsg(this.props.msg,this.props.params.msgid)
        let {
            title,
            content,
            time,
            author,
            id
        } = data
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    标题：
                    <strong>{title}</strong><span className="badge pull-right">{time}</span>
                    <br/>
                    发布者：
                    <a href="/msg?author=4545"><i>{author}</i></a>
                    <div role="group" className="btn-group btn-group-xs pull-right">
                        <button className="btn btn-primary btn-xs" onClick={this.back}>返回</button>
                        {this.props.user == author?<Link className="btn btn-warning" to={`/msg/modify/${id}`}>修改</Link>:null}
                        {this.props.user == author?<a href="javascript:;" className="btn btn-danger" onClick={this.delete.bind(this,id)}>删除</a>:null}
                        </div>
                </div>
                <div className="panel-body">{content}</div>
            </div>
        )
    }
}

export default Detail
