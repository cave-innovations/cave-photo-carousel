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
//   transition: filter .5s;

//   &:hover {
//     filter: brightness(100%);
//   }
// `;


const GalleryItemLrg = ({ galleryHover, galleryHoverItem, handleHoverItem }) => (
  <div>
    {galleryHover && galleryHoverItem !== 1 && <GalleryItemLargeContainer style={{"filter": "brightness(50%)"}} onMouseOver={(e) => {handleHoverItem(parseInt(e.target.id))}} >
      <GalleryItemLarge id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />
    </GalleryItemLargeContainer>}
    {galleryHover && galleryHoverItem === 1 && <GalleryItemLargeContainer onMouseOver={(e) => {handleHoverItem(parseInt(e.target.id))}} >
      <GalleryItemLarge id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />
    </GalleryItemLargeContainer>}
    {!galleryHover && <GalleryItemLargeContainer onMouseOver={(e) => {handleHoverItem(parseInt(e.target.id))}} >
      <GalleryItemLarge id="1" alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />
    </GalleryItemLargeContainer>}
  </div>
);

export default GalleryItemLrg;
