import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Gallery from './Gallery/Gallery.jsx';
import GalleryContainer from '../containers/GalleryContainer';
import Modal from './Modal/Modal.jsx';
import ModalContainer from '../containers/ModalContainer';
import exampleData from '../data/exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      data: [],
    };
    this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
  }

  componentDidMount() {
    const listingNum = parseInt(document.baseURI.slice(22, document.baseURI.length - 1));
    axios.get(`/api/photos/${listingNum}`)
      .then((response) => {
        this.props.getListingData(response.data[0]);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.listingData !== prevProps.listingData) {
      this.setState({
        data: this.props.listingData,
      });
    }
  }

  changeCurrentIndex(num) {
    this.setState({
      currentIndex: num,
    });
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div />
      );
    }
    return (
      <div>
        {this.props.isClicked && <ModalContainer change={this.changeCurrentIndex} currentIndex={this.state.currentIndex} />}
        <GalleryContainer change={this.changeCurrentIndex} data={this.state.data} />
      </div>
    );
  }
}

export default App;
