import { IncAction, DecAction } from '../common/ActionTypes';
import { combineReducers } from 'redux';

const initState = {
  value: 0,
  isLoading: false,
  errorMsg: '',
};

const reducer = (state = initState, action) => {
  const { errorMsg } = action.payload || {};
  switch (action.type) {
    case DecAction.DECREASE_SYNC:
    case IncAction.INCREASE_SYNC: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      }
    }
    case DecAction.DECREASE_SYNC_FAILED:
    case IncAction.INCREASE_SYNC_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMsg,
      }
    }
    case IncAction.INCREASE_SYNC_SUCCESS: {
      return {
        ...state,
        value: state.value + 1,
        isLoading: false,
      }
    }
    case DecAction.DECREASE_SYNC_SUCCESS: {
      return {
        ...state,
        value: state.value - 1,
        isLoading: false,
      }
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  sample: reducer,
});