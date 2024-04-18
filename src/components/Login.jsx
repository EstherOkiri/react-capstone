import SignUp from "./SignUp"
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import Jobs from "./Jobs";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassrord] = useState('');
    const [logStatus, setLogStatus] = useState('false');
    const [error, setError] = useState('');

    const handleSubmit=(event) =>{
        event.preventDefault();

        // console.log(email);
        // console.log(password);

        fetch('http://localhost:8000/users')
            .then(response =>{
                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then (userData => {
                const user = userData.find(user => user.email === email);
                if(!user) {
                    setError('User not found');
                    //console.log(error);
                    window.location.href = '/signup';
                    return;
                }
                if(user.password !== password){
                    setError('Incorrect password');
                    return;
                }
                setError('');
                //console.log('User logged in: ', {email});
                window.location.href = '/jobs';
            })

    }

    return(

        < >
            <div className="bg-loginbg">
            <div className="p-7" style={{backgroundImage: 'url("/assets/login-bg.jpg")'}}>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit} action="" className="flex items-center justify-center">
                    <label htmlFor="email" className="font-semibold p-2">Email :</label><br />
                    <input type="text"  
                    placeholder="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password" className="font-semibold p-2">Password</label> 
                    <input 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={(e)=>setPassrord(e.target.value)}/>
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