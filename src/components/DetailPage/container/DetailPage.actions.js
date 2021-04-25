import DETAIL_PAGE_CONSTANTS from './DetailPage.constants.js';

export const getDetailDataAction = (payload) => {
    return {
      type: DETAIL_PAGE_CONSTANTS.GET_DETAIL_PAGE_DATA,
      payload
    };
  };

export const setDetailDataAction = (payload) => {
    return {
      type: DETAIL_PAGE_CONSTANTS.SET_DETAIL_PAGE_DATA,
      payload
    };
  };

export const setSelectedCountryAction = (payload) => {
    return {
      type: DETAIL_PAGE_CONSTANTS.SET_SELECTED_COUNTRY,
      payload
    };
};
