import React from 'react';
import GalleryItemLrg from './GalleryItemLrg.jsx';
import GalleryItemSml from './GalleryItemSml.jsx';
import styled from 'styled-components';
import GalleryItemLrgContainer from '../../containers/GalleryItemLrgContainer';
import GalleryItemSmlContainer from '../../containers/GalleryItemSmlContainer';

const GalleryContainer = styled.div`
  display: flex;
  height: 478.66666666666663px;
  flex-flow: row;
  width: 100%;
  cursor: pointer;
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
  top: 90%;
  left: 80%;
  cursor: pointer;
  padding: 9px 18px;
  border-radius: 5px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #474747;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: outline-color .25s;

  &:focus {
    box-shadow: 0 0 3pt 2pt white;
    outline-color: white !important;
    border-radius: 1px solid black;
  }

  &:active {
    background-color: #e6e6e6;
    border-radius: 1px solid black;
  }
`;

const Gallery = ({ handleHoverOff, handleHoverOn, handleHoverItemNull }) => (
  <GalleryContainer onMouseOver={handleHoverOn} onMouseLeave={() => {handleHoverOff(); handleHoverItemNull()}} >
    <LargerContainer>
      <GalleryItemLrgContainer />
    </LargerContainer>
    <SmallContainer>
      <GalleryItemSmlContainer id="2" />
      <GalleryItemSmlContainer id="3"/>
      <GalleryItemSmlContainer id="4"/>
      <GalleryItemSmlContainer id="5"/>
      <ButtonStyle type="button">View Photos</ButtonStyle>
    </SmallContainer>
  </GalleryContainer>
);

export default Gallery;
