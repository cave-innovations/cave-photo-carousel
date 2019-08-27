import Redux from 'redux';

const galleryHoverItemReducer = (state = null, action) => {
  switch (action.type) {
    case 'GALLERY_HOVER_ITEM':
      return action.galleryHoverItem;
    default:
      return state;
  }
};

export default galleryHoverItemReducer;