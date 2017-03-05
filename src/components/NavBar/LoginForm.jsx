import React, { Component } from 'react'
class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let value = this.myTextInput.value
        if(value){
            this.props.login(value)
            this.myTextInput.value = ''
        }else {
            alert('用户名为空')
        }
    }

    render() {
        return (
            <form role="search" className="navbar-form navbar-right" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="请输入您的用户名" required defaultValue="" ref={ (ref)=>this.myTextInput = ref }/>
                </div>
                <button type="submit" className="btn btn-success">登录</button>
            </form>
        )
    }

}


export default LoginForm
