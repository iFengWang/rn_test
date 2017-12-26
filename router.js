import React, { Component } from 'react';
import { Router, Stack, Scene, ActionConst} from 'react-native-router-flux';

import HomePage from './compontents/homePage';
import ImPage from './compontents/imPage';
import PhotoPage from './compontents/homePage/component/photoPage';
import SvgPage from './compontents/imPage/component/svgPage';

class XSYRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" init={true} component={HomePage} title="home" hideNavBar={true} />
          <Scene key="tab_main" tabs={true} type={ActionConst.RESET}>
            <Scene key="one" init={true} component={ImPage} title="one" hideNavBar={false} />
            <Scene key="two" component={PhotoPage} title="two" hideNavBar={true} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default XSYRouter;