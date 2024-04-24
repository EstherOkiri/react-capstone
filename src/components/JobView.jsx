import Apply from "./JobApplication"
import {  Link } from "react-router-dom";
import { useState, useEffect } from "react"
import Jobs from "./Jobs";



function JobView(){

        const [jobs, setJobs] = useState(null);
        const [selectedJob, setSelectedJob] = useState(null);



    //fetch data
    useEffect (() => {
        fetch('http://localhost:8001/jobs')
    .then(res =>{
        if(!res.ok){
            throw new Error('Network Error')
        }
        return res.json();
    })
    .then(data =>{
        setJobs(data);
        console.log(data);
    })
    .catch(err =>{
        console.log(err.message);
    })
    },[])
   
    

    return(
                    <>
                        <h1>Vacancies</h1>
                        <div className="p-7  ">
                         <div className="grid grid-cols-2 gap-4 ">
                        {jobs && jobs.map((job => (
                            <div key={job.id} className="p-4 rounded-md border border-customColor hover:shadow-lg transition duration-200">
                            <h2>{job.jobTitle}</h2>
                            <h3><strong>Company: </strong>{job.company}</h3>
                            <p><strong>Location :</strong> {job.location}</p>
                            <p><strong>Salary :</strong>{job.salary}</p>
                            <h3><strong>Job Description</strong></h3>
                            <p>{job.description}</p>
                            <button ><Link to="/Apply">Apply</Link></button>
                            
                            </div>
                        )))}
                        </div>
            
                        </div>
            </>
     

       
    )
}

export default JobView

