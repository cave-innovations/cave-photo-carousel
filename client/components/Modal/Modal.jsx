import React from 'react';
import styled from 'styled-components';
import MainDisplay from './MainDisplay.jsx';

const ModalView = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: white;
  z-index: 2;
`;

const XButton = styled.button`
  position: absolute;
  top: 8.8%;
  left: 93.95%;
  align-self: right;
  cursor: pointer  !important;
  background-color: transparent !important;
  color: buttontext !important;
  display: block !imortant;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  padding: 32px;
  margin: -32px;
`;

const ModalLeftContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 73.3333333333%;
  border: 1px solid black;
`;

const Modal = ({ modalView }) => (
  <ModalView>
    <ModalLeftContainer>
      <MainDisplay />
    </ModalLeftContainer>
    <XButton onClick={modalView}>
      <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{"height": "24px", "width": "24px", "display": "block", "fill": "rgb(72, 72, 72)"}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
    </XButton>
  </ModalView>
)

export default Modal;