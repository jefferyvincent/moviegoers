import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import Header from '../Header';
import {HashRouter as Router} from "react-router-dom";

describe('<Header/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Header />); });

  it("renders", () => {
    const { asFragment } = render(<Router><Header /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an header', () => {
    expect(wrapper.find('header.app-header').length).toEqual(1);
  });

  it('renders an h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});