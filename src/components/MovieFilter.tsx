import React, {useState, useContext} from 'react';
import Context from '../Context';

import arrow from '../img/arrow.svg';
import './MovieFilter.css';

interface MovieFilterProps {
    filters: Array<object>;
    active_filter: string;
    history: any;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ filters, active_filter, history}) => {
    const dispatch:any = useContext(Context);
    const [active, setActive] = useState('Now Playing');
    const [hidden, setHidden] = useState('hidden');
    
    const filterResults = (filter:string):void => {
        dispatch({
            type: 'updateFilter',
            payload: filter
        });
        dispatch({
            type: 'updatePage',
            payload: 1 
        });
        toggleFilterOptions();
        history.push('/movies/1');
    }

    const toggleFilterOptions = ():void => {
        if (hidden === "hidden") {
            setHidden('');
            document.addEventListener('mousedown', hideFilter, false);
        } else {
            setHidden('hidden');
        }
    }

    const hideFilter = ():void => {
        setTimeout(()=>{
            setHidden('hidden');
            document.removeEventListener('mousedown', hideFilter, false);
        }, 500)
    }

    return (
        <div className="movieFilter">
            <h3 className="filter-text">Showing Movies sorted by {active}</h3>
            <div className="filter">
                <div className="filter-selected" onClick={toggleFilterOptions}>
                    {active} <img src={arrow} alt="filter" />
                </div>
                <ul className={"filter-options " + hidden}>
                    {
                        filters.map((item:any, key:number)=> {
                            if (active_filter !== item.name) {
                                return (
                                    <li key={key} onClick={()=> {filterResults(item.name); setActive(item.title)}}> {item.title}</li>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default MovieFilter;