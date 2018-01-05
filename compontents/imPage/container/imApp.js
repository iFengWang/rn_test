import React,{ Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ImContainer from './imContainer';
import ImReducer from '../reducer';

import {logger, crash} from '../../../middlewares/logger';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
let store = createStoreWithMiddleware(ImReducer);

class imApp extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Provider store={store}>
                <ImContainer {...this.props} />
            </Provider>
        );
    }
}

export default imApp;