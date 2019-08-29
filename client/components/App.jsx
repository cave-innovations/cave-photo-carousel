import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Gallery from './Gallery/Gallery.jsx';
import GalleryContainer from '../containers/GalleryContainer';
import Modal from './Modal/Modal.jsx';
import ModalContainer from '../containers/ModalContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      data: [],
    };
    this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
  }

  // parses uri to find listing #. Gets data for that listing from database and sets 'listingData' state in redux store
  componentDidMount() {
    const listingNum = parseInt(document.baseURI.slice(22, document.baseURI.length - 1));
    axios.get(`/api/photos/${listingNum}`)
      .then((response) => {
        this.props.getListingData(response.data[0]);
      });
  }

  // Renders app once 'listingData' state in redux store and data state has been updated
  componentDidUpdate(prevProps) {
    if (this.props.listingData !== prevProps.listingData) {
      this.setState({
        data: this.props.listingData,
      });
    }
  }

  // Sets photo index number for the whole app
  changeCurrentIndex(num) {
    this.setState({
      currentIndex: num,
    });
  }

  render() {
    // Renders nothing until the 'listingData' state in the redux store has been updated by componentDidMount
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
