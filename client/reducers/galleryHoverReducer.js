import Redux from 'redux';

const galleryHoverReducer = (state = null, action) => {
  switch (action.type) {
    case 'GALLERY_HOVER':
      return action.galleryHover;
    default:
      return state;
  }
};

export default galleryHoverReducer;
