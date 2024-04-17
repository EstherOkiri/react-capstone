import { Link } from 'react-router-dom'


function Navbar(){

    return(
        <>
            <nav className="flex">
                <div className="flex-1"> 
                    <p>Hunt logo</p>
                </div>
                <div className="flex-1">
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/Employers">Employers</Link>
                </div>
            </nav>
            
        
        </>
    )
}

export default Navbar