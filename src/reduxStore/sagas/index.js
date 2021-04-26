import { all } from 'redux-saga/effects';
import ListPageSaga from '../../components/features/CoronaListView/container/ListPage.saga';
import DetailPageSaga from '../../components/features/DetailPage/container/DetailPage.saga';

export default function* rootSaga() {
  yield all([
    ListPageSaga(),
    DetailPageSaga()
  ]);
}
