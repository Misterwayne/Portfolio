import './css/App.css';
import './css/fullpage.css'
import './css/background.css'
import React from 'react';
import NavBar from "./component/NavBar"
import Contact from './component/Contacts';
import Experience from './component/Experience';
import Profile from './component/Profile';
import Competence from './component/Competence';
import Formation from './component/Formation';
import Modalexp from "./component/ModalFormExp";
import Modalform from "./component/ModalFormation";
import ModalComp from "./component/ModalCompetence";
import axios from "axios";
import { useEffect, useState } from "react";
import LoginModal from "./component/LoginModal";

function App() {

	const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        checkIfLogged();
    })

    const checkIfLogged = async () => {
        try {
            await axios.get("http://localhost:3001/welcome", { crossdomian: true})
            .then(response => {
                if (response.status === 401 ||  response.status === 400)
				{
					setIsLogged(false);
					console.log("Failed to log");
				}
				else
					setIsLogged(true);
                console.log(response.data)
            });
        }
        catch (error)
        {
            console.log("error: exp failed")
        }
    }

	return (
	<div className="App">
	  <NavBar logged={isLogged}/>
	  <div className='main'>
		<div className="section">
			<div className='background'>
			<div id="profile" className="container-fluid row" style={{height: 1000}}>
				<div className="col">
				<Profile/>
				</div>
				<div className="col-3">
				<Contact/>
				</div>
				<LoginModal/>
			</div>
			</div>
		</div>
		<div className='section'>
			<div className='background'>
		  <div id="experience" className="container-fluid p-5">
			<Competence/>
		  </div>
		  {isLogged
			?
				<div>

		  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalcomp">
  			Ajouter competence
		  </button>
		   <ModalComp/>
		   </div>:
		   <p></p>
		}
		</div>
		</div>
		<div className='section'>
		<div className='background'>
		  <div id="competence" className="container-fluid p-5">
		  <Experience/>
		  </div>
		  {isLogged
			?
				<div>
		  	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalexp">
  			Ajouter experience
		  	</button>
			<Modalexp/>
			</div>
			:
			<p></p>
		  }
		</div>
			</div>
		<div className='section'>
		<div className='background'>
		  <div id="formation" className="container-fluid p-5">
			<Formation/>
		  </div>
		  	{isLogged
			?
				<div>

			  	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalform">
  				Ajouter experience
		  		</button>
		  		<Modalform/>
				</div>
			:
			<p></p>
			}
		</div>
		</div>
	  </div>
	</div>
  );
}

export default App;
