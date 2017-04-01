import web3Actions from '../actions/web3';

export function web3StateChanged(stateData) {
  return { type: web3Actions.NEWSTATE, payload: { stateData } };
};

