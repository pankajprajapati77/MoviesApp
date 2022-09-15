import React, { Component } from 'react';
import axios from "axios";
import './Favourites.css';
// import {Footer} from "./Footer";
import API_KEY from '../secrets';
export default class Favourites extends Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            genre: [],
            currGenre: "All Genre",
            currText:"",
        };
    }

    async componentDidMount() {
//         let ans = await axios.get(
//      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//    );
   let results = JSON.parse(localStorage.getItem("movies"));

   let genreId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
//    console.log(ans.data);

   let genreArr = [];
   results.map((movieObj) => {
    if(!genreArr.includes(genreId[movieObj.genre_ids[0]])){
        genreArr.push(genreId[movieObj.genre_ids[0]]);
    }
   });

   genreArr.unshift("All Genre");
   console.log(genreArr);
   this.setState({
     movies: [...results], //[{},{},{}]
     genre: [...genreArr]
    });
   }

   handleCurrGenre = (genre) => {
    this.setState({
        currGenre: genre,
    });
   }

   handleText = (e) => {
    this.setState({
        currText: e.target.value
    });
   }

   sortPopularityAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
        return objA.popularity - objB.popularity;
    });
    this.setState({
        movies: [...allMovies],
    });
   };

   sortPopularityDesc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
        return objB.popularity - objA.popularity;
    });
    this.setState({
        movies: [...allMovies],
    });
   };

   sortRatingAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
        return objA.vote_average - objB.vote_average;
    });
    this.setState({
        movies: [...allMovies],
    });
   };

   sortRatingDesc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
        return objB.vote_average - objA.vote_average;
    });
    this.setState({
        movies: [...allMovies],
    });
   };

   handleDelete = (id) => {
    let newMovies = this.state.movies.filter((movieObj) => {
        return movieObj.id != id;
    });
    this.setState({
        movies:[...newMovies]
    })
    localStorage.setItem("movies", JSON.stringify(newMovies));
   }

  render() {
    let genreId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
   
    let filteredMovies =[];
    if(this.state.currText == ''){
        filteredMovies = this.state.movies;
    }
    else{
        filteredMovies = this.state.movies.filter(movieObj => {
            let movieName = movieObj.original_title.toLowerCase();
            return movieName.includes(this.state.currText);
        })
    }
    if(this.state.currGenre != "All Genre"){
        filteredMovies = this.state.movies.filter(
            (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currGenre 
        );
    }
   
    return (
      <div className='row'>
        <div className='col-3 favourites-list'>
            <ul class="list-group">
                {this.state.genre.map((genre) => (
                    this.state.currGenre == genre ? (
                    <li class="list-group-item active" aria-current="true">
                    {genre}
                    </li> 
                    ):(
                    <li 
                    class="list-group-item" 
                    aria-current="true"
                    onClick={() => this.handleCurrGenre(genre)}
                    >
                    {genre}
                    </li>
                    )
                ))}
            </ul>
        </div>
        <div class="col favourites-table">
            <div class = "row">
                <input 
                type= "text" 
                class="col-12 search-input" 
                placeholder='Search'
                value={this.state.currText}
                onChange={this.handleText}
                ></input>
                {/* <input type= "number" class="col-4" placeholder='5'></input> */}
            </div>
            <div class="row">
                <table class="table">
                    <thead>
                        <tr class="table-row-titles Genre">
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">
                        <i 
                        class="fa-solid fa-caret-up" 
                        onClick={this.sortPopularityAsc}
                        />
                        Popularity
                        <i 
                        class="fa-solid fa-caret-down" 
                        onClick={this.sortPopularityDesc}
                        />
                        </th>
                        <th scope="col">
                        <i 
                        class="fa-solid fa-caret-up"
                        onClick={this.sortRatingAsc} 
                        />    
                            Rating
                        <i 
                        class="fa-solid fa-caret-down"
                        onClick={this.sortRatingDesc}
                         />
                        </th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovies.map((movieObj) => (
                        <tr class="table-row-titles">
                            <td scope='row' class="movie-title-name">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                                style={{ width: "6rem", height:"8rem",paddingRight: "0.5rem" }}
                            />
                               {movieObj.original_title}
                        </td>
                        <td>{genreId[movieObj.genre_ids[0]]}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{movieObj.vote_average}</td>
                        <td>
                            <button 
                            class = "btn btn-outline-danger"
                            onClick={() => this.handleDelete(movieObj.id)}
                            >
                            Delete
                            </button>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
