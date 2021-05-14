import axios from "axios"
import { REGISTER_FAIL, REGISTER_REQ, REGISTER_SUC } from "./ActionType"



export const registerReq = () => {
    return{
        type: REGISTER_REQ
    }
}

export const registerSuc =  (payload) => {
    return{
        type: REGISTER_SUC,
        payload
    }
}

export const registerFail = (err) => {
    return{
        type: REGISTER_FAIL,
        payload: err
    }
}

export const registerUser = (payload) => (dispatch) => {
    dispatch(registerReq())
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register", JSON.stringify(payload), {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => dispatch(registerSuc(res.data.message), alert("Registration Succesfull"), res.data.error ? alert("Oops! user already exist"): null))
    .catch(err => dispatch(registerFail(err)))
}