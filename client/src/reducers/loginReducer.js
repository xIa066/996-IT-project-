const LoginState = {
    success: null,
    _id: null,
    googleId: null,
    username: null,
    firstname: null,
    surname: null,
};

export default (state = LoginState, action) => {
    switch (action.type) {
      case 'FETCH_LOGIN':
        return action.payload;
      default:
        return state;
    }
};
