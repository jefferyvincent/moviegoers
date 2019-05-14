import React from 'react';
import { shallow } from 'enzyme';
import {render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Search from '../Search';

afterEach(cleanup);

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

  it("should allow the user to type a word to search for", async () => {
    const searchString = "batman";
    const { getByPlaceholderText } = render(<Search />);
    const input = getByPlaceholderText('search it.');
    input.value = 'batman';
    expect(getByPlaceholderText('search it.').value).toEqual(searchString);
  });

});