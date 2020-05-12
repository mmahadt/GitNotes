export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  // client_id: process.env.REACT_APP_CLIENT_ID,
  // redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  // client_secret: process.env.REACT_APP_CLIENT_SECRET,
  // proxy_url: process.env.REACT_APP_PROXY_URL,
  client_id: "140175d9326105eeb61a",
  redirect_uri: "http://localhost:3000/login",
  client_secret: "c2af1325f1eb0f9600a0246162b9a876fed68bc1",
  proxy_url: "http://localhost:5000/authenticate",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      console.log(action.payload.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
};
