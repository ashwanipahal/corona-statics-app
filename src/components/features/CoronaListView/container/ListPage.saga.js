import { call, put, takeLatest } from 'redux-saga/effects';
import LIST_PAGE_CONSTANTS from './ListPage.constants';
import { fetchListDataApi } from '../../../../services/ListPage'

/**
 * @function fetchListData
 * @description This function will call fetchListDataApi service to get list data
 */
function* fetchListData() {
   try {
      let data = yield call(fetchListDataApi); // call the api to get data 
      yield put({type: LIST_PAGE_CONSTANTS.SET_LIST_DATA, payload: data}); // update redux store
   } catch (e) {
      console.log('error occurred',e);
   }
}

/**
 * @function ListPageSaga
 * @description watcher function for fetch List Data.
 */
function* ListPageSaga() {
  yield takeLatest(LIST_PAGE_CONSTANTS.GET_LIST_DATA, fetchListData);
}

export default ListPageSaga;