import { storage } from '../utils'

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const LoginDone = (userName) => {
    return {
        type: LOG_IN,
        userName
    }
}

const Login = (userName) => {
    return dispatch => {
        storage.set('userName',userName)
        dispatch(LoginDone(userName))
    }
}

const Logout = () => {
    return dispatch => {
        storage.remove('userName')
        dispatch({type:LOG_OUT})
    }
}

const checkLogin = () => {
    return dispatch => {
        let userName = storage.get('userName')
        if(userName){
            dispatch(LoginDone(userName))
        }
    }

}

export default {
    checkLogin,
    Login,
    Logout
}
