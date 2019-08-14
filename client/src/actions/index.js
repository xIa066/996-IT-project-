import axios from 'axios';

export const FetchWeather = (lat, lng) => async dispatch => {
  const response = await axios.get(`/getWeather/${lat}/${lng}`);
  console.log(response);
  dispatch({ type: 'FETCH_WEATHER', payload: response.data});
};

export const FetchLogin = () => async dispatch => {
  const response = await axios.get('/auth/login/success', {credentials: true});
  console.log(response.data);
  dispatch({ type: 'FETCH_LOGIN', payload: response.data});
};

export const FetchTrips = (userID, summary, temperature, windSpeed, distanace, duration, destination) => async dispatch => {
  console.log("lek shu");
  const add = await axios.post(`/createTrip`, {
    userID: userID,
    summary: summary,
    temperature: temperature,
    windSpeed: windSpeed,
    distanace: distanace,
    duration: duration,
    destination: destination
  });
  console.log("words");
  const response = await axios.get(`/trips`);
  dispatch({ type: 'FETCH_TRIPS', payload: response.data});
};

export const FetchParking = (lat, lng) => async dispatch => {
  const response = await axios.get(`/getParking/${lat}/${lng}`);
  dispatch({ type: 'FETCH_PARKING', payload: response.data});
};

export const FetchDepartLocation = location => {
  return {
    type: 'FETCH_DEPART_LOCATION',
    payload: location
  };
};

export const FetchDestination = location => {
  return {
    type: 'FETCH_DESTINATION',
    payload: location
  };
};

export const FetchDirections = directions => {
  return {
    type: 'FETCH_DIRECTIONS',
    payload: directions
  };
};

export const AddAddressDepart = address => {
  return{
    type: 'ADD_ADDRESS_DEPART',
    payload: address
  };
};
export const AddAddressDest = address => {
  return{
    type: 'ADD_ADDRESS_DEST',
    payload: address
  };
};

export const CheckParking = parkingOption => {
  return{
    type: 'CHECK_PARKING',
    payload: parkingOption
  };
};

export const AddDirectionsRoute = directions => {
  return{
    type: 'ADD_ROUTE',
    payload: directions.routes[0].legs[0]
  };
};

export const ChangeLocation = location => {
  return{
    type: 'CHANGE_LOCATION',
    payload: location
  };
};

export const SelectTrip = select => {
  return{
    type: 'SELECT_TRIP',
    payload: select
  };
};
