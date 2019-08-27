import React from 'react';
import styled from 'styled-components';

const ModalLeft = styled.div`
  cursor: pointer;
  border: 1px solid red;
`;

const MainDisplayView = styled.div`
  position: absolute;
  top: 13%;
  left: 9.5%;
  height: 525px;
  width: 780px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 13%;
  left: 0;
  height: 525px;
  width: 137px;
  border: 1px solid black;
`;
const RightButton = styled.button`
  position: absolute;
  top: 13%;
  left: 63.8545%;
  height: 525px;
  width: 137px;
  border: 1px solid black;
`;

const MainDisplay = (props) => (
  <ModalLeft>
    <LeftButton></LeftButton>
    <MainDisplayView>
    </MainDisplayView>
    <RightButton></RightButton>
  </ModalLeft>
)

export default MainDisplay;