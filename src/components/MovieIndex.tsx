import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

import appReducer from '../Reducer';
import Context from '../Context';

import Layout from './Layout';
import MovieFilter from './MovieFilter';
import Grid from './Grid';
import Pager from './Pager';

const InitialState = {
    filter: "now_playing",
    page: 1,
    movies: [],
}
  
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

interface MovieIndexProps {
    match: any;
    history: any;
};


const MovieIndex: React.FC<MovieIndexProps> = ({match, history}) => {
    const [state, dispatch] = useReducer(appReducer, InitialState);
    let pager = match.params.page;

    if (pager === undefined) {
        pager = 1;
    }
    
    useEffect(() => {
      if (state.filter !== '') {
          const fetchData = async () => {
            const result = await axios(
              `https://api.themoviedb.org/3/movie/${state.filter}?page=${pager}&api_key=438581175542f3ba5208b33d46f87151`,
            );

            dispatch({
              type: 'updateMovies',
              payload: result.data
            });

            dispatch({
                type: 'updatePage',
                payload: pager
            });
          };
          fetchData();
      }
    }, [state.filter, pager]);

    //console.log(state);

    return (
      <Context.Provider value={dispatch}>
        <Layout>
          <h2>Ultimate Movie Guide</h2>
          <MovieFilter filters={filter_data} active_filter={state.filter} history={history} />
          <Grid movies={state.movies} />
          <Pager page={state.page} max={state.movies.total_pages} history={history} />
        </Layout>
      </Context.Provider>
    );
}

export default MovieIndex;