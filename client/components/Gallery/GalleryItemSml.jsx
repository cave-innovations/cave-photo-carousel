import React from 'react';

const GalleryItemSmallContainer = styled.div`
  display: flex;
  height: 50.25%;
  width: 50%;
  border: 1px solid #484848;
  box-sizing: border-box;
  overflow: hidden;
`;

const GalleryItemSmall = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
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
