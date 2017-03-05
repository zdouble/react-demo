import { storage, findMsg } from '../utils'

const MSG_ADD = 'MSG_ADD'
const MSG_DELETE = 'MSG_DELETE'
const MSG_MODIFY = 'MSG_MODIFY'

const msg_add = (msg) => {
    return {
        type:MSG_ADD,
        msg
    }
}

const msg_delete = (id) => {
    return {
        type:MSG_DELETE,
        id
    }
}

const msg_modify = (msg) => {
    return {
        type:MSG_MODIFY,
        msg
    }
}

const save_msg = (msg) => {
    return dispatch => {
        let data = storage.get('msg') || []
        data.push(msg)
        storage.set('msg',data)
        dispatch(msg_add(msg))
    }
}

const delect_msg = (id) => {
    return dispatch => {
        let data = storage.get('msg')
        let index = findMsg(data,id).index
        data.splice(index,1)
        storage.set('msg',data)
        dispatch(msg_delete(id))
    }
}

const modify_msg = (msg) => {
    return dispatch => {
        let data = storage.get('msg')
        data = data.map(data=>{
            if(data.id == msg.id){
                return {...data,...msg}
            }
        })
        storage.set('msg',data)
        dispatch(msg_modify(msg))
    }
}


export {
    save_msg,
    delect_msg,
    modify_msg
}
