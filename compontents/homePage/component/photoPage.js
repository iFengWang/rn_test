import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    CameraRoll,
    Image,
    TextInput,
    Clipboard,
    ImageEditor,
    ImageStore,
    NetInfo
} from 'react-native';

class photoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            curUrl:''
        };
    }

    async _getClipBoard() {
        let str = await Clipboard.getString();
        alert(str);
    }

    _getClipImg() {
        let url = 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3040495171,1406067477&fm=173&s=261455CFC2411947BA3A39BB03005018&w=550&h=404&img.JPEG';
        let clipData = {offset:{x:30,y:30},size:{width:50,height:50}};

        ImageEditor.cropImage(
            url, 
            clipData, 
            (uri) => {
                console.log('uri.......',uri);
                this._savePhoto(uri,'photo');
            }, 
            (err) => {
                console.log('err.......',err);
            }
        );
    }

    _savePhoto(url,type) {
        CameraRoll.saveToCameraRoll(url,type)
        .then((result) => {
            this._loadPhotos();
            // alert('保存成功，地址如下....',result);

            //删除ImageStore 内存中的图片-------
            ImageStore.hasImageForTag(uri, (has) => {
                console.log('1.......',has);
            });
            ImageStore.removeImageForTag(uri);
            ImageStore.hasImageForTag(uri, (has) => {
                console.log('2.......',has);
            });
            //--------------------------------
        })
        .catch((err) => {
            console.log('保存失败！.....',err);
        });
    }

    _loadPhotos() {
        let param = {
            first: 21,
            groupTypes: 'All',
            assetType: 'Photos'
        };
        CameraRoll.getPhotos(param)
        .then((data) => {
            let edges = data.edges;
            let images = edges.map((edge) => {
                return edge.node.image.uri;
            });
            this.setState({images});
        })
        .catch((err) => {
            console.log('error.....',err);
        });
    }

    async _getNetInfo() {
        let reach = await NetInfo.fetch().done(reach=>{reach});
        console.log('Network status...', reach, typeof reach);
    }

    componentWillMount() {
        this._loadPhotos();

        // NetInfo.isConnected.fetch().done((isConnected) => {
        //     console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        // });
        // function handleFirstConnectivityChange(isConnected) {
        //     console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
        //     // NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChange);
        // }
        // NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChange);

        NetInfo.fetch().done((reach) => {
            console.log('1.......',reach);
        });
        function netChangeHandler(reach) {
            console.log('2......',reach);
        }
        NetInfo.addEventListener('change',netChangeHandler);

    }

    render() {
        return (
            <View style={{flex:1}}>
                    <View style={{flex:1,flexDirection:'row', flexWrap:'wrap',padding:5}}>
                        <TouchableOpacity onPress={() => this._getClipBoard()} style={{margin:5, width:100,height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                            <Text>剪切板</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._getClipImg()} style={{margin:5, width:100,height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                            <Text>裁切图片</Text>
                        </TouchableOpacity>
                    </View>

                <View style={{flex:1,flexDirection:'row', flexWrap:'wrap',padding:5}}>
                    <TextInput 
                    style={{flex:1, borderWidth:1, borderColor:'gray'}} 
                    onChange={(event) => this.setState({curUrl:event.nativeEvent.text})} 
                    autoFocus={true}
                    placeholder={'请输入url'}
                    enablesReturnKeyAutomatically={true}
                    keyboardAppearance={'dark'}
                    clearButtonMode={'always'} />
                    <TouchableOpacity onPress={() => this._savePhoto(this.state.curUrl, 'photo')} style={{width:100,height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                        <Text>保存图片</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row', flexWrap:'wrap',padding:5}}>
                    {this.state.images.map((item,index) => {
                    return <View style={{margin:5,width:110,height:110, borderWidth:1, borderColor:'yellow', borderRadius:5, borderStyle:'dashed'}}>
                        <Image 
                        key={index} 
                        source={{uri:item}} 
                        style={{flex:1, borderRadius:5}} 
                        resizeMode="stretch" />
                    </View> 
                    })}
                </View>
            </View>
        );
    }
}

export default photoPage;