import web3Actions from '../actions/web3';

const web3 = (state = { connected: false }, action) => {
    if (action.type === web3Actions.NEWSTATE) {
        return Object.assign({}, action.payload.stateData);
    }
    return state;
};

export default web3;
