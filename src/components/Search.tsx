import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './Search.css';
import mag from '../img/mag.svg';

const Search: React.FC = () => {
    const [data, setData] = useState();
    const [query, setQuery] = useState();
    const [hidden, setHidden] = useState('hidden')

    useEffect(() => {
        if (query !== '') {
            const fetchData = async () => {
                const result = await axios(
                `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=438581175542f3ba5208b33d46f87151`,
                );
                setData(result.data);
            };
            fetchData();
        }
    }, [query]);

    const renderData = () => {
        if (data !== undefined) {
            if (data.hasOwnProperty('results')) {
                return (
                    <ul className={"Search-results "+ hidden}>
                        {data.results.map((item:any) => (
                            <li key={item.id}>
                                <Link to={"/movie/"+item.id}>
                                    <div className="img-wrap">
                                        <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} alt={item.title} />
                                    </div>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                );
            }
        } else {
            return null;
        }
    }

    const showResults = ():void => {
        setHidden('');
        document.addEventListener('mousedown', hideResults, false);
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) { // esc
                hideResults();
            }
        };
    }

    const hideResults = ():void => {
        setTimeout(()=>{
            setHidden('hidden');
            document.removeEventListener('mousedown', hideResults, false);
        }, 1000)
    }

    return (
        <div className="App-search">
            <input autoComplete="off" onChange={(evt)=>{ showResults(); setQuery(evt.target.value); } } autoCorrect="off" spellCheck={false} placeholder="search it. watch it"></input>
            <img className="Search-mag" src={mag} alt="Search" />
            {renderData()}
        </div>
    );
}

export default Search;