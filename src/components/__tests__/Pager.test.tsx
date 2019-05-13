import React from 'react';
import { shallow } from 'enzyme';

import Pager from '../Pager';

describe('<Pager/>', () => {
  let wrapper:any;
  beforeEach(() => { wrapper = shallow(<Pager page={1} max={10} history={[]} />); });
  it('renders an pager', () => {
    expect(wrapper.find('div.pager').length).toEqual(1);
  });
});