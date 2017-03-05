
const todo = (state = [], action) => {
    switch(action.type){
        case 'TODO_ADD':
            console.log([...state,action.todo])
            return [...state,action.todo]
        case 'TODO_DELETE':
            return state.filter(item => item.id != action.id)
        case 'TODO_TOGGLE':
            return state.map(item => {
                if(item.id == action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
            })
        default:
            return state
    }
}

export default todo
