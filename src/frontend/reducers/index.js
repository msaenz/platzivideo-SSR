const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'DELETE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload)
      }
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "PROD_CATEGORY_REQUEST":
      return {
        ...state,
        products: action.payload
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.news.find((item) => item.id === Number(action.payload)) ||
          []
      };
    case "CHECK_PRODUCT":
      return {
        ...state,
        prodbuy: action.payload ||
        []
      };
    case "GET_PROD_CATEGORY":
      return {
        ...state,
        products:
          state.products.find((item) => item.idcategory === Number(action.payload)) ||
          []
      };
    case "HANDLE_PAY_CART":
      return {
        ...state,
        prodbuy: action.payload ||
        []
      };
    default:
      return state;
  }
};

export default reducer;
