import { combineReducers } from 'redux';
import galleryHover from './galleryHoverReducer.js';
import galleryHoverItem from './galleryHoverItemReducer.js';
import modalView from './modalViewReducer.js';

var rootReducer = combineReducers({galleryHover: galleryHover, galleryHoverItem: galleryHoverItem, isClicked: modalView});

export default rootReducer;