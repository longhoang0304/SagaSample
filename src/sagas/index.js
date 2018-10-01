import { IncAction, DecAction } from '../common/ActionTypes';
import { delay, randInt } from '../common/utils';
import { put, call, takeEvery, all } from 'redux-saga/effects'

const RequestIncreaseSync = () => ({
  type: IncAction.INCREASE_SYNC
});

const IncreaseSyncFailed = () => ({
  type: IncAction.INCREASE_SYNC_FAILED,
  payload: {
    errorMsg: 'Increasement failed!'
  }
});

const RequestIncreaseAsync = () => ({
  type: IncAction.INCREASE_ASYNC
});

const IncreaseSync = () => ({
  type: IncAction.INCREASE_SYNC_SUCCESS
});

// yield như return

function* increaseAsync() {
  yield put(RequestIncreaseSync());
  yield call(delay, 250);
  if (randInt() % 4)
    yield put(IncreaseSync());
  else
    yield put(IncreaseSyncFailed());
}

const RequestDecreaseSync = () => ({
  type: DecAction.DECREASE_SYNC
});

const DecreaseSyncFailed = () => ({
  type: DecAction.DECREASE_SYNC_FAILED,
  payload: {
    errorMsg: 'Decreasement failed!'
  }
});

const RequestDecreaseAsync = () => ({
  type: DecAction.DECREASE_ASYNC
});

const DecreaseSync = () => ({
  type: DecAction.DECREASE_SYNC_SUCCESS
});

/**
 * PUT {
 *  type: ABC
 * }
 */

function* decreaseAsync() {
  yield put(RequestDecreaseSync());
  yield call(delay, 250);
  if (randInt() % 4)
    yield put(DecreaseSync());
  else
    yield put(DecreaseSyncFailed());
}

function* watchIncreasementAsync() {
  yield takeEvery(IncAction.INCREASE_ASYNC, increaseAsync);
}

function* watchDecreasementAsync() {
  yield takeEvery(DecAction.DECREASE_ASYNC, decreaseAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncreasementAsync(),
    watchDecreasementAsync(),
  ])
}