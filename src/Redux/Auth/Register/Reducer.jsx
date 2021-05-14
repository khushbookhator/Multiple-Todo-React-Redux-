
import { REGISTER_REQ, REGISTER_SUC, REGISTER_FAIL } from './ActionType';

const init = {
    isLoading : false,
    isError: false,
}

export const registerReducer = (state = init, action) => {
    switch(action.type){
        case REGISTER_SUC: {
            return{
                ...state,
                token: `${action.payload}`,
                isLoading: false,
                isError: false
            }
        }
        case REGISTER_REQ: {
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case REGISTER_FAIL: {
            return{
                ...state.registration,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return state
    }
}