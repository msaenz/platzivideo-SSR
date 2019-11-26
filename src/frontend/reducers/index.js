const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload)
      };
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
        prodbuy:
          state.products.find((item) => item.idproducto === Number(action.payload)) ||
        [{
          "idproducto": 3,
          "detail": "Discos",
          "idcategory": 3,
          "image": "/assets/products/MUGS.jpg",
          "priceini": 50000,
          "price": 20000,
          "idmarca": 1,
        }]
      };
    case "GET_PROD_CATEGORY":
      return {
        ...state,
        products:
          state.products.find((item) => item.idcategory === Number(action.payload)) ||
          []
      };
    default:
      return state;
  }
};

export default reducer;
