import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import Layout from './Layout';
import './MovieDetails.css';
import noImage from '../img/no_image.png';

interface MovieDetailsProps {
    match: any;
    history: any;
};

const MovieDetails:React.FC<MovieDetailsProps> = ({match, history}) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
            `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=438581175542f3ba5208b33d46f87151`,
            );
            setData(result.data);
        };
        fetchData();
    }, [match.params.id]);

    const goBack = ():void => {
        history.goBack();
    }

    const renderProductionCo = () => {
        const len = data.production_companies.length;
        if (len > 0) {
            return data.production_companies.map((item:any, i:number) =>{
                if (len === i + 1) {
                    return <span key={i}>{item.name}</span>;
                } else {
                    return <span key={i}>{item.name}, </span>;
                }
            });
        } else {
            return <span>No Data</span>
        }
    }

    const renderGenres = () => {
        const len = data.genres.length;
        if (len > 0) {
            return data.genres.map((item: any, i:number) => {
                if (len === i + 1) {
                    return <span key={i}>{item.name}</span>;
                } else {
                    return <span key={i}>{item.name}, </span>;
                }
            });
        } else {
            return <span>No Data</span>
        }
    }

    const renderVotingAverage = () => {
        let score = 'red';
        if (Math.round(parseInt(data.vote_average)) > 5) {
            score = 'green';
        }
        return (
            <div className="user-scores">
                <div className={"rating " + score}>{Math.round(parseInt(data.vote_average))}</div>
                <div className="user-score">Based on {data.vote_count} votes</div>
            </div>
        )
    }

    const renderOverview = () => {
        if (data.overview !== null) {
            return data.overview;
        } else {
            return <span>No Data</span>
        }
    }

    const renderRunTime = () => {
        if (data.runtime !== null) {
            return <span>{data.runtime} mins</span>;
        } else {
            return <span>No Data</span>
        }
    }

    const renderDate = () => {
        if (data.release_date !== null) {
        
            let d = new Date(data.release_date);

            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];

            let date = monthNames[d.getUTCMonth()] +" " + d.getDate() + ", " + d.getFullYear();

            return <span>{date}</span>;
        } else {
            return <span>No Data</span>
        }
    }
    const renderResult = () => {
        if (data !== undefined) {
            if (data.hasOwnProperty('id')) {

                // image
                let img = noImage;
                if (data.poster_path !== null) {
                    img = "https://image.tmdb.org/t/p/w500/"+data.poster_path
                }

                return (
                    <Fragment>
                        <div data-testid="resolved" className="backBtn" onClick ={goBack}>Back</div>
                        <div className="movie-details">
                            <h2>{data.original_title}</h2>
                            <div className="movie-details-body">
                                <img src={img} alt={data.original_title} />
                                <div>
                                    {renderVotingAverage()}
                                    <p><strong>Release Date:</strong> {renderDate()}</p>
                                    <p><strong>Run time:</strong> {renderRunTime()}</p>
                                    <p><strong>Plot Summary:</strong> {renderOverview()}</p>
                                    <p><strong>Genres:</strong> {renderGenres()}</p>
                                    <p><strong>Production Co: </strong>{renderProductionCo()}</p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) 
            } else {
                return <div data-testid="loader" className="loading">loading...</div>
            }
        } else {
            return <div data-testid="loader" className="loading">loading...</div>
        }
    }

    return (
        <Layout>
            {renderResult()}
        </Layout>
    );
}

export default MovieDetails;