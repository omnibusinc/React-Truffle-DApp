import web3Actions from '../actions/web3';
import ExampleCoin from '../contractInterfaces/ExampleCoin';

export function web3(state = { connected: false }, action) {
  switch(action.type) {
    case web3Actions.NEW_STATE:
      return Object.assign({}, action.payload.stateData);
    default: return state;
  }
};

export function contractInstance(state = {}, action) {
  switch(action.type) {
    case web3Actions.SUCCESS_DEPLOY_EXAMPLECOIN_CONTRACT:
      return Object.assign({}, action.payload.contractInstance);
    default: return state;
  }
}

export function account(state = {}, action) {
  switch(action.type) {
    case web3Actions.NEW_STATE:
      return action.payload.stateData.accounts[0];
    default: return state;
  }
};

export function balance(state = null, action) {
  switch(action.type) {
    case web3Actions.SET_BALANCE:
      return action.payload.balance;
    default: return state;
  }
}

export function etherBalance(state = null, action) {
  switch(action.type) {
    case web3Actions.SET_BALANCE_IN_ETHER:
      return action.payload.balance;
    default: return state;
  }
}

export function address(state = null, action) {
  switch(action.type) {
    case web3Actions.NEW_STATE:
      return action.payload.stateData.accounts[0].address;
    default: return state;
  }
}
