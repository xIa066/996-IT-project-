const defaultState = {
  resultsDepart: null,
  resultsDestination: null
}

export default (state = defaultState, action) => {
  switch(action.type){
    case 'FETCH_DEPART_LOCATION':
      return({
        ...state,
        resultsDepart: action.payload
      });
    case 'FETCH_DESTINATION':
      return({
        ...state,
        resultsDestination: action.payload
      });
    default:
      return state;
  }
};
