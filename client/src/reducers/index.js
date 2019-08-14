import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from './weatherReducer';
import parkingReducer from './parkingReducer';
import directionsReducer from './directionsReducer';
import locationReducer from './locationReducer';
import tripsReducer from './tripsReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  weather: weatherReducer,
  parking: parkingReducer,
  directions: directionsReducer,
  location: locationReducer,
  login: loginReducer,
  form: formReducer,
  trips: tripsReducer
});
