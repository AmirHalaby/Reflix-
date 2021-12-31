import React, { Component } from 'react';
import '../styles/Catalog.css'
import Movie from './Movie'
class Catalog extends Component {
    constructor(){
        super()
        this.inputValue = ""
    }
    addToRented = (id) => {
        this.props.addToRented(id)
    }
    change = (e) =>{
        this.inputValue = e.target.value
        console.log(this.inputValue);
        this.props.change(this.inputValue)
        console.log("Tarzan".includes(this.inputValue)); 
    }
    render() {
        return (
            <div>
                <input type="text"  onChange={this.change}></input>
                <h1>bedget : {this.props.bedget} $</h1>
                <h1>Rented</h1>
                <div id='movieContener'>
                    {this.props.catalog.filter(cat => cat.isRented == true && cat.title.toLowerCase().includes(this.inputValue.toLowerCase())).map(c =>
                            <Movie movie={c} key={c.id} addToRented={this.addToRented}></Movie>
                        )
                    }
                </div>
                <h1>Header</h1>
                <div id='movieContener'>
                    {this.props.catalog.filter(cat => cat.title.toLowerCase().includes(this.inputValue.toLowerCase())).map(c => 
                        <Movie movie={c} key={c.id} addToRented={this.addToRented} ></Movie>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Catalog;