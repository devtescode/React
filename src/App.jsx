import React from 'react'
import Front from './components/Front'
import { Route, Routes } from 'react-router-dom'
import Predict from './components/Predict'
import Jokes from './components/Jokes'
import Weather from './components/Weather'
const App = () => {
  return (
    <Routes>
    < Route path="/" element={<Front/>}/>
    < Route path="/pred" element={<Predict/>}/>
    < Route path="/Joke" element={<Jokes/>}/>
    < Route path="/Weather" element={<Weather/>}/>
    </Routes>
    // <Front />
  )
}

export default App