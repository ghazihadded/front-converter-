import {
  READ_DATA,
  DELETE_DATA,
  DELETE_DATA_UNITE,
  DELETE_ALL_DATA,
} from "./type";

export const readData = () => {
  return {
    type: READ_DATA,
  };
};

export const deleteData = (el, type) => {
  if (type === "converter") {
    return {
      type: DELETE_DATA,
      payload: el,
    };
  } else {
    return {
      type: DELETE_DATA_UNITE,
      payload: el,
    };
  }
};

export const deleteAllData = () => {
  return {
    type: DELETE_ALL_DATA,
  };
};
