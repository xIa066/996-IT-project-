import { GET_FAMILIES_OWNED } from "../actions/types";
import _ from 'lodash';

export default (state={ownedFamilies:null}, action) => {
    switch (action.type){
        case GET_FAMILIES_OWNED:
            return {...state, ownedFamilies: Object.values(_.mapKeys(action.payload, '_id'))};
        default:
            return state;
    }
}