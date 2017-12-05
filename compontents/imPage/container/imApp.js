import React,{ Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ImContainer from './imContainer';
import ImReducer from '../reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
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