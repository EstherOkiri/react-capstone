import JobView from "./JobView"
import { useState } from "react"

function Jobs(){
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState(0);
    const [ jobType, setJobType] = useState('');
    const [jobs, setJobs] = useState([]);

    const fetchJobs = ()=>{
        fetch ('http://localhost:8001/jobs')
        .then(response =>{
            if(!response.ok){
                throw new Error ('Failed to fetch jobs');
            }
            return response.json();
        })
        .then(data =>{
            setJobs(data);
        })
        .catch(error => {
            console.error('Error fetching jobs: ', error);
        });
    };

    //handleSearch
     const handleSearch = (e)=>{
        e.preventDefault();
       //console.log(jobTitle);
        //console.log(location);


        const filteredJobs = jobs.filter(job =>{
            return job.jobTitle.toLocaleLowerCase().includes(jobTitle.toLocaleLowerCase())||
            job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())||
            job.jobType.toLocaleLowerCase().includes(jobType.toLocaleLowerCase())||
            job.salary.toString().toLocaleLowerCase().includes(salary.toLocaleLowerCase())       
        });

        console.log(filteredJobs);

        

     };


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
                placeholder="ssalary"
                name="salary"
                id="salary"
                value={salary}
                onChange={(e)=>setSalary(e.target.value)} />         
               <button type="submit"> Search</button> 
            </form>
            <h2>Latest Jobs</h2>
        
        </>
    )
}

export default Jobs