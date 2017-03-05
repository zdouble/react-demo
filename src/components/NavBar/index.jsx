import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import cs from 'classnames'
import { connect } from 'react-redux'
import LoginFrom from './LoginForm'
import DropDownMenu from './DropDownMenu'
// import { LoginDone } from '../../actions/user'

class NavBar extends Component {
    static propTypes = {
        // user: PropTypes.object.isRequired,
        Login: PropTypes.func.isRequired,
        checkLogin: PropTypes.func.isRequired,
        Logout: PropTypes.func.isRequired
    }
    // constructor(props){
    //     super(props)
    //     console.log(this.props)
    // }
    //
    componentWillMount () {
        this.props.checkLogin()
    }

    render() {

        let {
            location:{pathname},
            Login,
            user,
            Logout
        } = this.props

        return (
            <div className="row clearfix">
                <div className="col-md-12 column">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><Link to="/" className="navbar-brand">React Demo</Link></div>
                        <div className="collapse navbar-collapse" id="nav-collapse">
                            <ul className="nav navbar-nav">
                                <li className={cs({'active':pathname === '/'})}><Link to="/">欢迎页</Link></li>
                                <li className={cs({'active':pathname.startsWith('/msg')})}><Link to="/msg">留言板</Link></li>
                                <li className={cs({'active':pathname.startsWith('/todo')})}><Link to="/todo">待办事项</Link></li>
                            </ul>
                            {user?<DropDownMenu user={user} logout={Logout}/>:<LoginFrom login={Login}/>}
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

const getUserData = ({ user }) => ({ user })
const actions = require('../../actions/user.js').default

export default connect(getUserData,actions)(NavBar)
