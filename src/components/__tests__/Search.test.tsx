import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import Search from '../Search';



describe('<Search/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Search />); });

  it("renders", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an input area', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

});