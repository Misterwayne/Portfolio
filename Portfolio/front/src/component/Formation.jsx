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
            <h1>Formation</h1>
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