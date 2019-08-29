import { combineReducers } from 'redux';
import galleryHover from './galleryHoverReducer.js';
import galleryHoverItem from './galleryHoverItemReducer.js';
import modalView from './modalViewReducer.js';
import listingData from './listingDataReducer.js';

const rootReducer = combineReducers({
  galleryHover, galleryHoverItem, isClicked: modalView, listingData,
});

export default rootReducer;
