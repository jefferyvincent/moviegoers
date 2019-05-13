import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import {HashRouter as Router} from "react-router-dom";

import Pager from '../Pager';

describe('<Pager/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Pager page={1} max={10} history={[]} />); });

  it("renders", () => {
    const { asFragment } = render(<Router><Pager page={1} max={10} history={[]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a div', () => {
    expect(wrapper.find('div.pager').length).toEqual(1);
  });
});