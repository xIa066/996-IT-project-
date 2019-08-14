const directionsState = {
  route: null,
  depart: null,
  destination: null,
  parking: false,
  routeSelected: false
}

export default (state = directionsState, action) => {
  switch(action.type){
      case 'ADD_ADDRESS_DEPART':
        return ({
          ...state,
          depart: action.payload
        });
      case 'ADD_ADDRESS_DEST':
        return({
          ...state,
          destination: action.payload
        });
      case 'FETCH_DIRECTIONS':
        return ({
          ...state,
          route: action.payload
        });
      case 'CHECK_PARKING':
        return ({
          ...state,
          parking: action.payload
        });
      case 'ADD_ROUTE':
        return({
          ...state,
          route: action.payload
        });
      case 'SELECT_TRIP':
        return({
          ...state,
          routeSelected: action.payload
        });
      default:
        return state;
  }
};
