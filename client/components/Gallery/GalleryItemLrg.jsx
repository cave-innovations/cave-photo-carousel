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
  transition: transform .5s;

  &:hover {
    transform: scale(1.05)
  }
`;


const GalleryItemLrg = (props) => (
  <GalleryItemLargeContainer>
    <GalleryItemLarge alt="" src="https://hips.hearstapps.com/hmg-prod/images/pumpkin-chocolate-chip-cookies-horizontal-1529964207.jpg" />
  </GalleryItemLargeContainer>
);

export default GalleryItemLrg;
