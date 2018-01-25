import React, { Component } from 'react';
import { Router,Tabs, Modal, Lightbox, Drawer, Stack, Scene, ActionConst} from 'react-native-router-flux';
import {
  Image
} from 'react-native';

import LaunchPage from './compontents/launchPage/components/launch';

import LoginPage from './compontents/loginPage/components/loginPage';
import ForgetPage from './compontents/loginPage/components/forgetPwd';
import Register from './compontents/loginPage/components/register';

import HomePage from './compontents/homePage';
import ImPage from './compontents/imPage';
import PhotoPage from './compontents/homePage/component/photoPage';
// import SvgPage from './compontents/imPage/component/svgPage';
import CrmPage from './compontents/crmPage/components/crmPage';
import OaPage from './compontents/oaPage/components/oaPage';
import MePage from './compontents/mePage/components/mePage';

class XSYRouter extends Component {
  render() {
    return (
      <Router>
        <Modal key="root">
        
          <Scene key="launch" component={LaunchPage} hideNavBar={true} />

          <Stack key="loginUi" hideNavBar={true}>
            <Scene key="login" component={LoginPage} hideNavBar={true} navTransparent={true}/>
            <Scene key="forget" component={ForgetPage} title="forget" hideNavBar={false} />
            <Scene key="register" component={Register} title="register" hideNavBar={false} />
          </Stack>

          <Tabs key="tab_main" 
            wrap={false}
            // type={ActionConst.RESET} 
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
              <Scene key="home_one" init={true} component={HomePage} title="首页" hideNavBar={true} />
              <Scene key="home_two" component={PhotoPage} title="two" hideTabBar={true} hideNavBar={false} lazy={true} />
            </Stack>
            
            <Stack key="im" 
            hideNavBar={true} 
            navigationBarStyle={{backgroundColor:'red'}}
            navTransparent={false} 
            icon={() => <Image source={require('./images/2.png')} style={{width:30,height:30}} />}
            >
              <Scene key="im_one" 
              init={true} component={ImPage} title="聊天" hideNavBar={false} navTransparent={false} lazy={true} />
            </Stack>
            
            <Stack key="crm" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/3.png')} style={{width:30,height:30}} />}
            >
              <Scene key="crm_one" init={true} component={CrmPage} title="CRM" hideNavBar={false} navTransparent={false} lazy={true} />
            </Stack>
            
            <Stack key="oa" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/4.png')} style={{width:30,height:30}} />}
            >
              <Scene key="oa_one" init={true} component={OaPage} title="OA" hideNavBar={false} navTransparent={false} lazy={true} />
            </Stack>
            
            <Stack key="me" 
            hideNavBar={true} 
            navTransparent={false} 
            icon={() => <Image source={require('./images/5.png')} style={{width:30,height:30}} />}
            >
              <Scene key="me_one" init={true} component={MePage} title="个人中心" hideNavBar={true} navTransparent={false} lazy={true} />
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