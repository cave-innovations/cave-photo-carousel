import React from 'react';

import galleryHoverItem from '../client/reducers/galleryHoverItemReducer.js';
import galleryHover from '../client/reducers/galleryHoverReducer.js';
import listingData from '../client/reducers/listingDataReducer.js';
import modalView from '../client/reducers/modalViewReducer.js';

describe('reducers', () => {
  test('galleryHoverItemReducer', () => {
    let state = { galleryHoverItem: 1 };
    state = galleryHoverItem(state, { type: 'GALLERY_HOVER_ITEM', galleryHoverItem: 4 });
    expect(state).toEqual(4);
  });
  test('galleryHoverReducer', () => {
    let state = { galleryHover: false };
    state = galleryHover(state, { type: 'GALLERY_HOVER', galleryHover: true });
    expect(state).toEqual(true);
  });
  test('listingDataReducer', () => {
    let state = { listingData: 3 };
    state = listingData(state, { type: 'LISTING_DATA', listingData: 7 });
    expect(state).toEqual(7);
  });
  test('modalViewReducer', () => {
    let state = false;
    state = modalView(state, { type: 'MODAL_VIEW' });
    expect(state).toEqual(true);
  });
});
