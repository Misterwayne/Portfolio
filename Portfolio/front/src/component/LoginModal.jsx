import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function LoginModal(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        const header = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        }

        event.preventDefault();
        axios.post('http://localhost:3001/login', inputs, {header}, {withCredentials: true})
        .then(window.location.reload(false))
        .catch(error => {
            console.error('There was an error!', error);
        });
        console.log(inputs.username);
        console.log(inputs.password);
    }
    
    return (
        <div class="modal fade" id="Modallogin" tabindex="1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ajouter experirence</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit}>
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