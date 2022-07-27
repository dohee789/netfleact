import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => { 

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        //fetchData()가 비동기적으로 동작하도록 명시
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);

            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, []);

       
  return (
    <div className='row'>
        {/* title */}
        <h2>{props.title}</h2>

        <div className="row__posters">
            {/* 영화 포스터 */}
            {movies.map((movie) => 
                <img 
                    key={movie.id}
                    className={`row__poster ${props.isLargeRow && "row_posterLarge"}`}
                    src={`${baseUrl}${props.isLargeRow ? movies.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
            )}
        </div>
    </div>
  )
}


export default Row