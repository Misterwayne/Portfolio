import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Formation()
{
    const [Form, setData] = useState([]);

    useEffect(() => {
        if (Form.length === 0)
            getExp();
    })

    const getExp = async () => {
        try {
            await axios.get("http://localhost:3001/formation")
            .then(response => {
                setData(response.data);
                console.log(response.data)
            });
        }
        catch (error)
        {
            console.log("error: exp failed")
        }
    }
    return (
        <div className="container">
             <div class="waviy">
                <span style={{"--i":1}}>F</span>
                <span style={{"--i":2}}>O</span>
                <span style={{"--i":3}}>R</span>
                <span style={{"--i":4}}>M</span>
                <span style={{"--i":5}}>A</span>
                <span style={{"--i":6}}>T</span>
                <span style={{"--i":7}}>I</span>
                <span style={{"--i":8}}>O</span>
                <span style={{"--i":9}}>N</span>
            </div>
            <div className="row">
            {Form.map(({name, school, date, adress}) => {
                return (
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{school}</h6>
                                <p className="card-text">{date}</p>
                                <p>{adress}</p>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Formation;