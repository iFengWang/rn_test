import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImPage from '../component/imPage';
import * as ImAction from '../action/action';

class imContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImPage {...this.props} />
        );
    }
}

export default connect(
    state =>({
        state:state.imReducer,
        // full:state
    }),
    dispatch => ({
        action:bindActionCreators(ImAction,dispatch)
    })
)(imContainer);