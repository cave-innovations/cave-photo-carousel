import React from 'react';
import GalleryItemLrg from './GalleryItemLrg.jsx';
import GalleryItemSml from './GalleryItemSml.jsx';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  height: 478.66666666666663px;
  flex-flow: row;
  width: 100%;
`;

const LargerContainer = styled.div`
  display: flex;
  height: 478.66666666666663px;
  width: 50%;
`;

const SmallContainer = styled.div`
  display: flex;
  height: 478.66666666666663px;
  width: 50%;
  flex-flow: row wrap;
  position: relative;
`;

const ButtonStyle = styled.button`
  position: absolute;
  top: 92%;
  left: 85%;
`;

const Gallery = (props) => (
  <GalleryContainer>
    <LargerContainer>
      <GalleryItemLrg />
    </LargerContainer>
    <SmallContainer>
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
      <GalleryItemSml />
      <ButtonStyle type="button">View Photos</ButtonStyle>
    </SmallContainer>
  </GalleryContainer>
);

export default Gallery;
