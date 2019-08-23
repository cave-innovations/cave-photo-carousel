import React from 'react';
import GalleryItemLrg from './GalleryItemLrg.jsx';
import GalleryItemSml from './GalleryItemSml.jsx';
import styles from '../../styles/Gallery.css';

const Gallery = (props) => (
  <div className={styles.gallery}>
    <div className={styles.largeContainer}>
      <GalleryItemLrg />
    </div>
    <div className={styles.smallContainer}>
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
      <button className={styles.viewPhotos}>View Photos</button>
    </div>
  </div>
)

export default Gallery;