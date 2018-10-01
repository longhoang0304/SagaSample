import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunkMiddleware),
    applyMiddleware(sagaMiddleware),
  );
  return store;
};

// export const runSaga = () => null;
export const runSaga = () => sagaMiddleware.run(rootSaga);
