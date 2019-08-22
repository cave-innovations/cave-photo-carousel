import React from 'react';
import GalleryItemLrg from './GalleryItemLrg.jsx';
import GalleryItemSml from './GalleryItemSml.jsx';

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
      <button className="view-photos">View Photos</button>
    </div>
  </div>
)

export default Gallery;