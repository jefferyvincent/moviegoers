import React from 'react';
import { shallow } from 'enzyme';
import MovieFilter from '../MovieFilter';

describe('<MovieFilter/>', () => {
  let wrapper:any;
  const filter_data = [
    {
      name: 'now_playing',
      title: 'Now Playing'
    },
    {
      name: 'popular',
      title: 'Popular'
    },
    {
      name: 'top_rated',
      title: 'Top Rated'
    }
  ];


  beforeEach(() => { wrapper = shallow(<MovieFilter history={[]} filters={filter_data} active_filter="now_playing"/>); });
  it('renders a filter', () => {
    expect(wrapper.find('div.movieFilter').length).toEqual(1);
  });

  it('should show the hidden ul filter list when clicked', () => {
    expect(wrapper.find('ul').hasClass('hidden')).toEqual(true);
    wrapper.find('div.filter-selected').simulate('click');
    expect(wrapper.find('ul').hasClass('hidden')).toEqual(false);
    });
});