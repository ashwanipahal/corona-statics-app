import { DETAIL_PAGE_REDUCER_KEY } from '../../../../constants/reducer.constants';

/**
 * Selector function to return redux countryDetailList state
 * @param { object } state reduxStore state
 */
export const countryListData = state => {
  return state[DETAIL_PAGE_REDUCER_KEY].get("countryDetailList");
};

