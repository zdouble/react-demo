import React, { Component } from 'react'
import { Link } from 'react-router'

class List extends Component {
    render() {
        let user = this.props.user
        let listItems = this.props.data.map(data => {
                return (
                    <li className="list-group-item" key={data.id}>
                        <Link to={`/msg/detail/${data.id}`}>
                            <b>{data.title}</b>
                        </Link>
                        <span className="badge">{data.time}</span>
                        <br/>
                        <span className="text-muted">by&nbsp;</span>
                        <a href="javascript:;">
                            <i>{data.author}</i>
                        </a>
                        <div role="group" className="btn-group btn-group-xs pull-right">
                            <Link className="btn btn-info" to={`/msg/detail/${data.id}`}>查看详情</Link>
                            {user===data.author?<Link className="btn btn-warning" to={`/msg/modify/${data.id}`}>修改</Link>:null}
                            {user===data.author?<a href="javascript:;" className="btn btn-danger" onClick={this.props.actions.delect_msg.bind(this,data.id)}>删除</a>:null}

                        </div>
                    </li>
                )
            }
        )
        return (
            <ul className="list-group">
                {listItems}
            </ul>
        )
    }
}

export default List
