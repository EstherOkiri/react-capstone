import JobView from "./JobView"
import { useState } from "react"

function Jobs(){
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState(0);
    const [ jobType, setJobType] = useState('');


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
                placeholder="job type"
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
                

                <input type="submit" name="searchInput" id="" />
            </form>
            <h2>Latest Jobs</h2>
        
        </>
    )
}

export default Jobs