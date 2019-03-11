const initialState = [{ username: null, error: false, loading: false }];

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };

    case 'LOGIN_FAILURE':
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}
