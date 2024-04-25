import { Link } from 'react-router-dom'


function Navbar({isLoggedIn}){

    return(
        <>
            <nav className='flex items-center justify-between bg-customColor p-7'>
                <div> 
                    <p>Hunt logo</p>
                </div>
                <div className='flex items-center '>
                    <Link to="/" className='mr-3'>Log In</Link>
                    <Link to="/JobView">View Jobs</Link>
                    
                </div>
            </nav>
            
        
        </>
    )
}

export default Navbar