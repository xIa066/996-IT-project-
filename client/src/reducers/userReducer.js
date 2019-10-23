import { CREATE_USER, FETCH_USER } from "../actions/types";

export default (state={}, action) => {
    switch (action.type){
        case FETCH_USER:
        case CREATE_USER:
            return { ...state,
                    userID: action.payload.userID,
                    families: action.payload.families,
                    name: action.payload.name,
                    bio: action.payload.bio,
                    dob: action.payload.dob,
                    photo: action.payload.photo,
                    email: action.payload.email
                };
        default:
            return state;
    }
}