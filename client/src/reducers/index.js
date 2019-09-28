import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import artifactReducer from './artifactReducer';

export default combineReducers({
  artifacts: artifactReducer,
  form: formReducer
});
