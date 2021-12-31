import React, { Component } from 'react';
import '../styles/Movies.css'
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'

class Movie extends Component {
    addToRented = () => {
        this.props.addToRented(this.props.movie.id)
    }
    render() {
        if (this.props.movie.isRented) {
            return (
            <div className='button-container'>
                <span  onClick={this.addToRented} >-</span>
                <Link  to={"/movie/"+this.props.movie.id} >
                    <img className="directory-img" src={this.props. movie.img} alt="" />
                </Link>
            </div>
            )    
    }
        else {
            return(
            <div className='button-container'>
                <span  onClick={this.addToRented} >+</span>
                <Link to={"/movie/"+this.props.movie.id} >
                    <img className="directory-img" src={this.props. movie.img} alt="" />
                </Link>

                
                {/* <span>{this.props.movie.title}   </span> */}
 
            </div>
            )
        }
          
        
    }
}

export default Movie;