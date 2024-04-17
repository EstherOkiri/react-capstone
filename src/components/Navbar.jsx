import { Link } from 'react-router-dom'


function Navbar(){

    return(
        <>
            <nav>
                <div> 
                    <p>Hunt logo</p>
                </div>
                <div>
                    <Link to="/Login">Log In</Link>
                    <Link to="/Jobs">Jobs</Link>
                    
                </div>
            </nav>
            
        
        </>
    )
}

export default Navbar