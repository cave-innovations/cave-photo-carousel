import { connect } from 'react-redux';
import Gallery from '../components/Gallery/Gallery.jsx';
import galleryHoverOff from '../actions/galleryHoverOff.js';
import galleryHoverOn from '../actions/galleryHoverOn.js';
import handleHoverItemNull from '../actions/galleryHoverItemNull.js';
import modalView from '../actions/modalView.js';

const mapDispatchToProps = (dispatch) => ({
  handleHoverOff: () => dispatch(galleryHoverOff()),
  handleHoverOn: () => dispatch(galleryHoverOn()),
  handleHoverItemNull: () => dispatch(handleHoverItemNull()),
  modalView: () => dispatch(modalView()),
});

const mapStateToProps = (state) => ({
  listingData: state.listingData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
