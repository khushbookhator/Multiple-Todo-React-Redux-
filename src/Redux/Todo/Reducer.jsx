import { ADD_TODO_FAIL, ADD_TODO_REQ, ADD_TODO_SUC, GET_TODO_FAIL, GET_TODO_REQ, GET_TODO_SUC } from "./ActionType"



const init={
    todo:[],
    isLoading:false,
    isError:false,
}

export const todoReducer = (state=init,action)=>{
    switch(action.type){
        case GET_TODO_REQ:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_TODO_SUC:{
            return{
                ...state,
                todo:action.payload,
                isLoading:false
            }
        }
        case GET_TODO_FAIL:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case ADD_TODO_REQ:{
            return{
                ...state, 
                isLoading:true,
                isError:false
            }
        }
        case ADD_TODO_SUC:{
            return{
                ...state,
                todo:[...state.todo,action.payload],
                isLoading:false
            }
        }
        case ADD_TODO_FAIL:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:
            return state
    }
}