import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import BackToTopBtn from './Components/BackToTopBtn';

const App=()=>{
  let bgBlack="#343434"
  let black="#282C35"
  let white="#ffffff"

  const apikey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
  const [mode,setMode]=useState("light")
  const handleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor=bgBlack;
      document.body.style.color=white;
    }
    else{
      setMode("light")
      document.body.style.backgroundColor=white;
      document.body.style.color=black;
    }
  }
  return (
      <div>
        <Router>
          <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          />
          <Navbar mode={mode} handleMode={handleMode}/>
          <Routes>
            <Route exact path="/" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="general" pageSize={12} country={"in"} category={"general"}/>}/>
            <Route exact path="/health" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="health" pageSize={12} country={"in"} category={"health"}/>}/>
            <Route exact path="/business" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="business" pageSize={12} country={"in"} category={"business"}/>}/>
            <Route exact path="/entertainment" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={12} country={"in"} category={"entertainment"}/>}/>
            <Route exact path="/sports" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="sports" pageSize={12} country={"in"} category={"sports"}/>}/>
            <Route exact path="/science" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="science" pageSize={12} country={"in"} category={"science"}/>}/>
            <Route exact path="/technology" element={<News mode={mode} apikey={apikey} setProgress={setProgress} key="technology" pageSize={12} country={"in"} category={"technology"}/>}/>
          </Routes>
          <BackToTopBtn/>
        </Router>
      </div>
  )
}

export default App