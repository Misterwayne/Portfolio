import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function RegisterModal(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs.username)
        console.log(inputs.password)
        console.log(inputs.email)
    }

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        console.log("REGISTER CALL");
        const header = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        }
        console.log(inputs)
        event.preventDefault();
        axios.post('http://localhost:3001/register', inputs, {header}, {withCredentials: true})
        .then(console.log("It worked"))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    
    return (
        <div class="modal fade" id="Modalregister" tabindex="1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                    <label>Email:
                        <input 
                        type="text" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <label>Username:
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <label>Password:
                        <input 
                        type="text" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}