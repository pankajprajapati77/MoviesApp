import React, { Component } from 'react'
import {movies} from './getmovies'
export default class Bannner extends Component{
    render() {
        let movie = movies.results[0];
        return (
            <>
            {movie == "" ? (
                <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
            <div className="card" >
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">
                {movie.overview}
                </p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        )}
        </>
        );
    }
}