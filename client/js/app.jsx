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
import { web3StateChanged, setAccount } from './actionCreators/web3ActionCreators';
import ExampleCoin from './contractInterfaces/ExampleCoin';
const store = createStore(reducers, initialState(), applyMiddleware(thunk));
const rootEl = document.getElementById('app');
const web3monitor = new Web3Monitor(web3);

web3monitor.on("newState", (web3state) => {
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
