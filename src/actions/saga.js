import { IncAction, DecAction } from '../common/ActionTypes';

export const RequestDecreaseAsync = () => ({
  type: DecAction.DECREASE_ASYNC
});

export const DecreaseSync = () => ({
  type: DecAction.DECREASE_SYNC_SUCCESS
});

export const RequestIncreaseAsync = () => ({
  type: IncAction.INCREASE_ASYNC
});

export const IncreaseSync = () => ({
  type: IncAction.INCREASE_SYNC_SUCCESS
});