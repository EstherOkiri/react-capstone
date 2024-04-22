import Apply from "./JobApplication"
import { useState } from "react"
import Jobs from "./Jobs";



function JobView(){

        const [jobs, setJobs] = useState([]);



    //fetch data
    fetch('http://localhost:8001/jobs')
    .then(res =>{
        if(!res.ok){
            throw new Error('Network Error')
        }
        return res.json();
    })
    .then(data =>{
        setJobs(data);
    })
    

    return(

        <>
            <div>
                <h1>Vacancies</h1>
                {jobs.map(job =>{
                    <div key={job.id}>
                    <h2>{job.jobTitle}</h2>
                    <p><strong>Location :</strong> {job.location}</p>
                    <p><strong>Salary :</strong>{job.salary}</p>
                    <h3><strong>Job Description</strong></h3>
                    <p>{job.description}</p>
                    <h3>Qualifications</h3>
                    <ul>
                        {job.qualifications.map((qualification, index) =>(
                            <li key = {index}>{qualification}</li>
                        ))}
                    </ul>
                    <button>Apply</button>
                    </div>

                })}
            </div>
           
            

            

            
        
        </>
    )
}

export default JobView