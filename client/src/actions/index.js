import artifacts from '../apis/artifacts';
import history from '../history';
import {
  FETCH_ARTIFACTS,
  CREATE_ARTIFACT,
  EDIT_ARTIFACT,
  DELETE_ARTIFACT,
  FETCH_ARTIFACT,
  UPLOAD_IMAGE,
} from './types';

export const fetchArtifacts = () => async dispatch => {
  const response = await artifacts.get('/artifacts');

  dispatch({ type: FETCH_ARTIFACTS, payload: response.data });
};

export const createArtifact = formValues => async dispatch => {
  const response = await artifacts.post('/createArtifact', formValues);

  dispatch({ type: CREATE_ARTIFACT, payload: response.data});
  history.push('/artifacts');
}

export const fetchArtifact = id => async dispatch => {
  const response = await artifacts.get(`/getArtifact/${id}`);

  console.log(response.data);
  dispatch({ type: FETCH_ARTIFACT, payload: response.data });
}

export const editArtifact = (id, formValues) => async dispatch =>{
  const response = await artifacts.put(`/getArtifact/${id}`, formValues);

  dispatch({ type: EDIT_ARTIFACT, payload: response.data });
}

export const deleteArtifact = id => async dispatch => {
  await artifacts.delete(`/getArtifact/${id}`);

  dispatch({ type: DELETE_ARTIFACT, payload: id });
}

export const uploadImage = fileData => async dispatch => {
  const config = { headers: {'content-type': 'multipart/form-data'} }
  const response = await artifacts.post(`/uploadImage`, fileData, config);

  console.log(response.data);
  dispatch({ type: UPLOAD_IMAGE, payload: response.data });
}