import React from 'react';
import styled from 'styled-components';

const ModalLeft = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  top: 13%;
  left: 0;
  height: 525px;
  width: 100%;
`;

const MainDisplayView = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 74%;
  border-radius: 20px;
  overflow: hidden;
`;

const LeftButton = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 13%;

  &:focus {
    outline-color: white !important;
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 47.85%;
  left: 51%;
`;

const RightButton = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 13%;

  &:focus {
    outline-color: white !important;
  }
`;
const RightArrow = styled.div`
  position: absolute;
  top: 47.85%;
  left: 31.5%;
`;

const MainDisplay = (props) => (
  <ModalLeft>
    <LeftButton onClick={props.prev}>
      <LeftArrow>
        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" /></svg>
      </LeftArrow>
    </LeftButton>
    <MainDisplayView onClick={props.next}>
      <img src={props.current} style={{ height: '100%', width: '100%' }} />
    </MainDisplayView>
    <RightButton onClick={props.next}>
      <RightArrow>
        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" /></svg>
      </RightArrow>
    </RightButton>
  </ModalLeft>
);

export default MainDisplay;
