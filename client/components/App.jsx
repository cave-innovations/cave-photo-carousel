import React from 'react';
import Gallery from './Gallery/Gallery.jsx';
import styled from 'styled-components';
import GalleryContainer from '../containers/GalleryContainer';
import Modal from './Modal/Modal.jsx';
import ModalContainer from '../containers/ModalContainer';

const App = ({ isClicked }) => (
  <div>
    {isClicked && <ModalContainer />}
    <GalleryContainer />
  </div>
)

export default App;
