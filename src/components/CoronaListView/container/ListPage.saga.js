import { call, put, takeLatest } from 'redux-saga/effects';
import LIST_PAGE_CONSTANTS from './ListPage.constants';
import { fetchData } from '../../../services/ListPage'

function* fetchListData() {
   try {
      let data = yield call(fetchData);
      yield put({type: LIST_PAGE_CONSTANTS.SET_LIST_DATA, payload: data});
   } catch (e) {
      console.log('error occurred',e);
   }
}

function* ListPageSaga() {
  yield takeLatest(LIST_PAGE_CONSTANTS.GET_LIST_DATA, fetchListData);
}

export default ListPageSaga;