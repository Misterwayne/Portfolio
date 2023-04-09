import HtmlIcon from "../images/html-icon.webp"
import React from 'react';
import C_Icon from "../images/C-icon.webp"
import Cpp_Icon from "../images/CPP-icon.webp"
import DockerIcon from "../images/Docker-Symbol.webp"
import ReactIcon from "../images/react-logo.webp"
import "../css/button-animation.css"
import axios from "axios";
import { useEffect, useState } from "react";


function Competence()
{
    const [Comp, setData] = useState([]);

    useEffect(() => {
        if (Comp.length === 0)
            getExp();
    })

    const getExp = async () => {
        try {
            await axios.get("http://localhost:3001/compt")
            .then(response => {
                setData(response.data);
                console.log(response.data)
            });
        }
        catch (error)
        {
            console.log("error: exp failed");
        }
    }
    return (
        <div className="container">
            <h1>Competence</h1>
            <div className="row">
            {Comp.map(({name, description, type, language, link}) => {
                return (
                    <div className="col" >
                        <div className="card">
                            {{
                            'C': <img className="card-img-top" src={C_Icon} alt="language icon" />,
                            'CPP': <img className="card-img-top" src={Cpp_Icon} alt="language icon" />,
                            'Docker': <img className="card-img-top" src={DockerIcon} alt="language icon" />,
                            'React/JS': <img className="card-img-top" src={ReactIcon} alt="language icon" />,
                            'HTML/CSS': <img className="card-img-top" src={HtmlIcon} alt="language icon" />
                            }[language]
                            }
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{language}</h6>
                                <p className="card-text">{description}</p>
                                <p>{type}</p>
                                <a href={link} className="pulse">github</a>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Competence;