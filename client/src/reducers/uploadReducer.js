import { UPLOAD_IMAGE } from "../actions/types";

export default (state={}, action) => {
	switch(action.type){
		case UPLOAD_IMAGE:
			return {...state, url: action.payload.photo };
		default:
			return state;
	}
		
}