import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../action/action';
import HomePageComponent from '../component/homePage';

class homePageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //准备数据
    }

    render() {
        return (
           <HomePageComponent {...this.props} />
        );
    }
}

export default connect(
    state => ({
        state:state.homePageReducer,
        // full:state
    }),
    dispatch => ({
        actions:bindActionCreators(actions,dispatch)
    })
)(homePageContainer);