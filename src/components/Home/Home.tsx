import { Link } from "react-router-dom";
import React from 'react'
import './Home.css';



function Home() {
    return (
        <div className="container">
            <div className='heading'>
            
                <h3 className='heading1'>
                Recent Launch
                </h3>
            
           
            
            <h1 className='heading2'>
                Starlink Mission
            </h1>
            
            </div>
        

        <br />
        <Link to="/launches">
        <button className="btn">Explore Now</button>
        </Link>
        </div>
       
        
    )   
}

export default Home;
