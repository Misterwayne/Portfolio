import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function MofalFormExp(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        const header = {
            "Content-Type": "application/json",
        }

        event.preventDefault();
        axios.post('http://localhost:3001/compt', inputs, {header})
        .then()
        .catch(error => {
            console.error('There was an error!', error);
        });
        console.log(inputs.job);
    }
    
    return (
        <div class="modal fade" id="Modalexp" tabindex="-1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ajouter experirence</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                    <label>Enter your job:
                    <input 
                        type="text" 
                        name="job" 
                        value={inputs.job || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <label>Enter the date:
                        <input 
                        type="text" 
                        name="date" 
                        value={inputs.date || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <label>Enter your company:
                        <input 
                        type="text" 
                        name="company" 
                        value={inputs.company || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <label>Enter the adress:
                        <input 
                        type="text" 
                        name="adress" 
                        value={inputs.adress || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <label>Enter the website link:
                        <input 
                        type="text" 
                        name="link" 
                        value={inputs.link || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}