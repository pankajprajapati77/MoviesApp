import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component{
    render(){
        return (
            <div className = "navbar-movie-fav">
                <Link to="/">
                    <h1 class = "navbar-movie linked">Movies App</h1>
                </Link>
                <Link to="/fav">
                    <h2 class = "navbar-favourite linked">Favourites</h2>
                </Link>
            </div>
        )
    }
}