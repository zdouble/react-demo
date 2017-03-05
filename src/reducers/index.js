import { combineReducers } from 'redux'
import user from './user.js'
import msg from './msg.js'
import todo from './todo.js'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    user,
    msg,
    todo,
    routing: routerReducer
})
