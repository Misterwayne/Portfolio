import "../css/text-animation.css"
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";


function Experience()
{
    const [Jobs, setData] = useState([]);

    useEffect(() => {
        if (Jobs.length === 0)
            getExp();
    })

    const getExp = async () => {
        try {
            await axios.get("http://localhost:3001/exp", { crossdomian: true})
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
        <div className="container bg-dark p-5">
            <div class="waviy">
                <span style={{"--i":1}}>E</span>
                <span style={{"--i":2}}>X</span>
                <span style={{"--i":3}}>P</span>
                <span style={{"--i":4}}>E</span>
                <span style={{"--i":5}}>R</span>
                <span style={{"--i":6}}>I</span>
                <span style={{"--i":7}}>E</span>
                <span style={{"--i":8}}>N</span>
                <span style={{"--i":9}}>C</span>
                <span style={{"--i":10}}>E</span>
            </div>
            <div className="row">
                {console.log(Jobs)}
            {Jobs.map( data => {
                return (
                    <div className="col" key={data.job}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{data.job}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.company}</h6>
                                <p className="card-text">{data.date}</p>
                                {data.adress ? 
                                <p>{data.adress}</p>
                                :
                                ""
                                }
                                <a href={data.link} className="card-link">{data.company}</a>
                            </div>
                        </div>
                    </div>
            )})}
            </div>
        </div>
    );
}

export default Experience;