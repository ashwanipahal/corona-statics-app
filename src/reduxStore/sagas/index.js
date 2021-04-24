import { all } from 'redux-saga/effects';
import ListPageSaga from '../../components/CoronaListView/container/ListPage.saga'

export default function* rootSaga() {
  yield all([
    ListPageSaga(),
  ]);
}
