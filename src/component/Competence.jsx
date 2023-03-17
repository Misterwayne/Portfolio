import HtmlIcon from "../images/html-icon.webp"
import C_Icon from "../images/C-icon.webp"
import Cpp_Icon from "../images/CPP-icon.webp"
import DockerIcon from "../images/Docker-Symbol.webp"
import ReactIcon from "../images/react-logo.webp"
import "../css/button-animation.css"



const projet = [
    {
        name:"Web_server",
        description:"Serveur Web en CPP",
        type:"Web",
        language:"CPP",
        img_language: Cpp_Icon,
        subjet:"",
        link:"https://github.com/Misterwayne/Web_server"
    },
    {
        name: "Philosophers",
        description: "Programme de syncronisation de thread",
        type:"Algorithme",
        language: "C",
        img_language: C_Icon,
        subjet:"",
        link:"https://github.com/Misterwayne/Philosophers"
    },
    {
        name: "Cub3d",
        description: "Labyrinthe 3d utilisant le raycasting",
        type: "Grapique",
        language: "C",
        img_language: C_Icon,
        subjet:"",
        link:"https://github.com/Misterwayne/cub3D"
    },
    {
        name: "Inception",
        description: "Deploie un serveur Nginx, une base de donner mariadb et un site wordpress via Docker-compose",
        type: "Dev ops",
        language: "Docker/bash",
        img_language: DockerIcon,
        subjet:"",
        link:"https://github.com/Misterwayne/Inception"
    },
    {
        name:"Transcendance",
        description:"Un Pong en Jeux pong en ligne. React/js pour le front, nest/js pour le back endligne",
        type: "full-stack",
        language: "React/JS",
        img_language: ReactIcon,
        subjet:"",
        link:"https://github.com/JCluzet/ePong"
    }
]



function Competence()
{
    return (
        <div className="container">
            <h1>Competence</h1>
            <div className="row">
            {projet.map(({name, description, type, language, img_language, subjet, link}) => {
                return (
                    <div className="col" key={name.id}>
                        <div className="card">
                            <img className="card-img-top" src={img_language} alt="language icon" />
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