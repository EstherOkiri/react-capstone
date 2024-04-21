import Apply from "./JobApplication"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react"
import Jobs from "./Jobs";



function JobView(){

    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');

    //fetch data
    fetch('http://localhost:8001/jobs')
    .then(res =>{
        if(!res.ok){
            throw new Error('Network Error')
        }
        return res.json();
    })
    .then(data =>{
        console.log(data);
    })
    

    return(

        <>
            <div>
                <div>
                    <h1>Vacancies</h1>
                    <h4>Location</h4>
                    <h4>Salary</h4>
                </div>
                <div>
                    <h4>Description</h4>
                </div>
                <div>
                    <h4>Qualifications</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
            <button>Apply</button> <br />
            <Router>
                <Route exact path = '/Jobs'><Jobs /></Route>
            </Router>
            

            <button> <Link to="/Jobs">Search More Jobs</Link></button>

            
        
        </>
    )
}

export default JobView