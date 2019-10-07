import artifacts from '../apis/artifacts';
import login from '../apis/login';
import history from '../history';
import {
  FETCH_ARTIFACTS,
  CREATE_ARTIFACT,
  EDIT_ARTIFACT,
  DELETE_ARTIFACT,
  FETCH_ARTIFACT,
  UPLOAD_IMAGE,
  FETCH_USER,
} from './types';

export const fetchArtifacts = () => async dispatch => {
  const response = await artifacts.get('/artifacts');

  dispatch({ type: FETCH_ARTIFACTS, payload: response.data });
};

export const createArtifact = formValues => async dispatch => {
  const response = await artifacts.post('/createArtifact', formValues);

  dispatch({ type: CREATE_ARTIFACT, payload: response.data});
  history.push('/');
}

export const fetchArtifact = id => async dispatch => {
  const response = await artifacts.get(`/getArtifact/${id}`);

  console.log(response.data);
  dispatch({ type: FETCH_ARTIFACT, payload: response.data });
}

export const editArtifact = (id, formValues) => async dispatch =>{
  const response = await artifacts.put(`/update/${id}`, formValues);

  dispatch({ type: EDIT_ARTIFACT, payload: response.data });
  history.push(`/artifacts/view/${id}`);
}

export const deleteArtifact = id => async dispatch => {
  await artifacts.delete(`/delete/${id}`);

  dispatch({ type: DELETE_ARTIFACT, payload: id });
  history.push('/');
}

export const uploadImage = fileData => async dispatch => {
  const config = { headers: {'content-type': 'multipart/form-data'} }
  const response = await artifacts.post(`/uploadImage`, fileData, config);

  console.log(response.data);
  dispatch({ type: UPLOAD_IMAGE, payload: response.data });
}

export const fetchUser = () => async dispatch =>{
  const response = await artifacts.get("/callback");
  console.log(response);
  dispatch({ type:FETCH_USER, payload: response.data });
}

export const fetchToken = () => async dispatch => {
  const response = await login.post('/');
}