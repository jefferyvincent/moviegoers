import React from 'react';
import { shallow } from 'enzyme';
import {render, cleanup, waitForElement } from 'react-testing-library';
import "jest-dom/extend-expect";
import axios from "axios";

import Grid from '../Grid';
afterEach(cleanup);

describe('<Grid/>', () => {
  let wrapper:any;
  let data = [{}];
     
  beforeEach(() => { wrapper = shallow(<Grid movies={data}/>); });

  it("renders", () => {
    const { asFragment } = render(<Grid movies={data} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an grid', () => {
    expect(wrapper.find('ul.grid').length).toEqual(1);
  });
  
  it('renders an loader', () => {
    expect(wrapper.find('div.loader').length).toEqual(1);
  });

  /* 
    Need to mock Ajax somehow here???? Nothing is is working and __mocks__ / axios.js is throwing me errors. 
    Reference:
    https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
    https://www.leighhalliday.com/async-axios-react-testing-library
  */

  it('fetches and displays data', async () => {
    const {} = render(<Grid movies={data} />);
  });

});