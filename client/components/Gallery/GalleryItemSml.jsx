import React from 'react';
import styled from 'styled-components';

const GalleryItemSmallContainer = styled.div`
  display: flex;
  height: 49.8%;
  width: 49.7%;
  border: 1px solid #484848;
  overflow: hidden;
`;

const GalleryItemSmall = styled.img`
  display: flex;
  height: 101%;
  width: 101%;
  transition: transform .5s, filter .5s;
  transition-delay: .1s, 0s;
  transition-property: transform, filter;

  &:hover {
    transform: scale(1.05);
  }
  ${({ galleryHover, galleryHoverItem, id }) => galleryHover && galleryHoverItem !== parseInt(id) && `
    filter: brightness(70%);
  `}
`;

const GalleryItemSml = ({
  galleryHover, galleryHoverItem, handleHoverItem, id, modalView, change, photo,
}) => (
  <GalleryItemSmallContainer onMouseOver={(e) => { handleHoverItem(parseInt(e.target.id)); }} onClick={() => { modalView(); change(parseInt(id) - 1); }}>
    <GalleryItemSmall id={id} alt="" src={photo} galleryHover={galleryHover} galleryHoverItem={galleryHoverItem} />
  </GalleryItemSmallContainer>
);

export default GalleryItemSml;
