import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from '../reducer';
import HomePageContainer from './homePageContainer';
import {logger, crash} from '../../../middlewares/logger';

// const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
// const store = createStoreWithMiddleware(reducer);

import devTools from 'remote-redux-devtools';
function configureStore(initialState){
  const enhancer=compose(
    applyMiddleware(thunk, logger),
    devTools()
  );
  const store=createStore(reducer,initialState,enhancer);
  devTools.updateStore(store);
  return store;
}
const store=configureStore();

class homePageApp extends Component {

  constructor(props) {
    super(props);
    // generateId();
  }

  render() {
    return (
      <Provider store={store}>
        <HomePageContainer />
      </Provider>
    );
  }
}

export default homePageApp;