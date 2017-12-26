import React, { Component } from 'react';
import { Router,Tabs, Stack, Scene, ActionConst} from 'react-native-router-flux';

import LoginPage from './compontents/loginPage/components/loginPage';
import HomePage from './compontents/homePage';
import ImPage from './compontents/imPage';
import PhotoPage from './compontents/homePage/component/photoPage';
import SvgPage from './compontents/imPage/component/svgPage';

class XSYRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene key="login" init={true} component={LoginPage} title="login" hideNavBar={true} modal={true} type={ActionConst.RESET} />

          <Tabs key="tab_main" 
          type={ActionConst.RESET} 
          swipeEnabled={false} 
          animationEnabled={false}
          >
            <Stack key="home" hideNavBar={true} navTransparent={false} lazy={true} title="home" >
              <Scene key="home_one" init={true} component={ImPage} title="one" hideNavBar={true} />
              <Scene key="home_two" component={PhotoPage} title="two" hideTabBar={true} hideNavBar={false} lazy={true} />
            </Stack>
            <Stack key="message" hideNavBar={true} navTransparent={false} lazy={true}>
              <Scene key="message_one" init={true} component={PhotoPage} title="message_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="message_two" component={ImPage} title="message_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            <Stack key="crm" hideNavBar={true} navTransparent={false} lazy={true}>
              <Scene key="crm_one" init={true} component={ImPage} title="crm_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="crm_two" component={PhotoPage} title="crm_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            <Stack key="oa" hideNavBar={true} navTransparent={false} lazy={true}>
              <Scene key="oa_one" init={true} component={ImPage} title="oa_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="oa_two" component={PhotoPage} title="oa_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            <Stack key="me" hideNavBar={true} navTransparent={false} lazy={true}>
              <Scene key="me_one" init={true} component={PhotoPage} title="me_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="me_two" component={ImPage} title="me_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>

          </Tabs>

        </Scene>
      </Router>
    );
  }
}

export default XSYRouter;