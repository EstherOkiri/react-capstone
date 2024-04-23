import Apply from "./JobApplication"
import { useState, useEffect } from "react"
import Jobs from "./Jobs";



function JobView(){

        const [jobs, setJobs] = useState(null);



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
            <div>
            {jobs && jobs.map((job => (
                 <div key={job.id}>
                 <h2>{job.jobTitle}</h2>
                 <p><strong>Location :</strong> {job.location}</p>
                 <p><strong>Salary :</strong>{job.salary}</p>
                 <h3><strong>Job Description</strong></h3>
                 <p>{job.description}</p>
                 <button>Apply</button>
                 </div>
              )))}
            </div>
            
                
              
            
           
            

            

            
        
        </>
    )
}

export default JobView

