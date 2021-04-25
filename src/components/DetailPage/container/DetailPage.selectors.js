import { DETAIL_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const countryListData = state => {
  return state[DETAIL_PAGE_REDUCER_KEY].get("countryDetailList");
};

