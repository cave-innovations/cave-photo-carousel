import React from 'react';
import GalleryItemLrg from './GalleryItemLrg.js';
import GalleryItemSml from './GalleryItemSml.js';

const Gallery = (props) => (
  <div className="gallery">
    <div className="large-container">
      <GalleryItemLrg />
    </div>
    <div className="small-container">
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
    </div>
  </div>
)

export default Gallery;