import React from 'react';
import { shallow } from 'enzyme';

import MovieIndex from '../MovieIndex';

describe('<MovieIndex/>', () => {
    it('renders without crashing', () => {
        shallow(<MovieIndex match={{params:{page: 1}}} history={[]} />);
    });
});

