import { connect } from 'react-redux';
import App from '../components/App.jsx';
import listingData from '../actions/listingData.js';

const mapStateToProps = (state) => ({
  isClicked: state.isClicked,
  listingData: state.listingData,
});

const mapDispatchToProps = (dispatch) => ({
  getListingData: (data) => dispatch(listingData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
