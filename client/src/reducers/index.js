import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import artifactReducer from './artifactReducer';
import uploadReducer from './uploadReducer';

export default combineReducers({
  artifacts: artifactReducer,
  upload: uploadReducer,
  form: formReducer
});
