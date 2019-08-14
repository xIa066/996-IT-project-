export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
      return action.payload;
    default:
      return state;
  }
}
