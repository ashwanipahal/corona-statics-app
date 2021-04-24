import { combineReducers } from 'redux';

import {
  LIST_PAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import ListPageReducer from '../../components/CoronaListView/container/ListPage.reducer';


export default combineReducers({
  [LIST_PAGE_REDUCER_KEY]: ListPageReducer,
});
