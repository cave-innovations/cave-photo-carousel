import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  position: absolute;
  top: 41%;
  left: 73.333333333%;
  height: 400px;
  width: 26.666666666%;
`;

const IndexCounter = styled.div`
  display: flex;
  width: 100%;
  height: 37px;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;

const ListingName = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px !important;
  font-weight: 300 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;

const Verified = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.2857142857142858em !important;
  color: #484848 !important;
`;

const Description = (props) => (
  <DescriptionWrapper id="description">
    <IndexCounter>
      {props.currentIndex + 1}
      {' '}
/
      {' '}
      {props.photos.length}
    </IndexCounter>
    <ListingName>
      {props.description}
    </ListingName>
    <Verified>
      Photo Verified by Cave Innovations
    </Verified>
  </DescriptionWrapper>
);

export default Description;
