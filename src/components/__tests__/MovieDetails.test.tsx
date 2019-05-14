import React from 'react';
import {render, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect'
import {HashRouter as Router} from "react-router-dom";
// import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import MovieDetails from '../MovieDetails';

afterEach(cleanup);


describe('<MovieDetails/>', () => {

  it("renders", () => {
    const { asFragment } = render(<Router><MovieDetails match={{ params: { id: " 302349"} } } history={[]} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

 test('loads and displays movie details', async () => {
   /*  
      This test passes but throws a warning about things needed to be wrapped in act(). 
      Not sure how to resolve this issue since it's complaining about node_modules/react-dom/cjs/react-dom.development.js
   */
   const mockData = {
      original_title: "test",
      runtime: 0,
      overview: 'testing 1234',
      vote_count: 12,
      vote_average: 5
    };

    const { getByTestId} = render(<Router><MovieDetails match={{ params: { id: " 302349"} } } history={[]} /></Router>);
    expect(getByTestId('loader')).toHaveTextContent('loading...');

    let mockAdapter = new MockAdapter(axios);
    
    mockAdapter.onGet('https://api.themoviedb.org/3/movie/299534?api_key=438581175542f3ba5208b33d46f87151').reply(200, {
      data: {
        posts: [mockData]
      }
    });
    
    const resolvedDiv = await waitForElement(() => getByTestId("resolved"));
    expect(resolvedDiv).toHaveTextContent("Back");
  });
});