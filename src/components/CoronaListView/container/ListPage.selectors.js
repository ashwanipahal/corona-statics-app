import { LIST_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const listData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("list");
};
export const globalData = state => {
  return state[LIST_PAGE_REDUCER_KEY].get("globalData");
};
