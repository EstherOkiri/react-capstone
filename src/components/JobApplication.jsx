import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Apply(){
    const [fullName, setFullName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const location = useLocation();
    const [submitted,setSubmitted] = useState(false);


    useEffect(() => {
        if(location.state && location.state.jobTitle){
            setJobTitle(location.state.jobTitle)
        }
    },[location.state])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(fullName);
        console.log (jobTitle);
        alert("Application submitted successfuly!")
        setSubmitted(true)
    }

    if(submitted){
        return <Redirect to = "JobView" />
    }

    

    return(
        <>
            <h1>Job Application Form</h1>
            <div className="flex items-center justify-center">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="Full name" >Full Name</label> <br />
                    <input type="text"
                    placeholder="Full name"
                    name="fullName"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value.toLocaleLowerCase())}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-customColor"/>

                    <label htmlFor="jobTitle">Job Applied For</label>
                    <input type="text" 
                    name="jobTitle" 
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value.toLocaleLowerCase())}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-customColor" />

                    <label htmlFor="resume">Upload Your Resume</label>
                    <input type="file"
                    id="resume"
                    accept=".pdf" 
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-customColor"/>

                    <button type="submit">Apply</button>
                </form>
            </div>
        
        </>
    )
}

export default Apply