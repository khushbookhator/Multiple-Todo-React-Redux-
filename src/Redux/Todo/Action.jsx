import { ADD_TODO_FAIL, ADD_TODO_REQ, ADD_TODO_SUC, GET_TODO_FAIL, GET_TODO_REQ, GET_TODO_SUC, TOGGLE_TODO_FAIL, TOGGLE_TODO_REQ, TOGGLE_TODO_SUC } from "./ActionType"
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

//TOGGLE TODO
export const toggleTodoReq = ()=>{
    return{
        type:TOGGLE_TODO_REQ
    }
}

export const toggleTodoSuc = (payload)=>{
    return{
        type:TOGGLE_TODO_SUC,
        payload
    }
}

export const toggleTodoFail = (error)=>{
    return{
        type:TOGGLE_TODO_FAIL,
        payload:error
    }
}


export const toggleTodo=(payload) => (dispatch) => {
    dispatch(toggleTodoReq())
    return axios.put(`https://rest-api-khushboo.herokuapp.com/multitodo/${payload.id}`, payload).then(res => dispatch(toggleTodoSuc(res.data))).then(() => dispatch(getTodo())).catch(err => dispatch(toggleTodoFail(err)))
}

//DELETE TODO
export const deleteTodoReq = ()=>{
    return{
        type:TOGGLE_TODO_REQ
    }
}

export const deleteTodoSuc = (payload)=>{
    return{
        type:TOGGLE_TODO_SUC,
        payload
    }
}

export const deleteTodoFail = (error)=>{
    return{
        type:TOGGLE_TODO_FAIL,
        payload:error
    }
}


export const deleteTodo=(payload) => (dispatch) => {
    dispatch(deleteTodoReq())
    return axios.put(`https://rest-api-khushboo.herokuapp.com/multitodo/${payload.id}`, payload).then(res => dispatch(deleteTodoSuc(res.data))).then(() => dispatch(getTodo())).catch(err => dispatch(deleteTodoFail(err)))
}



