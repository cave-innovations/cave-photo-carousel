import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gallery from '../client/components/Gallery/Gallery.jsx';
import GalleryItemLrg from '../client/components/Gallery/GalleryItemLrg.jsx';
import GalleryItemSml from '../client/components/Gallery/GalleryItemSml.jsx';
import exampleData from '../client/data/exampledata.js';

describe('<Gallery />', () => {
  test('renders Gallery and its children', () => {
    const gallery = shallow(<Gallery data={exampleData.exampleData[0]} />);
    expect(gallery.getElement().props.children.length).toEqual(2);
  });
});

describe('<GalleryItemLrg />', () => {
  test('renders GalleryItemLrg and its children', () => {
    const galleryItemLrg = shallow(<GalleryItemLrg />);
    expect(galleryItemLrg.getElement().props.children[2].type.styledComponentId).toEqual('sc-bdVaJa');
    expect(galleryItemLrg.getElement().props.children[2].props.children.props.id).toEqual('1');
  });
});

describe('<GalleryItemSml />', () => {
  test('renders GalleryItemSml and its children', () => {
    const galleryItemSml = shallow(<GalleryItemSml id={3} />);
    expect(galleryItemSml.getElement().type.styledComponentId).toEqual('sc-htpNat');
    expect(galleryItemSml.getElement().props.children[2].type.styledComponentId).toEqual('sc-bxivhb');
    expect(galleryItemSml.getElement().props.children[2].props.id).toEqual(3);
    expect(galleryItemSml.getElement().props.children[0]).toBe(undefined);
    expect(galleryItemSml.getElement().props.children[1]).toBe(undefined);
  });
});
