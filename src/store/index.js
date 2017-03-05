import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'

const loggerMiddleware = createLogger()

const middleware = [thunk, loggerMiddleware]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store

export const history = syncHistoryWithStore(hashHistory, store)
