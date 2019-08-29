import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal.jsx';
import modalView from '../actions/modalView.js';

const mapDispatchToProps = (dispatch) => ({
  modalView: () => dispatch(modalView()),
});

const mapStateToProps = (state) => ({
  listingData: state.listingData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
