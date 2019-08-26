import { connect } from 'react-redux';
import Gallery from '../components/Gallery/Gallery.jsx';
import galleryHoverOff from '../actions/galleryHoverOff.js';
import galleryHoverOn from '../actions/galleryHoverOn.js';
import handleHoverItemNull from '../actions/galleryHoverItemNull.js';

const mapDispatchToProps = dispatch => {
  return {
    handleHoverOff: () => dispatch(galleryHoverOff()),
    handleHoverOn: () => dispatch(galleryHoverOn()),
    handleHoverItemNull: () => dispatch(handleHoverItemNull()),
  }
}

// const mapStateToProps = state => {
//   return {
//     galleryHover: state.galleryHover
//   }
// }

export default connect(null, mapDispatchToProps)(Gallery);