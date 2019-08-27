import React from 'react';
import styled from 'styled-components';
import MainDisplay from './MainDisplay.jsx';
import Carousel from './Carousel.jsx';
import data from '../../data/exampledata.js';

const ModalView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: white;
  z-index: 3;
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

  &:focus {
    outline-color: white !important;
  }
`;

const ModalLeftContainer = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 73.3333333333%;
`;

const ModalRightContainer = styled.div`
  display: flex;
  height: 100%;
  width: 26.6666666667%;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      current: data.exampleData.photos[0],
      photos: data.exampleData.photos,
    };
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
    this.clickPhoto = this.clickPhoto.bind(this);
  }

  nextPhoto() {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex === this.state.photos.length) {
      newIndex = 0;
    }
    this.setState({
      currentIndex: newIndex,
      current: data.exampleData.photos[newIndex],
    });
  }

  prevPhoto() {
    let newIndex = this.state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = this.state.photos.length - 1;
    }
    this.setState({
      currentIndex: newIndex,
      current: data.exampleData.photos[newIndex],
    });
  }

  clickPhoto(e) {
    const newIndex = parseInt(e);
    this.setState({
      currentIndex: newIndex,
      current: data.exampleData.photos[newIndex],
    });
  }

  render() {
    return (
      <ModalView>
        <ModalLeftContainer>
          <MainDisplay prev={this.prevPhoto} next={this.nextPhoto} current={this.state.current} />
        </ModalLeftContainer>
        <XButton onClick={this.props.modalView}>
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label="Close"
            focusable="false"
            style={{
              height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)',
            }}
          >
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
          </svg>
        </XButton>
        <ModalRightContainer>
          <Carousel currentIndex={this.state.currentIndex} current={this.state.current} photos={this.state.photos} clickPhoto={this.clickPhoto} />
        </ModalRightContainer>
      </ModalView>
    );
  }
}

export default Modal;
