import React from 'react';
// import styled from 'styled-components';

const GalleryItemLargeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid #484848;
  overflow: hidden;
`;

const GalleryItemLarge = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform .5s, filter .5s;
  transition-delay: .1s;

  &:hover {
    transform: scale(1.05);
  }
  ${({ galleryHover, galleryHoverItem }) => galleryHover && galleryHoverItem !== 1 && `
    filter: brightness(70%);
  `}
`;

const GalleryItemLrg = ({
  galleryHover, galleryHoverItem, handleHoverItem, modalView, change, photo,
}) => (
  <div>
    <GalleryItemLargeContainer onMouseOver={(e) => { handleHoverItem(parseInt(e.target.id)); }} onClick={() => { modalView(); change(0); }}>
      <GalleryItemLarge id="1" alt="" src={photo} galleryHover={galleryHover} galleryHoverItem={galleryHoverItem} />
    </GalleryItemLargeContainer>
  </div>
);

export default GalleryItemLrg;
