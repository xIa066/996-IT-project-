export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_PARKING':
        return action.payload;
      default:
        return state;
    }
};
