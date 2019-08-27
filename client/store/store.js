import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const store = createStore(rootReducer, {galleryHover: false, galleryHoverItem: null, isClicked: false}, applyMiddleware(thunk));

export default store;
