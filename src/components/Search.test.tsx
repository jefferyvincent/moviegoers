import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Search />); });
  it('renders an input area', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
});