import { connect } from 'react-redux';
import SagaSample from '../components/SagaSample';
import * as SampleAction from '../actions/saga';

const mapStateToProps = (state, ownProps) => ({
  ...state.sample,
  ...ownProps,
});

const mapDispatchToProps = {
  IncSync: SampleAction.IncreaseSync,
  DecSync: SampleAction.DecreaseSync,
  IncAsync: SampleAction.RequestIncreaseAsync,
  DecAsync: SampleAction.RequestDecreaseAsync,
  // IncAsync: SampleAction.IncreaseAsync,
  // DecAsync: SampleAction.DecreaseAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaSample);
