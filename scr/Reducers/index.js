import {combineReducers} from 'redux'
import UserReducer from './reducerUser'
import ActiveUserReducer from './reducerUserActive'
const allReducers= combineReducers(
    {
        users: UserReducer,
        activeUser:ActiveUserReducer
    }
);

export default allReducers;