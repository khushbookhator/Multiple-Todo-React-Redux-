
import axios from 'axios';
import { LOGIN_REQ, LOGIN_SUC, LOGIN_FAIL } from './ActionType';


export const loginSuc = (payload) => {
    return{
        type: LOGIN_SUC,
        payload
    }
}
export const loginReq = () => {
    return{
        type: LOGIN_REQ,
    }
}

export const loginFail = (err) => {
    return {
        type: LOGIN_FAIL
    }
}

export const loginUser = (payload) => (dispatch) => {
    dispatch(loginReq())
    return axios.post('https://masai-api-mocker.herokuapp.com/auth/login', JSON.stringify(payload), {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => dispatch(loginSuc({token: res.data.token, username: payload.username}), alert("LOGIN SUCCESSFUL")))
    .catch(err => dispatch(loginFail(err)))
}