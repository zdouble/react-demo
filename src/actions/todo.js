import { storage } from '../utils'

const TODO_ADD = 'TODO_ADD'
const TODO_DELETE = 'TODO_DELETE'
const TODO_TOGGLE = 'TODO_TOGGLE'

const todo_add = (todo) => {
    return {
        type: TODO_ADD,
        todo
    }
}

const todo_delete = (id) => {
    return {
        type: TODO_DELETE,
        id
    }
}

const todo_toggle = (id) => {
    return {
        type: TODO_TOGGLE,
        id
    }
}

const add_todo = (todo) => {
    return dispatch => {
        dispatch(todo_add(todo))
    }
}

const delete_todo = (id) => {
    return dispatch => {
        dispatch(todo_delete(id))
    }
}

const toggle_todo = (id) => {
    return dispatch => {
        dispatch(todo_toggle(id))
    }
}

export {
    add_todo,
    delete_todo,
    toggle_todo
}
