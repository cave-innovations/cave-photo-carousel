import { combineReducers } from 'redux';
import galleryHover from './galleryHoverReducer';
import galleryHoverItem from './galleryHoverItemReducer';

var rootReducer = combineReducers({galleryHover: galleryHover, galleryHoverItem: galleryHoverItem});

export default rootReducer;