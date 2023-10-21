import React from 'react'
import "./Front.css"
import { Link } from 'react-router-dom'
const Front = () => {  
     
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 shadow-lg border border-3 p-5 divcont'>
                    <Link to="/pred">
                    <button className='my-2 w-100 btn btn-success'>Prediction</button><br />
                    </Link>
                    <Link to="/joke">
                    <button className='my-2 w-100 btn btn-primary'>Jokes Generation</button><br />
                    </Link>
                    <Link to="Weather">
                    <button className='my-2 w-100 btn btn-secondary'>Weather</button><br />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Front