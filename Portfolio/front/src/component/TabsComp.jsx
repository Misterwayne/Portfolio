import React from 'react';
import C_Icon from "../images/C-icon.webp"
import Cpp_Icon from "../images/CPP-icon.webp"
import DockerIcon from "../images/Docker-Symbol.webp"
import ReactIcon from "../images/react-logo.webp"
import HtmlIcon from "../images/html-icon.webp"
import axios from "axios";
import "../css/tabs.css"
import "../css/modal.css"
import { useEffect, useState } from "react";

export default function Tabs() {
    const [ToggleState, setToggleState] = useState(1);
    const [Comp, setData] = useState([]);
    const [show, setShow] = useState(false);

    const web = Comp.filter((elem) => elem.type === "Web");
    const algo = Comp.filter((elem) => elem.type === "Algorithme");
    const devops = Comp.filter((elem) => elem.type === "Devops");

    const array = [web, algo, devops];


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
            console.log("error: comp failed");
        }
    }


    const Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? 'modal display-block' : 'modal display-none'
      
        return (
          <div className={showHideClassName}>
            <section className='modal-main'>
              {children}
              <button
                onClick={() => handleClose()}
              >
                Close
              </button>
            </section>
          </div>
        );
    };

    const showModal = () => {
        setShow(!show);
    }

    const hideModal = () => {
        setShow(false);
    }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className='container-tabs'>
        <ul className="tab-list">
            <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
            >
                Web
            </li>
            <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
            >
                Algo
            </li>
            <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
            >
                DevOps
            </li>
        </ul>
        <div className="">
            <div className="active-content">
                {array[ToggleState - 1].map(({name, description, type, language, link}) => {
                return (
                    <div className="p-2" onClick={() => showModal()}>
                        <div className="card" style={{overflow: "hidden", height: 250, width: 250}}>
                            <Modal show={show} handleClose={() => hideModal()} >
                                <p>{name}</p>
                                <p>{description}</p>
                            </Modal>
                            {{
                            'C': <img className="card-img-top" style={{height:100, width:100}} src={C_Icon} alt="language icon" />,
                            'CPP': <img className="card-img-top" src={Cpp_Icon} style={{height:100, width:100}} alt="language icon" />,
                            'Docker': <img className="card-img-top" src={DockerIcon} style={{height:100, width:100}} alt="language icon" />,
                            'React/JS': <img className="card-img-top" src={ReactIcon} style={{height:100, width:100}} alt="language icon" />,
                            'HTML/CSS': <img className="card-img-top" src={HtmlIcon} style={{height:100, width:100}} alt="language icon" />
                            }[language]
                            }
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{language}</h6>
                                <a href={link} className="pulse">github</a>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    </div>
  );
};

  