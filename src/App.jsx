import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
import SignUp from './components/SignUp'
import JobView from './components/JobView'
import Apply from './components/JobApplication'
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
      <Router>
      
          <Navbar/>
          <Switch>
            <Route exact path='/'><Login /></Route>
            <Route exact path='/JobView'><JobView/></Route>
            <Route exact path='/SignUp'><SignUp /></Route>
            <Route exact path='/Apply'>< Apply/></Route>
        </Switch>
        <Footer />

      </Router>
      
      
    </>
  )
}

export default App
