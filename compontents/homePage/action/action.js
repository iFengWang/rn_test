import * as actionType from './actionType';

export function addData(item) {
    return {
        type:actionType.ADD_DATA,
        item:item
    }
}

export function showData() {
    return function(dispatch) {
        dispatch({type:actionType.START_REQUEST});

    //     fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
    //         method: 'GET',
    //         headers: {
    //            'Content-Type': 'application/json'
    //        }
    //    })
    //    .then((response) => response.json())
    //    .then((jsonData) => {
    //         dispatch({type:actionType.REQUESPONSE_SUCCESS, items:jsonData.data});
    //         console.log('成功.....',jsonData.data);
    //    })
    //    .catch((err) => {//2
    //         dispatch({type:actionType.REQUESPONSE_FAIL, error:err});
    //         console.log('失败.....',err);
    //    });
    
       let request = new Request('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
            method: 'GET',
            timeout: 10000,
            headers: ({
                    'Content-Type': 'application/json'
                })
        });
        fetch(request)
        .then((response) => response.json())
        .then((jsonData) => {
            dispatch({type:actionType.REQUESPONSE_SUCCESS, items:jsonData.data});
            console.log('成功.....',jsonData.data);
        })
        .catch((err) => {
            dispatch({type:actionType.REQUESPONSE_FAIL, error:err});
            console.log('失败.....',err);
        });
    }
}