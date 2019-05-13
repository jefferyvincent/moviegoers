import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import {HashRouter as Router} from "react-router-dom";
import MovieDetails from '../MovieDetails';

describe('<MovieDetails/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<MovieDetails match={{ params: { id: " 302349"} } } history={[]} />); });

  it("renders", () => {
    const { asFragment } = render(<Router><MovieDetails match={{ params: { id: " 302349"} } } history={[]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
  
  
  it('renders an loader', () => {
    expect(wrapper.find('div.loading').length).toEqual(1);
  });

  /* 
    Need to mock Ajax somehow here???? Nothing is is working and __mocks__ / axios.js is throwing me errors. 
    Reference:
    https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
    https://www.leighhalliday.com/async-axios-react-testing-library
  */
});