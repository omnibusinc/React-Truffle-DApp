import { combineReducers } from 'redux';
import { web3, contractInstance, account, balance, etherBalance, address } from './web3Reducer';
const rootReducer = combineReducers({
  web3,
  contractInstance,
  account,
  balance,
  etherBalance,
  address
});
export default rootReducer;
