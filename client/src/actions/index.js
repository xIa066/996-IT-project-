import unsplash from '../apis/unsplash';

export const fetchArtifacts () => async dispatch => {
  const response = await unsplash.get('/photos/random');

  dispatch({ type: 'FETCH_ARTIFACTS', payload: response });
};
