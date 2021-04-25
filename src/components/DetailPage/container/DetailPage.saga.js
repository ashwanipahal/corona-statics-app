import { call, put, takeLatest, select } from 'redux-saga/effects';
import DETAIL_PAGE_CONSTANTS from './DetailPage.constants';
import LIST_PAGE_CONSTANTS from '../../CoronaListView/container/ListPage.constants';
import { fetchDetailDataApi } from '../../../services/DetailPage';
import { fetchListDataApi } from '../../../services/ListPage';
import { listData } from '../../CoronaListView/container/ListPage.selectors';

function* fetchDetailData(action) {
  try {
    let data = yield call(fetchDetailDataApi, action.payload);
    yield put({ type: DETAIL_PAGE_CONSTANTS.SET_DETAIL_PAGE_DATA, payload: data.reverse() }); // we used reverse array function to latest date on top

    // list data api call when user direct open detail page 
    const countryList = yield select(listData);
    if (!countryList.length) {
      let countryData = yield call(fetchListDataApi);
      yield put({ type: LIST_PAGE_CONSTANTS.SET_LIST_DATA, payload: countryData });
    }
    yield put({ type: DETAIL_PAGE_CONSTANTS.SET_SELECTED_COUNTRY, payload: action.payload });
  } catch (e) {
    console.log('error occurred', e);
  }
}

function* DetailPageSaga() {
  yield takeLatest(DETAIL_PAGE_CONSTANTS.GET_DETAIL_PAGE_DATA, fetchDetailData);
}

export default DetailPageSaga;