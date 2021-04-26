import DETAIL_PAGE_CONSTANTS from './DetailPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  countryDetailList: [], // to store detail page country data
  selectedCountry: '', // tp selected country
});

const DetailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PAGE_CONSTANTS.SET_DETAIL_PAGE_DATA:
      return state.set('countryDetailList', action.payload);
    case DETAIL_PAGE_CONSTANTS.SET_SELECTED_COUNTRY:
      return state.set('selectedCountry', action.payload);
    default:
      return state;
  }
};

export default DetailPageReducer;
