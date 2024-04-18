import SignUp from "./SignUp"

function Login(){

    return(

        < >
            
            <div className="bg-cover bg-center bg-no-repeat p-7" style={{backgroundImage: 'url("/assets/login-bg.jpg")'}}>
                <h1>Log In</h1>
                <form action="" className="flex items-center justify-center">
                    <label htmlFor="">Email</label><br />
                    <input type="text"  placeholder="email"/><br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" placeholder="password" /><br />
                </form>
            </div>
            <div>
            <h4>Don't Have An Account?</h4>
                <button><a href="/SignUp.jsx"></a>Sign Up</button>
            </div>
            
        
        </>
    )
}

export default Login