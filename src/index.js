import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'babel-polyfill';

import BoardCreatePage from './pages/BoardCreatePage';
import BoardListPage from './pages/BoardListPage';
import BoardUpdatePage from './pages/BoardUpdatePage';
import BoardViewPage from './pages/BoardViewPage';

import rootReducer from './reducers';
import '../public/index.scss';

const store = createStore(rootReducer);

if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ BoardListPage } />
        <Route exact path='/create' component={ BoardCreatePage } />
        <Route path='/list' component={ BoardListPage } />
        <Route path='/update/:id' component={ BoardUpdatePage } />
        <Route path='/view/:id' component={ BoardViewPage } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('wrapper')
);