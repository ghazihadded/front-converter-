import {
  READ_DATA,
  DELETE_DATA,
  DELETE_DATA_UNITE,
  DELETE_ALL_DATA,
} from "../action/type";
import { unite } from "../data/data";
const initialState = {
  unitItem: [],
  convertItem: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_DATA:
      return { ...state, unitItem: unite, convertItem: unite };
    case DELETE_DATA:
      return {
        ...state,
        convertItem: state.convertItem.filter((el) => el !== action.payload),
      };
    case DELETE_DATA_UNITE:
      return {
        ...state,
        unitItem: state.unitItem.filter((el) => el !== action.payload),
      };
    case DELETE_ALL_DATA:
      return {
        ...state,
        unitItem: [],
        convertItem: [],
      };

    default:
      return state;
  }
};

export default reducer;
