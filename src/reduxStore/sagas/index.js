import { all } from 'redux-saga/effects';
import ListPageSaga from '../../components/CoronaListView/container/ListPage.saga';
import DetailPageSaga from '../../components/DetailPage/container/DetailPage.saga';

export default function* rootSaga() {
  yield all([
    ListPageSaga(),
    DetailPageSaga()
  ]);
}
