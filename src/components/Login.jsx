import SignUp from "./SignUp"
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import { Link } from "react-router-dom";
import background from '../assets/login-bg.jpg'


function Login({}){
    const [email, setEmail] = useState('');
    const [password, setPassrord] = useState('');
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
                    alert('User not found!')
                    //console.log(error);
                    window.location.href = '/signup';
                    return;
                }
                if(user.password !== password){
                    setError('Incorrect password');
                    alert('Incorrect Password')
                    return;
                }
                setError('');
                //console.log('User logged in: ', {email});
                window.location.href = '/jobView';
                
            })

    }

    return(

        < >
            <div className="login-container" style={{backgroundImage: `url(${background})`,
                backgroundSize: 'cover', backgroundPosition: 'right'}}>
            <div className="p-7" >
                
                <h1 className="text-white">Log In</h1>
                <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} action="" >
                    <label htmlFor="email" className="font-semibold p-2">Email :</label>
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
            </div>
            <div className="p-7 flex items-center justify-center">
                <h4 className="text-white">Don't Have An Account?</h4>
                <button ><Link to="/SignUp">Sign Up</Link></button>
            </div>
            </div>
            
            
            
        
        </>
    )
}

export default Login