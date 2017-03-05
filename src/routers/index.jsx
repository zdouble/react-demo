import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import WelCome from '../components/WelCome'
import Edit from '../components/Msg/Edit'
import Msg from '../containers/Msg'
import MsgIndex from '../components/Msg'
import MsgDetail from '../components/Msg/Detail'
import Todo from '../containers/Todo'
import { storage } from '../utils'

const requiresAuth = (nextState, replace, next) => {
    let user = storage.get('userName')
    if (user) return next()

    alert('请先登录后再访问')
    next(replace('/'))
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelCome}/>
        <Route path="msg" component={Msg}>
            <IndexRoute component={MsgIndex}/>
            <Route path="add" component={Edit} onEnter={requiresAuth}/>
            <Route path="modify/:msgid" component={Edit} onEnter={requiresAuth}/>
            <Route path="detail/:msgid" component={MsgDetail}/>
        </Route>
        <Route path="todo" component={Todo}/>
    </Route>
)
