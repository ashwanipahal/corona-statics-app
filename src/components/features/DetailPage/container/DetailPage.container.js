import { connect } from 'react-redux';
import { getDetailDataAction } from './DetailPage.actions';
import { countryData } from '../../CoronaListView/container/ListPage.selectors';
import { countryListData } from './DetailPage.selectors';
import DetailPage from '../DetailView';

const mapStateToProps = state => {
  return {
    countryListData: countryListData(state), 
    countryData: countryData(state),
  };  
};

const mapDispatchToProps = dispatch => {
    return {
      getDetailData: (payload) => {
        dispatch(getDetailDataAction(payload)); // action dispatch
      }
    };
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
