import {combineReducers} from 'redux';
import AddReducer from './AddReducer';

const rootReducer= combineReducers({
      add:AddReducer
})
export default rootReducer;  
