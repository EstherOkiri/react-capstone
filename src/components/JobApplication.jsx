import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Apply(){
    const [fullName, setFullName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const location = useLocation();

    useEffect(() => {
        if(location.state && location.state.jobTitle){
            setJobTitle(location.state.jobTitle)
        }
    },[location.state])

    

    return(
        <>
            <h1>Job Application Form</h1>
            <div className="flex items-center justify-center">
                <form action="">
                    <label htmlFor="Full name">Full Name</label>
                    <input type="text"
                    placeholder="Full name"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value.toLocaleLowerCase())}/>

                    <label htmlFor="jobTitle">Job Applied For</label>
                    <input type="text" 
                    name="jobTitle" 
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value.toLocaleLowerCase())} />

                    <label htmlFor="resume">Upload Your Resume</label>
                    <input type="file"
                    id="resume"
                    accept=".pdf" />

                    <button type="submit">Apply</button>
                </form>
            </div>
        
        </>
    )
}

export default Apply