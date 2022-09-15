import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component{
    render(){
        return (
            <div className = "navbar-movie-fav">
                <Link to="/" class = "navbar-movie linked">
                    <h1 >Movies App</h1>
                </Link>
                <Link to="/fav" class = "navbar-favourite linked">
                    <h2 >Favourites</h2>
                </Link>
            </div>
        )
    }
}