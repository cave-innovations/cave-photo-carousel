import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import store from '../client/store/store.js';
import rootReducer from '../client/reducers/root.js';

import App from '../client/components/App.jsx';
import AppContainer from '../client/containers/AppContainer.js';
import GalleryContainer from '../client/containers/GalleryContainer.js';
import Gallery from '../client/components/Gallery/Gallery.jsx';
import GalleryItemLrg from '../client/components/Gallery/GalleryItemLrg.jsx';
// import GalleryItemSml from '../client/components/Gallery/GalleryItemSml.jsx';
// import listingDataAction from '../client/actions/listingData.js';
import exampleData from '../client/data/exampledata.js';

let mockStore;
let wrapper;

const getListingData = () => {};
const listingData = [1];
const isClicked = false;


beforeEach(() => {
  mockStore = createStore(rootReducer, {
    galleryHover: false, galleryHoverItem: null, isClicked: false, listingData: null,
  }, applyMiddleware(thunk));
  wrapper = mount(<Provider store={mockStore}><AppContainer id="app" /></Provider>);
});

describe('<AppContainer />', () => {
  test('renders App as single empty div', () => {
    const app = shallow(<App getListingData={getListingData} listingData={listingData} isClicked={isClicked} />);
    expect(app.getElement().props).toEqual({});
  });
  test('renders the AppContainer connected to the Redux Store', () => {
    expect(wrapper.getElement().props.children.type.displayName).toEqual('Connect(App)');
  });
});

describe('<GalleryContainer />', () => {
  test('renders the GalleryContainer connected to the Redux Store', () => {
    const galleryContainer = mount(<Provider store={mockStore}><GalleryContainer id="gallery" data={exampleData.exampleData[0]} /></Provider>);
    expect(galleryContainer.getElement().props.children.type.displayName).toEqual('Connect(Gallery)');
  });
});
