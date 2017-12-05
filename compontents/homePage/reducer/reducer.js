import * as actionType from '../action/actionType';
import * as config from '../config';

function reducer(state=config.data, action) {
    switch(action.type) {
        case actionType.ADD_DATA:
            let newAry = state.concat(action.item);
            return newAry;
        case actionType.START_REQUEST:
            return {
                ...state,
                isFething:true
            };
        case actionType.REQUESPONSE_SUCCESS:
            return {
                ...state,
                isFething:false,
                items:action.items
            };
        case actionType.REQUESPONSE_FAIL:
            return {
                ...state,
                isFething:false
            };
        default:
            return state;
    }
}

export default reducer;