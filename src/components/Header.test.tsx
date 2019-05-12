import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Header />); });
  it('renders an header', () => {
    expect(wrapper.find('header.App-Header').length).toEqual(1);
  });

  it('renders an h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});