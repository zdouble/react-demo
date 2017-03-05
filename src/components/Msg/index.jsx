import React, { Component } from 'react'
import { Link } from 'react-router'
import List from './List'
import cs from 'classnames'

class MsgIndex extends Component {
    render() {
        let msgLen = this.props.msg.length
        return (
            <div>
                <Link to="/msg/add" className="btn btn-default btn-lg btn-block">
                    添加消息
                    <span className="glyphicon glyphicon-plus"></span>
                </Link>
                <br/>
                <div>
                    <div role="alert" className={cs({'hide':msgLen!==0,'alert':true,'alert-warning':true,'alert-dismissible':true})}>
                        <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span></button><strong>暂无更多信息</strong></div>
                    {msgLen?<List actions={this.props.actions} user={this.props.user} data={this.props.msg}/>:null}
                </div>
            </div>
        )
    }
}

export default MsgIndex
