import Redux from 'redux';

const listingDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'LISTING_DATA':
      return action.listingData;
    default:
      return state;
  }
};

export default listingDataReducer;
