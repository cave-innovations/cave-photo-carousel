import React from 'react';
import styled from 'styled-components';

const GalleryItemSmallContainer = styled.div`
  display: flex;
  height: 49.8%;
  width: 49.7%;
  border: 1px solid rgb(83, 83, 83);
  overflow: hidden;
`;

const GalleryItemSmall = styled.img`
  display: flex;
  height: 101%;
  width: 101%;
  transition: transform .5s;

  &:hover {
    transform: scale(1.05)
  }
`;

const GalleryItemSml = ({ galleryHover, galleryHoverItem, handleHoverItem, id }) => (
  <GalleryItemSmallContainer onMouseOver={(e) => {handleHoverItem(parseInt(e.target.id))}}>
    {galleryHover && (galleryHoverItem !== parseInt(id)) && <GalleryItemSmall id={id} style={{"filter": "brightness(50%)"}} alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
    {galleryHover && (galleryHoverItem === parseInt(id)) && <GalleryItemSmall id={id} alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
    {!galleryHover && <GalleryItemSmall id={id} alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />}
    {/* <GalleryItemSmall id={id} alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" /> */}
  </GalleryItemSmallContainer>
);

export default GalleryItemSml;
