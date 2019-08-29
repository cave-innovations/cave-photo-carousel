import React from 'react';

// actions
import galleryHoverItemAction from '../client/actions/galleryHoverItem.js';
import galleryHoverItemNullAction from '../client/actions/galleryHoverItemNull.js';
import galleryHoverOffAction from '../client/actions/galleryHoverOff.js';
import galleryHoverOnAction from '../client/actions/galleryHoverOn.js';
import listingDataAction from '../client/actions/listingData.js';
import modalViewAction from '../client/actions/modalView.js';

describe('actions', () => {
  test('galleryHoverItem Action', () => {
    const item = galleryHoverItemAction(3);
    expect(item).toEqual({
      galleryHoverItem: 3,
      type: 'GALLERY_HOVER_ITEM',
    });
  });
  test('galleryHoverItemNull Action', () => {
    const item = galleryHoverItemNullAction();
    expect(item).toEqual({
      galleryHoverItem: null,
      type: 'GALLERY_HOVER_ITEM',
    });
  });
  test('galleryHoverOff Action', () => {
    const item = galleryHoverOffAction();
    expect(item).toEqual({
      galleryHover: false,
      type: 'GALLERY_HOVER',
    });
  });
  test('galleryHoverOn Action', () => {
    const item = galleryHoverOnAction();
    expect(item).toEqual({
      galleryHover: true,
      type: 'GALLERY_HOVER',
    });
  });
  test('listingData Action', () => {
    const item = listingDataAction(5);
    expect(item).toEqual({
      listingData: 5,
      type: 'LISTING_DATA',
    });
  });
  test('modalView Action', () => {
    const item = modalViewAction();
    expect(item).toEqual({
      type: 'MODAL_VIEW',
    });
  });
});
