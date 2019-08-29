import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from '../client/components/Modal/Modal.jsx';
import MainDisplay from '../client/components/Modal/MainDisplay.jsx';
import Carousel from '../client/components/Modal/Carousel.jsx';
import CarouselItem from '../client/components/Modal/CarouselItem.jsx';
import Description from '../client/components/Modal/Description.jsx';

const modalView = () => {};
const change = () => {};
const prev = () => {};
const next = () => {};
const clickPhoto = () => {};
const listingData = { photos: [1] };
const currentIndex = 0;
const current = 0;
const photos = [1];
const photo = '';
const index = 1;
const desc = '';


describe('<Modal />', () => {
  test('renders Modal and its children', () => {
    const modal = shallow(<Modal listingData={listingData} currentIndex={currentIndex} modalView={modalView} change={change} />);
    expect(modal.getElement().type.styledComponentId).toEqual('sc-cSHVUG');
    expect(modal.getElement().props.children[1].props.id).toEqual('x-button');
    expect(modal.getElement().props.children[3].props.id).toEqual('description');
    expect(modal.getElement().props.children[0].type.styledComponentId).toEqual('sc-chPdSV');
    expect(modal.getElement().props.children[2].type.styledComponentId).toEqual('sc-kgoBCf');
    expect(modal.getElement().props.children.length).toEqual(4);
  });
});

describe('<MainDisplay />', () => {
  test('renders MainDisplay and its children', () => {
    const mainDisplay = shallow(<MainDisplay prev={prev} next={next} current={current} />);
    expect(mainDisplay.getElement().props.id).toEqual('main-display');
    expect(mainDisplay.getElement().props.children.length).toEqual(3);
  });
});

describe('<Carousel />', () => {
  test('renders Carousel and its children', () => {
    const carousel = shallow(<Carousel clickPhoto={clickPhoto} currentIndex={currentIndex} photos={photos} />);
    expect(carousel.getElement().props.id).toEqual('carousel');
    expect(carousel.getElement().props.children.type.styledComponentId).toEqual('sc-iwsKbI');
  });
});

describe('<CarouselItem />', () => {
  test('renders CarouselItem and its children', () => {
    const carouselItem = shallow(<CarouselItem index={index} current={current} photo={photo} clickPhoto={clickPhoto} />);
    expect(carouselItem.getElement().props.id).toEqual('carousel-item');
    expect(carouselItem.getElement().props.children.length).toEqual(2);
  });
});

describe('<Description />', () => {
  test('renders Description and its children', () => {
    const description = shallow(<Description description={desc} currentIndex={currentIndex} photos={photos} />);
    expect(description.getElement().props.id).toEqual('description');
    expect(description.getElement().props.children.length).toEqual(3);
  });
});
