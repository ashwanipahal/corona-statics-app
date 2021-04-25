import { LIST_PAGE_REDUCER_KEY,DETAIL_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const listData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("list");
};

export const globalData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("globalData");
};

export const countryData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("list").filter(o => o.Country === state[DETAIL_PAGE_REDUCER_KEY].get('selectedCountry'));
};
