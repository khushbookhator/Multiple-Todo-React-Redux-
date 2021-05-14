import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, createStore , compose} from 'redux';
import { todoReducer } from "./Todo/Reducer";


const rootReducer = combineReducers({
    todo: todoReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)