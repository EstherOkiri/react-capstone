import JobView from "./JobView"
import { useState } from "react"

function Jobs(){
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobs, setJobs] = useState([]);

    const handleSearch = (e)=> {
        e.preventDefault();

        //fetch db
        fetch('http://localhost:8001/jobs')
        .then(res =>{
            if(!res.ok){
                throw new Error('Network error');
            }
            return res.json();
        })
        .then(data =>{
            console.log(data);
            const filteredJobs = data.filter(job => {
                const jobTitleMatch = job.jobTitle.toLocaleLowerCase().includes(jobTitle.toLocaleLowerCase());
                const locationMatch = job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase());
                const jobTypeMatch = job.jobType.toLocaleLowerCase().includes(jobType.toLocaleLowerCase());
                const salaryMatch = job.salary.toLocaleLowerCase().includes(salary.toLocaleLowerCase());
                
                return jobTitleMatch && locationMatch && jobTypeMatch && salaryMatch;
            })
            setJobs(filteredJobs);
            console.log('Jobs set successfuly',filteredJobs);
            
        })
        .catch(error =>{
            console.error('There was a problem with fetching data', error)
        })
    }

    
    return(

        <>
            <h1>Filter</h1>
            <form onSubmit = {handleSearch} action="">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" 
                placeholder="Job Title" 
                name="jobTitle"
                id="jobTitle"
                value={jobTitle}
                onChange={(e)=>setJobTitle(e.target.value)}/>
                <label htmlFor="location">Location</label>
                <input type="text" 
                placeholder="location"
                name="location"
                id="location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)} />
                <label htmlFor="jobType">Job Type</label>
                <input type="text" 
                placeholder="Full time,Part time..."
                name="jobType"
                id="jobType"
                value={jobType}
                onChange={(e)=>setJobType(e.target.value)} />
                <label htmlFor="salary">Salary</label>
                <input type="text" 
                placeholder="salary"
                name="salary"
                id="salary"
                value={salary}
                onChange={(e)=>setSalary(e.target.value)} />         
               <button type="submit"> Search</button> 
            </form>
            <div>
                <h2>Search Results</h2>
                {jobs.map((job,index) =>(
                    <div className="pl-6 pt-6">
                        <h3 className="font-bold">{job.jobTitle}</h3>
                        <p>Location : {job.location}</p>
                        <p>Type : {job.jobType}</p>
                        <button>See Job</button>
                    </div>
                ))}
            </div>

        
        </>
    )
}

export default Jobs