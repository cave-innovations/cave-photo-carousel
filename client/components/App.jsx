import React from 'react';
import axios from 'axios';
import GalleryContainer from '../containers/GalleryContainer';
import ModalContainer from '../containers/ModalContainer';

const StyledApp = styled.div`
  margin: 0px;
  display: flex;
  flex-flow: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      data: [],
      loaded: false,
    };
    this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
  }

  componentDidMount() {
    // for local
    const splitURI = document.baseURI.split('/');
    const listingNum = parseInt(splitURI[splitURI.length - 2]);
    if (isNaN(listingNum) || listingNum < 1 || listingNum > 100) {
      axios.get('http://localhost:3000/api/photos/1')
        .then((response) => {
          this.props.getListingData(response.data[0]);
        });
    } else {
      axios.get(`http://localhost:3000/api/photos/${listingNum}`)
        .then((response) => {
          this.props.getListingData(response.data[0]);
        });
    }
    // for deployed
    // const splitURI = document.baseURI.split('/');
    // const listingNum = parseInt(splitURI[splitURI.length - 2]);
    // if (isNaN(listingNum) || listingNum < 1 || listingNum > 100) {
    //   axios.get('http://ec2-54-67-90-66.us-west-1.compute.amazonaws.com:3000/api/photos/1')
    //     .then((response) => {
    //       this.props.getListingData(response.data[0]);
    //     });
    // } else {
    //   axios.get(`http://ec2-54-67-90-66.us-west-1.compute.amazonaws.com:3000/api/photos/${listingNum}`)
    //     .then((response) => {
    //       this.props.getListingData(response.data[0]);
    //     });
    // }
    window.addEventListener('DOMContentLoaded', (e) => {
      this.setState({
        loaded: true,
      });
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
      <StyledApp>
        {this.props.isClicked && <ModalContainer change={this.changeCurrentIndex} currentIndex={this.state.currentIndex} />}
        <GalleryContainer change={this.changeCurrentIndex} data={this.state.data} loaded={this.state.loaded} />
      </StyledApp>
    );
  }
}

export default App;
