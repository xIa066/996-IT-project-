import _ from 'lodash';
import { FETCH_ARTIFACTS } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_ARTIFACTS:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    default:
      return state;
  }
}
