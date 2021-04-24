import LIST_PAGE_CONSTANTS from './ListPage.constants.js';

export const getListDataAction = (payload) => {
    return {
      type: LIST_PAGE_CONSTANTS.GET_LIST_DATA,
      payload
    };
  };

export const setListDataAction = (payload) => {
    return {
      type: LIST_PAGE_CONSTANTS.SET_LIST_DATA,
      payload
    };
  };
