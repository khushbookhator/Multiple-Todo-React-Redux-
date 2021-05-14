import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC } from "./Actiontype"


const init = {
    isLoading : false,
    isError: false,
    token: "",
    username: "",
    isAuth: false
}

export const loginReducer = (state = init, action) => {
    switch(action.type){
        case LOGIN_SUC: {
            return{
                ...state,
                token: `${action.payload.token}`,
                isLoading: false,
                isError: false,
                isAuth: true,
                username: `${action.payload.username}`
            }
        }
        case LOGIN_REQ: {
            return{
                ...state,
                token: "",
                isLoading: true,
                isError: false,
                isAuth: false
            }
        }
        case LOGIN_FAIL: {
            return{
                ...state,
                isError: true,
                isLoading: false,
                token:"",
                isAuth: false
            }
        }
        default:
            return state
    }
}