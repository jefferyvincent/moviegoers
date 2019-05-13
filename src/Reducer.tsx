type Action =
  { type: 'updateFilter'; payload: string; }
  | { type: 'updatePage'; payload: number; }
  | { type: 'updateMovies'; payload: object; };


const appReducer = (state:any, action:Action) => {
    //console.log(action);
    switch (action.type) {
        case 'updateFilter': {
            return {
                ...state,
                filter: action.payload
            }
        }
        case 'updatePage': {
            return {
                ...state,
                page: action.payload
            }
        }
        case 'updateMovies': {
            return {
                ...state,
                movies: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default appReducer;