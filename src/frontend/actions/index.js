import axios from "axios";
// require("dotenv").config();

export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload
});

export const prodCategoryRequest = (payload) => ({
  type: "PROD_CATEGORY_REQUEST",
  payload
});

export const getVideoSource = (payload) => ({
  type: "GET_VIDEO_SOURCE",
  payload
});

export const checkProduct = (payload) => ({
  type: "CHECK_PRODUCT",
  payload
});

export const getProdCategory = (id) => {
  console.log("Get prod cat", id)
  return (dispatch) => {
    axios
      .get(`/products/category/${id}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(prodCategoryRequest(data))
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios
      .post("/api/auth/sign-up", payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  console.log("Login user...actions");
  return (dispatch) => {
    axios({
      url: "/api/auth/sign-in",
      method: "post",
      auth: {
        username: email,
        password
      }
    })
      .then(({ data }) => {
        document.cookie = `email = ${data.email}`;
        document.cookie = `name = ${data.name}`;
        document.cookie = `id = ${data.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export { setFavorite as default };
