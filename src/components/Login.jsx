import SignUp from "./SignUp"

function Login(){

    return(

        <>
            <form action="">
                <label htmlFor="">username</label>
                <input type="text"  placeholder="email"/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
            </form>
            <h4>Don't Have An Account?</h4>
            <button><a href="/SignUp.jsx"></a>Sign Up</button>
        
        </>
    )
}

export default Login