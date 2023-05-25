import './css/App.css';
import './css/fullpage.css'
import Arrow from "./images/right-arrow.png"
import React from 'react';
import NavBar from "./component/NavBar"
import Contact from './component/Contacts';
import Experience from './component/Experience';
import Profile from './component/Profile';
import Competence from './component/Competence';
import Formation from './component/Formation';
import {useState } from "react";
import Particles from 'react-particles';
import { loadFull } from "tsparticles"; 
import particlesOption from './particle-conf';

function App() {

	const [index, setIndex] = useState(0);

	const page = [<Profile/>, <Competence/>, <Experience/>, <Formation/>, <Contact/>]



	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	

	return (
	<div className="App">
		<div className="App" style={{ position: "relative", overflow: "hidden" }}>
			<div style={{ position: "absolute" }}>
				<Particles
				id="tsparticles"
				init={particlesInit}
				params={particlesOption}
				/>
			</div>
		</div>
	    <NavBar/>
	    <div style={{height: "1000px", display: 'flex'}} className="justify-content-between">
			<div className="d-flex align-items-center justify-content-center p-2">
				{index >= 1 ?
				<img style={{height: 100}} className='arrow-left' src={Arrow} onClick={() => setIndex(index - 1)}/>
				:
				<p></p>
				}
			</div>
			<div className="d-flex align-items-center justify-content-center">
				{page[index]}
			</div>
			<div className="d-flex align-items-center justify-content-center p-2">
				{index <= 3 ?
				<img style={{height: 100}} src={Arrow} onClick={() => setIndex(index + 1)}/>
				:
				<p></p>
				}
			</div>
	  </div>
	</div>
  );
}

export default App;
