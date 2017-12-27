import React, { Component } from 'react';
import { Router,Tabs, Modal, Lightbox, Drawer, Stack, Scene, ActionConst} from 'react-native-router-flux';
import {
  Image,
  Text
} from 'react-native';

import LoginPage from './compontents/loginPage/components/loginPage';
import ForgetPage from './compontents/loginPage/components/forgetPwd';
import Register from './compontents/loginPage/components/register';

import HomePage from './compontents/homePage';
import ImPage from './compontents/imPage';
import PhotoPage from './compontents/homePage/component/photoPage';
import SvgPage from './compontents/imPage/component/svgPage';

class XSYRouter extends Component {
  render() {
    return (
      <Router>
        <Modal key="root">
        
          <Stack key="unlogin" hideNavBar={true}>
            <Scene key="login" init={true} component={LoginPage} hideNavBar={true} navTransparent={true}/>
            <Scene key="forget" component={ForgetPage} title="forget" hideNavBar={false} />
            <Scene key="register" component={Register} title="register" hideNavBar={false} />
          </Stack>

          <Tabs key="tab_main" 
            wrap={false}
            type={ActionConst.RESET} 
            swipeEnabled={false} 
            animationEnabled={false} 
            lazy={true}
            // activeBackgroundColor="white"
            // inactiveBackgroundColor="rgba(0, 255, 0, 0.5)"
            activeTintColor="red"
            inactiveTintColor="rgba(0, 255, 0, 0.5)"
            >
            
            <Stack key="home" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/1.png')} style={{width:30,height:30}} />}
            >
              <Scene key="home_one" init={true} component={HomePage} title="one" hideNavBar={true} />
              <Scene key="home_two" component={PhotoPage} title="two" hideTabBar={true} hideNavBar={false} lazy={true} />
            </Stack>
            
            <Stack key="message" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/2.png')} style={{width:30,height:30}} />}
            >
              <Scene key="message_one" init={true} component={PhotoPage} title="message_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="message_two" component={ImPage} title="message_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            
            <Stack key="crm" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/3.jpeg')} style={{width:30,height:30}} />}
            >
              <Scene key="crm_one" init={true} component={ImPage} title="crm_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="crm_two" component={PhotoPage} title="crm_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            
            <Stack key="oa" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/4.png')} style={{width:30,height:30}} />}
            >
              <Scene key="oa_one" init={true} component={ImPage} title="oa_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="oa_two" component={PhotoPage} title="oa_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
            
            <Stack key="me" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/5.png')} style={{width:30,height:30}} />}
            >
              <Scene key="me_one" init={true} component={PhotoPage} title="me_one" hideNavBar={false} navTransparent={false} lazy={true} />
              <Scene key="me_two" component={ImPage} title="me_two" hideTabBar={false} hideNavBar={true} lazy={true} />
            </Stack>
          </Tabs>

          <Drawer key="menu" drawerWidth={100}>
            <Scene key="menu_two" component={ImPage} />
          </Drawer>

          <Lightbox key="lightbox">
            <Scene key="lightbox_one" component={LoginPage} />
          </Lightbox>

        </Modal>
      </Router>
    );
  }
}

export default XSYRouter;