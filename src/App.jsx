import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"

function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/components/Login'><Login /></Route>
            <Route exact path='/components/Jobs'><Jobs /></Route>
        </Switch>
        <Footer />

      </Router>
      
      
    </>
  )
}

export default App
