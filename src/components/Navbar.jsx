import { Link } from 'react-router-dom'


function Navbar(){

    return(
        <>
            <nav className='nav-bar'>
                <div> 
                    <p>Hunt logo</p>
                </div>
                <div>
                    <Link to="/">Log In</Link>
                    <Link to="/Jobs">Jobs</Link>
                    
                </div>
            </nav>
            
        
        </>
    )
}

export default Navbar