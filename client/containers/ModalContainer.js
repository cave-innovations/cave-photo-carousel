import { connect } from 'react-redux';
import Modal from '../components/Modal/Modal.jsx';
import modalView from '../actions/modalView.js';

const mapDispatchToProps = dispatch => {
  return {
    modalView: () => dispatch(modalView())
  }
}

export default connect(null, mapDispatchToProps)(Modal);