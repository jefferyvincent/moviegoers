import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../Grid';

describe('<Grid/>', () => {
  let wrapper:any;
  let data = [{}];
     
  beforeEach(() => { wrapper = shallow(<Grid movies={data}/>); });
  it('renders an grid', () => {
    expect(wrapper.find('ul.grid').length).toEqual(1);
  });
  it('renders an loader', () => {
    expect(wrapper.find('div.loader').length).toEqual(1);
  });
});