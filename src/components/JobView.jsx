import Apply from "./JobApplication"

function JobView(){

    return(

        <>
            <div>
                <div>
                    <h1>Job Title</h1>
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
            <button>Apply</button>
        
        </>
    )
}

export default JobView