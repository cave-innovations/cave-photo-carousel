import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/components/App.jsx';
import Gallery from '../client/components/Gallery/Gallery.jsx';
import GalleryItemLrg from '../client/components/Gallery/GalleryItemLrg.jsx';
import GalleryItemSml from '../client/components/Gallery/GalleryItemSml.jsx';

describe('<Gallery />', () => {
  test('renders Gallery', () => {
    const gallery = mount(<Gallery />);
  })
})