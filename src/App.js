import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import SagaSample from './components/SagaSample';
import SagaSample from './containers/SagaSample';
import configureStore, {runSaga} from './configureStore';

const store = configureStore();
runSaga();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SagaSample />
      </Provider>
    );
  }
}

export default App;
