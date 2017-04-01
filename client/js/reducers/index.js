import { combineReducers } from 'redux';
import { example } from './exampleReducer';
import web3 from './web3Reducer';
const rootReducer = combineReducers({
  example,
  web3
});
export default rootReducer;
