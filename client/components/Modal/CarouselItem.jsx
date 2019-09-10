import React from 'react';
// import styled from 'styled-components';

const Item = styled.img`
  flex: 1;
  height: 64px;
  width: 64px;
  opacity: 0.5;
  margin: 7px;
  border-radius: 4px;

  &:hover {
    opacity: 1;
  }
`;

const CurrentItem = styled.img`
flex: 1;
height: 64px;
width: 64px;
opacity: 1;
margin: 7px;
border-radius: 4px;
border: 2px solid #474747;
`;

const CarouselItem = (props) => (
  <div id="carousel-item">
    {props.current <= props.index + 3 && props.current >= props.index - 3 && props.current !== props.index && <Item id={props.index} src={props.photo} onClick={(e) => { props.clickPhoto(e.target.id); }} />}
    {props.current === props.index && <CurrentItem id={props.index} src={props.photo} />}
    {(props.current < props.index - 3 || props.current > props.index + 3) && <Item id={props.index} onClick={(e) => { props.clickPhoto(e.target.id); }} />}
  </div>
);

export default CarouselItem;
