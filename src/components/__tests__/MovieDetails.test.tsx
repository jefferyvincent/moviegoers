import React from 'react';
import { shallow } from 'enzyme';

import MovieDetails from '../MovieDetails';

describe('<MovieDetails/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<MovieDetails match={{ params: { id: " 302349"} } } history={[]} />); });
  
  it('renders an loader', () => {
    expect(wrapper.find('div.loading').length).toEqual(1);
  });
});