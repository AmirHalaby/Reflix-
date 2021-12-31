import React, { Component } from 'react';
import '../styles/Movies.css'

class MovieDetail extends Component {

    render() {
        console.log("match");
        console.log(this.props.match);
        console.log(this.props.catalog);
        return(
        <div>   
                {this.props.catalog.filter(movie => movie.id == this.props.match.params.id).map(c =>     
                      
                        <div>
                            <h1>{c.title}</h1>
                            <img className="directory-img" src={c.img} alt="" />
                            <p>{c.descrShort}</p>
                        </div>
                    )
                }
        </div>
        )
    }
}

export default MovieDetail;