import React, { useState } from 'react'
import axios from 'axios'
import "./Jokes.css"
const Jokes = () => {
    let endpointjoke = "https://catfact.ninja/fact";
    const [data, setdata] = useState([])
    const fetchdata = () => {
        axios.get(endpointjoke).then((res) => {
            setdata(res.data)
            console.log(res.data.fact);
            // console.log(name);
        })
    }
    return (
        <>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6 col-sm-12 mt-5 mx-auto shadow border rounded-4 text-center p-5'> 
                <h3>Jokes</h3>
                {/* <p>{data.length}</p> */}
                <div className='mt-4'>
                <button className='btn btn-primary' onClick={fetchdata}>Click On</button>
                </div>
                <div className='mt-4'>
                <p>{data.fact}</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Jokes