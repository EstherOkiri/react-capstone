import SignUp from "./SignUp"


function Login(){

    return(

        < >
            <div className="bg-loginbg">
            <div className="p-7" style={{backgroundImage: 'url("/assets/login-bg.jpg")'}}>
                <h1>Log In</h1>
                <form action="" className="flex items-center justify-center">
                    <label htmlFor="email" className="font-semibold p-2">Email :</label><br />
                    <input type="text"  placeholder="email" name="email" id="email"/><br />
                    <label htmlFor="password" className="font-semibold p-2">Password</label> 
                    <input type="password" placeholder="password" name="password" id="password" />
                    <button type="submit" className="font-semibold p-2">Log In</button>
                </form>
            </div>
            <div className="p-7 flex items-center justify-center">
                <h4>Don't Have An Account?</h4>
                <button ><a href="/SignUp.jsx"></a>Sign Up</button>
            </div>
            </div>
            
            
            
        
        </>
    )
}

export default Login