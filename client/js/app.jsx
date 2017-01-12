;import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Route, Router, browserHistory, applyRouterMiddleware } from 'react-router';
import Wrapper from './components/Wrapper';
import reducers from '../js/reducers';
const initialState = require('./initialState');
const store = createStore(reducers, initialState(), applyMiddleware(thunk));
const rootEl = document.getElementById('app');

// const renderApp = () => {
//   <AppContainer>
//     <Provider store={ store }>
//       <Router history={ browserHistory }>
//         <Route path="/" component={ Wrapper }></Route>
//       </Router>
//     </Provider>
//   </AppContainer>
// }

const renderApp = () => {
  return (
    <div>
      Welcome to the Starter!
    </div>
  )
}

render(renderApp(), rootEl);
