import React from 'react';
import {render } from 'react-testing-library';
import {HashRouter as Router} from "react-router-dom";

import MovieIndex from '../MovieIndex';

describe('<MovieIndex/>', () => {
    it("renders", () => {
        const { asFragment } = render(<Router><MovieIndex match={{params:{page: 1}}} history={[]} /></Router>);
        expect(asFragment()).toMatchSnapshot();
      });
});

