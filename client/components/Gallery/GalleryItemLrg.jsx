import React from 'react';
import styled from 'styled-components';

const GalleryItemLargeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid rgb(83, 83, 83);
  overflow: hidden;
`;

const GalleryItemLarge = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform .5s;

  &:hover {
    transform: scale(1.05);
  }
`;

// const GalleryItemLargeDim = styled.img`
//   display: flex;
//   height: 100%;
//   width: 100%;
//   filter: brightness(50%);
//   transition: transform .5s, filter .5s;

//   &:hover {
//     transform: scale(1.05);
//     filter: brightness(100%);
//   }
// `;


const GalleryItemLrg = ({ galleryHover, galleryHoverItem, handleHoverItem }) => (
  <GalleryItemLargeContainer onMouseOver={(e) => {handleHoverItem(parseInt(e.target.id))}} >
    {galleryHover && (galleryHoverItem !== 1) && <GalleryItemLarge style={{"filter": "brightness(50%)"}} id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
    {galleryHover && (galleryHoverItem === 1) && <GalleryItemLarge id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
    {!galleryHover && <GalleryItemLarge id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
  </GalleryItemLargeContainer>
);

export default GalleryItemLrg;
