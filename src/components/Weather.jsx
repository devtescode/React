import React, { useState } from 'react'
import "./Weather.css"
import axios from 'axios'
import image1 from '../../src/assets/deg.png'
import image2 from '../../src/assets/gust.jpg'
import image5 from '../../src/assets/humi.jpg'
import image4 from '../../src/assets/back.avif'
import image6 from '../../src/assets/lat.png'
import image7 from '../../src/assets/lon.webp'
import image8 from '../../src/assets/temp.jpg'


const Weather = () => {
    const [name, setname] = useState("")
    const [predict, setpredict] = useState("")
    let APIkey = "c948293bb7bfd9ef0040bee7d3aeddc5"
    let myurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIkey}&units=metric`
    const weatherBtn = () => {
        if(name == ""){
        //    alert("Enter a Country Or a State") 
           swal("Empty Input", "Enter a Country Or a State", "error");
        }
        else{
            axios.get(myurl).then((res) => {
                setpredict(res.data)
                console.log(res);
            })
        }
    }

    // changemode.innerHTML = "dark mode"
        const modeBtn = () => {
            if (changemode.innerHTML == `<i class="ri-moon-fill"></i>`) {
                dark.style.backgroundColor = "black"
                changemode.innerHTML = `<i class="ri-moon-line"></i>`
            }
            else if (changemode.innerHTML == `<i class="ri-moon-line"></i>`) {
                dark.style.backgroundColor = "#8EFBF7"
                changemode.innerHTML = `<i class="ri-moon-fill"></i>`
            }
        }
    return (
        <>
            <div className='container'>
                
                <div className='row'>
                    <div className='col-md-6 col-sm-12 mx-auto p-3 card weathercont' id='dark'>
                        <div className='stylediv border border-2 rounded-3 p-2 bg-white'>
                            <input type="text" className='form-control p-3' onChange={(e) => setname(e.target.value)} placeholder='Enter Any Country Or State' /><br />
                            <button className='btn btn-secondary p-2' onClick={weatherBtn}><i class="ri-search-line"></i></button>
                        </div>
                        {/* <div className='border border-2 rounded-5 w-25 text-center'>
                            
                        </div> */}
                        <div className='mt-5'>
                            <div>
                                {
                                    predict == "" ?
                                        <div className='card text-center'>
                                            <b className='border-bottom border-2 p-2'>Top World Richest Country In The World</b>
                                            <p className='border-bottom border-2 p-2'>United States</p>
                                            <p className='border-bottom border-2 p-2'>United Kingdom</p>
                                            <p className='border-bottom border-2 p-2'>United Arab Emirates</p>
                                            <p className='border-bottom border-2 p-2'>Qatar</p>
                                            <p className='border-bottom border-2 p-2'>Norway</p>
                                            <p className='border-bottom border-2 p-2'>Switzerland</p>
                                            <p className='border-bottom border-2 p-2'>Luxembourg</p>
                                            <p className='border-bottom border-2 p-2'>Sweden</p>
                                            <p className='border-bottom border-2 p-2'>Australia</p>
                                            <p className='border-bottom border-2 p-2'>Canada</p>
                                            
                                        </div>
                                        :
                                        <div>
                                        
                                            <div className='card'>
                                                <div className='d-flex justify-content-around'>
                                                    <b>NAME</b>
                                                <p>{predict.name}</p>
                                                </div>

                                                <div className='d-flex justify-content-around'>
                                                    <b>Description</b>
                                                <p>{predict.weather[0].description}</p>
                                                </div>
                                            </div>




                                            <div className='w-100 border border-3 backimage '>
                                                <div className='d-flex stylecard mt-5'>
                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image1} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex">
                                                            <div className=''>
                                                                <p className="card-text">Degrees</p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.wind.deg}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image2} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex">
                                                            <div className=''>
                                                                <p className="card-text">Gust</p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.wind.gust}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image5} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex mt-4">
                                                            <div className=''>
                                                                <p className="card-text">Humidity</p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.wind.deg}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image6} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex mt-4">
                                                            <div className=''>
                                                                <p className="card-text">Latitudes</p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.coord.lat}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image7} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex mt-4">
                                                            <div className=''>
                                                                <p className="card-text">Longitude </p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.coord.lon}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="card" style={{ minWidth: "18rem", }}>
                                                        <img src={image8} className="card-img-top" alt="..." />
                                                        <div className="card-body justify-content-between d-flex mt-4">
                                                            <div className=''>
                                                                <p className="card-text">Temperature</p>
                                                            </div>
                                                            <div>
                                                                <p className="card-text">{predict.main.temp}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                }

                            </div>
                        </div>
                        <div>
                            <button className='btn btn-secondary mt-4' id='changemode' onClick={modeBtn}><i class="ri-moon-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather