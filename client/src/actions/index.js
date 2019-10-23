import backend from '../apis/backend';
import history from '../history';
import {
  FETCH_ARTIFACTS,
  CREATE_ARTIFACT,
  EDIT_ARTIFACT,
  DELETE_ARTIFACT,
  FETCH_ARTIFACT,
  UPLOAD_IMAGE,
  FETCH_USER,
  CREATE_USER,
  GET_FAMILIES_OWNED,
} from './types';

export const fetchArtifacts = () => async dispatch => {
  const response = await backend.get('/artifacts');

  dispatch({ type: FETCH_ARTIFACTS, payload: response.data });
};

export const createArtifact = formValues => async dispatch => {
  const response = await backend.post('/createArtifact', formValues);

  dispatch({ type: CREATE_ARTIFACT, payload: response.data});
  history.push('/');
}

export const fetchArtifact = id => async dispatch => {
  const response = await backend.get(`/getArtifact/${id}`);

  console.log(response.data);
  dispatch({ type: FETCH_ARTIFACT, payload: response.data });
}

export const editArtifact = (id, formValues) => async dispatch =>{
  const response = await backend.put(`/update/${id}`, formValues);

  dispatch({ type: EDIT_ARTIFACT, payload: response.data });
  history.push(`/artifacts/view/${id}`);
}

export const deleteArtifact = id => async dispatch => {
  await backend.delete(`/delete/${id}`);

  dispatch({ type: DELETE_ARTIFACT, payload: id });
  history.push('/');
}

export const uploadImage = fileData => async dispatch => {
  const config = { headers: {'content-type': 'multipart/form-data'} }
  const response = await backend.post(`/uploadImage`, fileData, config);

  console.log(response.data);
  dispatch({ type: UPLOAD_IMAGE, payload: response.data });
}

export const getUser = authUser => async dispatch => {
  const form = { 'name': authUser.nickname, "userID": authUser.sub, 'email': authUser.email }
  const user = await backend.get(`/getUser/${authUser.sub}`);
  //if user isn't in database
  if(!user.data){
    const response = await backend.post('/createUser', form)
    console.log(response.data);
    dispatch({ type: CREATE_USER, payload: response.data });
  }else{
    dispatch({ type: FETCH_USER, payload: user.data});
  }
}

export const getOwnedFamilies = authUser => async dispatch => {
  const response = await backend.get(`/getFamiliesByOwner/${authUser.sub}`);
  dispatch({ type: GET_FAMILIES_OWNED, payload: response.data });
}