import { connect } from 'react-redux';
import GalleryItemLrg from '../components/Gallery/GalleryItemLrg.jsx';
import galleryHoverItem from '../actions/galleryHoverItem.js';


const mapStateToProps = state => {
  return {
    galleryHover: state.galleryHover,
    galleryHoverItem: state.galleryHoverItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleHoverItem: (item) => dispatch(galleryHoverItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItemLrg);