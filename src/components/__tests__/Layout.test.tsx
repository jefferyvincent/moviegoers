import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import {HashRouter as Router} from "react-router-dom";
import Layout from '../Layout';

describe('<Layout/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Layout />); });

  it("renders", () => {
    const { asFragment } = render(<Router><Layout /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an container', () => {
    expect(wrapper.find('div.container').length).toEqual(1);
  });

  it('renders an main tag', () => {
    expect(wrapper.find('main').length).toEqual(1);
  });
});