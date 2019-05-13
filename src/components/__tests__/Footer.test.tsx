import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Footer />); });
  it('renders a footer', () => {
    expect(wrapper.find('footer.footer').length).toEqual(1);
  });

  it('renders an hr', () => {
    expect(wrapper.find('hr').length).toEqual(1);
  });
});