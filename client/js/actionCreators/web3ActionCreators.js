import thunk from 'redux-thunk';
import web3Actions from '../actions/web3';
import ExampleCoin from '../contractInterfaces/ExampleCoin';

export function updateWeb3State(stateData) {
  return { type: web3Actions.NEW_STATE, payload: { stateData } };
}

export function contractDeployed(contractInstance) {
  return { type: web3Actions.SUCCESS_DEPLOY_EXAMPLECOIN_CONTRACT, payload: { contractInstance }};
}

export function setAccount(account) {
  return { type: web3Actions.SET_ACCOUNT, payload: { account } };
};

export function setBalance(balance) {
  return { type: web3Actions.SET_BALANCE, payload: { balance } };
}

export function setBalanceInEther(balance) {
  return { type: web3Actions.SET_BALANCE_IN_ETHER, payload: { balance } };
};

// THUNKS

export function web3StateChanged(stateData) {
  return dispatch => {
    dispatch(updateWeb3State(stateData));
    dispatch(deployExampleCoinContract(stateData));
  }
};

//FIXME: This on needs to happen on app init.
export function deployExampleCoinContract(stateData) {
  return dispatch => {
    dispatch({ type: web3Actions.REQUEST_DEPLOY_EXAMPLECOIN_CONTRACT });
    return ExampleCoin.deployed()
      .then(function(instance) {
        dispatch(contractDeployed(instance));
        dispatch(getBalance(instance, stateData.accounts[0]));
        return dispatch(getBalanceInEther(instance, stateData.accounts[0]));
      });
  }
}

export function getBalance(instance, account) {
  return dispatch => {
    return instance.getBalance.call(account.address, { from: account.address })
      .then(function(value) {
        return dispatch(setBalance(value.valueOf()));
      })
  };
};

export function getBalanceInEther(instance, account) {
  return dispatch => {
    return instance.getBalanceInEth.call(account.address, { from: account.address })
      .then(function(value) {
        return dispatch(setBalanceInEther(value.valueOf()));
      })
  };
}
