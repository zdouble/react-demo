import { storage, findMsg } from '../utils'

let initState = storage.get('msg') || [];

const msg = (state = initState, action) =>{
    let arr = [...state]
    switch(action.type){
        case 'MSG_ADD':
            arr.push(action.msg)
            return [...state,action.msg]
        case 'MSG_DELETE':
            return state.filter(item=>item.id != action.id)
        case 'MSG_MODIFY':
            return state.map(item=>{
                if(item.id == action.msg.id){
                    return {...item,...action.msg}
                }else {
                    return item
                }
            })
        default:
            return state
    }
}


export default msg
