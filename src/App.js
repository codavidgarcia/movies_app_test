import React from 'react';
import {useEffect, useState} from 'react';

import './App.css';
import './header.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=51c868f5';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

        console.log(data);
    }
    
    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    return (       
        <div className = "app">
            <div className = "header">
                <h1>David Garcia, @codavidgarcia</h1>
                <p>Movie Search</p>
            </div>
            
            
            <h1>Search movies simple App</h1>
            <p>by @Codavidgarcia</p>
            <h2>Use the search bar above to find a selection of movies of your preference</h2>

            <div className = "search">
                <input type = "text" 
                className = "search-box" 
                placeholder = "Avengers" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Set the app to listen to enter and execute the search
                onKeyPress={search => {
                    if (search.key === 'Enter') {
                        searchMovies(searchTerm);
                    }
                }}
                />
                <img src={SearchIcon} 
                alt="search-icon" 
                className="search-icon" 
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className = "container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found, try something else!</h2>
                    </div>
                )
            }
        </div>
    );
}
export default App;