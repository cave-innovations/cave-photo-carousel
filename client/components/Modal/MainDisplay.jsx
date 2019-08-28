import React from 'react';
import styled from 'styled-components';

const ModalLeft = styled.div`
  display: flex;
  position: relative;
  top: 13%;
  left: 0;
  height: 525px;
  width: 100%;
`;

const MainDisplayView = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 74%;
  border-radius: 20px;
  overflow: hidden;
`;

const LeftButtonWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 13%;
`;

const LeftButton = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 50%;
  left: 50%;

  &:focus {
    outline-color: white !important;
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 47.85%;
  left: 0%;
`;

const RightButtonWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 13%;
`;

const RightButton = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  width: 50%;

  &:focus {
    outline-color: white !important;
  }
`;

const RightArrow = styled.div`
  position: absolute;
  top: 47.85%;
  left: 31.5%;
`;

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainDisplay: '',
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.current !== this.props.current) {
  //     console.log('hi');
  //     this.setState({
  //       mainDisplay: this.props.current,
  //     });
  //   }
  // }

  render() {
    return (
      <ModalLeft>
        <LeftButtonWrapper>
          <LeftButton onClick={this.props.prev}>
            <LeftArrow>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" /></svg>
            </LeftArrow>
          </LeftButton>
        </LeftButtonWrapper>
        <MainDisplayView onClick={this.props.next}>
          <img src={this.props.current} style={{ height: '100%', width: '100%' }} />
        </MainDisplayView>
        <RightButtonWrapper>
          <RightButton onClick={this.props.next}>
            <RightArrow>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'rgb(72, 72, 72)' }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" /></svg>
            </RightArrow>
          </RightButton>
        </RightButtonWrapper>
      </ModalLeft>
    );
  }
}

export default MainDisplay;
