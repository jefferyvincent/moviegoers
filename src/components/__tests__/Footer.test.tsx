import React from 'react';
import {render } from 'react-testing-library';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Footer />); });

  it("renders", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders a footer', () => {
    expect(wrapper.find('footer.footer').length).toEqual(1);
  });

  it('renders an hr', () => {
    expect(wrapper.find('hr').length).toEqual(1);
  });
});