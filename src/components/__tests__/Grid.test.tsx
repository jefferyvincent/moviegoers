import React from 'react';
import { shallow } from 'enzyme';
import {render} from 'react-testing-library';
import "jest-dom/extend-expect";

import Grid from '../Grid';


describe('<Grid/>', () => {
  let wrapper:any;
  let data = [{
    results: [
      {
        id: 0,
        img:'test.png',
        title: "test"
      }
    ]
    }];
     
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

});