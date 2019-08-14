const defaultWeatherState = {
    location: null,
    currently: null,
    daily: null
};

export default (state = defaultWeatherState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return {
        ...state,
        currently: action.payload.currently,
        daily: action.payload.daily
      };
    case 'CHANGE_LOCATION':
      return{
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}
