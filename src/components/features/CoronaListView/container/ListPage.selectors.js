import { LIST_PAGE_REDUCER_KEY,DETAIL_PAGE_REDUCER_KEY } from '../../../../constants/reducer.constants';

/**
 * Selector function to return redux list data state
 * @param { object } state reduxStore state
 */
export const listData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("list");
};

/**
 * Selector function to return redux globalData state
 * @param { object } state reduxStore state
 */
export const globalData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("globalData");
};

/**
 * Selector function to return redux countryData state
 * @param { object } state reduxStore state
 */
export const countryData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("list").filter(o => o.Country === state[DETAIL_PAGE_REDUCER_KEY].get('selectedCountry'));
};
