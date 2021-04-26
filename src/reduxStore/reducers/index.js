import { combineReducers } from 'redux';

import {
  LIST_PAGE_REDUCER_KEY,
  DETAIL_PAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import ListPageReducer from '../../components/features/CoronaListView/container/ListPage.reducer';
import DetailPageReducer from '../../components/features/DetailPage/container/DetailPage.reducer';


export default combineReducers({
  [LIST_PAGE_REDUCER_KEY]: ListPageReducer,
  [DETAIL_PAGE_REDUCER_KEY]: DetailPageReducer,
});
