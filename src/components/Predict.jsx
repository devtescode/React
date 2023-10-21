import React, { useState } from 'react'
import "./Predict.css"
import axios from 'axios'

const Predict = () => {
    // const [data, setdata] = useState([])
    const [name, setname] = useState("")
    const [predict, setpredict] = useState([])
    const [animate, setanimate] = useState(false)
    let endpoint = `https://api.agify.io/?name=${name}`;

    const predbtn = () => {

        if(name == ""){
            // alert("Enter Your Name")
            swal("Empty Input", "Enter Your Name", "error");
        }
        else{
            axios.get(endpoint).then((res) => {
                setpredict(res.data)
                console.log(res.data.fact);
                console.log(predict);
            })
            setanimate(true)
        }

    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 shadow-lg mx-auto p-3 border border-2 predtop'>
                        <h4>Age-Prediction</h4>
                        <input type="text" className='form-control my-3' onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={predbtn}>Prediction</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                animate == true ?
                    <div className='dispoutani border border-4 mt-2'>
                        <div>
                            <h5>Name</h5>
                            <h5>Age</h5>
                            {/* <h5>Count</h5> */}
                        </div>
                        <div>
                            <h5>{predict.name}</h5>
                            <h5>{predict.age}</h5>
                            {/* <h5>{predict.count}</h5> */}
                        </div>
                    </div>
                    : null
            }

        </>
    )
}

export default Predict