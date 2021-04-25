import { call, put, takeLatest } from 'redux-saga/effects';
import DETAIL_PAGE_CONSTANTS from './DetailPage.constants';
import { fetchData } from '../../../services/DetailPage'

function* fetchDetailData(action) {
   try {
      let data = yield call(fetchData, action.payload);
      yield put({type: DETAIL_PAGE_CONSTANTS.SET_DETAIL_PAGE_DATA, payload: data});
      yield put({type: DETAIL_PAGE_CONSTANTS.SET_SELECTED_COUNTRY, payload: action.payload});
   } catch (e) {
      console.log('error occurred',e);
   }
}

function* DetailPageSaga() {
  yield takeLatest(DETAIL_PAGE_CONSTANTS.GET_DETAIL_PAGE_DATA, fetchDetailData);
}

export default DetailPageSaga;