import { IncAction, DecAction } from '../common/ActionTypes';
import { delay, randInt } from '../common/utils';

const RequestIncreaseSync = () => ({
  type: IncAction.INCREASE_SYNC
});

export const IncreaseSync = () => ({
  type: IncAction.INCREASE_SYNC_SUCCESS
});

const IncreaseSyncFailed = () => ({
  type: IncAction.INCREASE_SYNC_FAILED,
  payload: {
    errorMsg: 'Increasement failed!'
  }
});

export const IncreaseAsync = () => async (dispatch) => {
  dispatch(RequestIncreaseSync());
  await delay(250);
  if (randInt() % 4)
    dispatch(IncreaseSync());
  else
    dispatch(IncreaseSyncFailed());
};

const RequestDecreaseSync = () => ({
  type: DecAction.DECREASE_SYNC
});

export const DecreaseSync = () => ({
  type: DecAction.DECREASE_SYNC_SUCCESS
});

const DecreaseSyncFailed = () => ({
  type: DecAction.DECREASE_SYNC_FAILED,
  payload: {
    errorMsg: 'Decreasement failed!'
  }
});

export const DecreaseAsync = () => async (dispatch) => {
  dispatch(RequestDecreaseSync());
  await delay(250);
  if (randInt() % 4)
    dispatch(DecreaseSync());
  else
    dispatch(DecreaseSyncFailed());
};