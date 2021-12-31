import React, { Component } from 'react';

class Rented extends Component {

    render() {
        return (
            this.props.catalog.map(c => {
                if (c.isRented) {
                    return(   
                    <div className="mini">
                    <span>{c.title}</span>
                    <div><span>-</span></div>
                    <img className="directory-img" src={c.img} alt="" />
                    </div>  
                    )
                }        
            })
        );
    }
}

export default Rented;