import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import AppContainer from './containers/AppContainer';
import Home from './components/Home';
import About from './components/About';
import reducers from '../js/reducers';
import { web3 } from './blockchain/blockchainInterface';
import Web3Monitor from './blockchain/monitor';
import initialState from './initialState';
import { web3StateChanged } from './actionCreators/web3ActionCreators';
const store = createStore(reducers, initialState(), applyMiddleware(thunk));
const rootEl = document.getElementById('app');
const web3monitor = new Web3Monitor(web3);
//
import { default as contract } from 'truffle-contract';
// Import our contract artifacts (compiled by truffle) and turn them into usable abstractions.
import examplecoin_artifacts from '../../build/contracts/ExampleCoin.json';
//Our usable abstraction
const ExampleCoin = contract(examplecoin_artifacts);

web3monitor.on("newState", (web3state) => {
    debugger;
    ExampleCoin.setProvider(web3.currentProvider);
    store.dispatch(web3StateChanged(web3state));
});

const renderApp = () => {
  return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ AppContainer }>
            <IndexRoute component={ Home } />
            <Route path="about" component={ About } />
          </Route>
        </Router>
      </Provider>
  )
}

render(renderApp(), rootEl);
