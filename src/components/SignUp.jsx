import { useState } from "react"
import background from '../assets/signup-bg.jpg'

function SignUp(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender ] = useState('');
    const [password, setPassrord] = useState('');
    const [users,setUsers] = useState([]);

    const handleAddUser = (event) =>{
        event.preventDefault();
        const users = {name, email, password};
        
        fetch('http://localhost:8000/users',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(users)
        }).then(response =>{
            if(!response.ok){
                throw new Error('User Could not be added!');
            }return response.json();

        }).then(data =>{
            console.log('User added successfully!');
            window.location.href = '/';
        })

    }

    return(

        <>
            <div className="login-container" style={{backgroundImage: `url(${background})`,
                backgroundSize: 'cover', backgroundPosition: 'right'}}>
                <h1>Sign Up</h1>
                <div className="flex items-center justify-center">
                <form onSubmit={handleAddUser}action="">
                    <label htmlFor="name">Full Name : </label>
                    <input type="text" 
                    placeholder="John Doe" 
                    value={name}
                    required
                    id="name"
                    onChange={(e)=>setName(e.target.value)}/>

                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    placeholder="johndoe1122@gmail.com" 
                    value={email}
                    required
                    id="email"
                    onChange={(e)=>setEmail(e.target.value)}/> <br />

                    <label htmlFor="gender">Gender</label>
                    <input type="text" 
                    placeholder="Male/Female" 
                    value={gender}
                    required
                    id="gender"
                    onChange={(e)=>setGender(e.target.value)}/>

                    <label htmlFor="password">Password</label>
                    <input type="password"
                    value={password}
                    id="password" 
                    onChange={(e)=>setPassrord(e.target.value)}></input>
                    <button type="submit">Sign Up</button>
                </form>
                </div>
                
            </div>
        
        </>
    )
}

export default SignUp