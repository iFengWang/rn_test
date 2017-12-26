import * as config from '../config';
import * as actionType from '../action/actionType';

function reducer(state = config.initState, action) {
  switch (action.type) {
    case actionType.XFCLICK:
      return {
        ...state,
        val: action.val
      }
    default:
      return state;
  }
}

export default reducer;