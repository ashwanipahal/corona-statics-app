import { connect } from 'react-redux';

import { getListDataAction } from './ListPage.actions';
import { listData,globalData } from './ListPage.selectors';
import ListPage from '../CoronaListView';

const mapStateToProps = state => {
  return {
    listData: listData(state),
    globalData: globalData(state),
  };
};

const mapDispatchToProps = dispatch => {
    return {
      getListData: (payload) => {
        dispatch(getListDataAction(payload));
      },
    };
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
