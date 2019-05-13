import React from 'react';
import { shallow } from 'enzyme';
import {render } from 'react-testing-library';
import {HashRouter as Router} from "react-router-dom";
import Movie from '../Movie';

describe('<Movie/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Movie id={1} img="test.png" title="test" />); });

  it("renders", () => {
    const { asFragment } = render(<Router><Movie id={1} img="test.png" title="test" /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders an movie title', () => {
    expect(wrapper.find('div.movie-text').length).toEqual(1);
  });
  it('renders an movie image', () => {
    expect(wrapper.find('img.movie-poster').length).toEqual(1);
  });
});