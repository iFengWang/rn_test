import {combineReducers} from 'redux';
import homePageReducer from './reducer';
import imReducer from '../../imPage/reducer/imReducer';

let homePageReducers = combineReducers({
    homePageReducer,
    imReducer
});

export default homePageReducers;
