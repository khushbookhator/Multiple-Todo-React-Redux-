import { ADD_TODO_FAIL, ADD_TODO_REQ, ADD_TODO_SUC, GET_TODO_FAIL, GET_TODO_REQ, GET_TODO_SUC } from "./ActionType"
import axios from "axios"

//GET TODO
export const getTodoReq = ()=>{
    return{
        type:GET_TODO_REQ
    }
}

export const getTodoSuc = (payload)=>{
    return{
        type:GET_TODO_SUC,
        payload
    }
}

export const getTodoFail = (error)=>{
    return{
        type:GET_TODO_FAIL,
        payload:error
    }
}

export const getTodo=()=>(dispatch)=>{
    dispatch(getTodoReq)
    axios.get(`https://rest-api-khushboo.herokuapp.com/multitodo`).then((res) => dispatch(getTodoSuc(res.data)))
    .catch((err) => dispatch(getTodoFail(err)))
}

//ADD TODO
export const addTodoReq = ()=>{
    return{
        type:ADD_TODO_REQ
    }
}

export const addTodoSuc = (payload)=>{
    return{
        type:ADD_TODO_SUC,
        payload
    }
}

export const addTodoFail = (error)=>{
    return{
        type:ADD_TODO_FAIL,
        payload:error
    }
}



export const addTodo=(payload) => (dispatch) => {
    dispatch(addTodoReq)
    axios.post("https://rest-api-khushboo.herokuapp.com/multitodo", payload).then((res) => {
        dispatch(addTodoSuc(payload))
    }).catch((err) => {
        dispatch(addTodoFail(err))
    })
}

// //TOGGLE TODO
// export const toggleTodoReq = ()=>{
//     return{
//         type:TOGGLE_TODO_REQ
//     }
// }

// export const toggleTodoSuc = (payload)=>{
//     return{
//         type:TOGGLE_TODO_SUC,
//         payload
//     }
// }

// export const toggleTodoFail = (error)=>{
//     return{
//         type:TOGGLE_TODO_FAIL,
//         payload:error
//     }
// }


// export const toggleTodo=(payload) => (dispatch) => {
//     dispatch(toggleTodoReq())
//     return axios.patch(`https://rest-api-khushboo.herokuapp.com/todos/${payload.id}`, {status : !payload.status}).then(res => dispatch(toggleTodoSuc(res.data))).catch(err => dispatch(toggleTodoFail(err)))
// }



