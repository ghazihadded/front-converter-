import { createStore, compose } from "redux";

import reduce from "../Reducer/ConverterReducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reduce, compose(devTools));

export default store;
