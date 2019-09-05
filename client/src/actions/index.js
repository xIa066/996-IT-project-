import artifacts from '../apis/artifacts';
import {
  FETCH_ARTIFACTS,
  CREATE_ARTIFACT,
  EDIT_ARTIFACT,
  DELETE_ARTIFACT,
  FETCH_ARTIFACT
} from './types';

export const fetchArtifacts = () => async dispatch => {
  const response = await artifacts.get('/artifacts');

  dispatch({ type: FETCH_ARTIFACTS, payload: response.data });
};

export const createArtifact = formValues => async dispatch => {
  const response = await artifacts.post('/createArtifact', formValues);

  dispatch({ type: CREATE_ARTIFACT, payload: response.data});
}

export const fetchArtifact = id => async dispatch => {
  const response = await artifacts.get(`/artifacts/${id}`);

  dispatch({ type: FETCH_ARTIFACT, payload: response.data });
}

export const editArtifact = (id, formValues) => async dispatch =>{
  const response = await artifacts.put(`/artifacts/${id}`, formValues);

  dispatch({ type: EDIT_ARTIFACT, payload: response.data });
}

export const deleteArtifact = id => async dispatch => {
  await artifacts.delete(`/artifacts/${id}`);

  dispatch({ type: DELETE_ARTIFACT, payload: id });
}
