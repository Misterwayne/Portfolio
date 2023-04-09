import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function MofalFormFormation(){
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
        axios.post('http://localhost:3001/formation', inputs, {header})
        .then()
        .catch(error => {
            console.error('There was an error in ModalFormFormation', error);
        });
        console.log(inputs.job);
    }
    
    return (
        <div class="modal fade" id="Modalform" tabindex="-1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ajouter experirence</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                    <label>Enter the name of the formation:
                    <input 
                        type="text" 
                        name="name" 
                        value={inputs.name || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <label>Enter the school:
                        <input 
                        type="text" 
                        name="school" 
                        value={inputs.school || ""} 
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
                    <label>Enter the adress:
                        <input 
                        type="text" 
                        name="adress" 
                        value={inputs.adress || ""} 
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