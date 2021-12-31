import React, { Component } from 'react';
import '../styles/Landing.css'
import Catalog from './Catalog';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'

class Landing extends Component {
    catalogRoute = () =>{   
        // <Catalog  catalog={catalog1} />
        <div>
        </div>
        console.log('Landing'); 
    }
        
    render() {
        let catalog = this.props.catalog
        return (
            <div className='container'>            
                <h2 id='link'>WHO's WATCHING ?</h2>
                <div id='movieContener'>               
                    <Link className='user' id='green' to="/catalog"> <h3 id='link'>Mona</h3></Link>
                    <Link className='user' id='yellow' to="/catalog"><h3 id='link'>Jasmyne</h3></Link>
                    <Link className='user' id='orange' to="/catalog"><h3 id='link'>Aura</h3></Link>
                    <Link className='user' id='red' to="/catalog">   <h3 id='link'>Tira</h3></Link>
                </div>
            </div>
        );
    }
}

export default Landing;