import LIST_PAGE_CONSTANTS from './ListPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
  globalData: {},
});

const ListPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PAGE_CONSTANTS.SET_LIST_DATA:
      return state.set('list', action.payload.Countries).set('globalData', action.payload.Global);
    default:
      return state;
  }
};

export default ListPageReducer;
