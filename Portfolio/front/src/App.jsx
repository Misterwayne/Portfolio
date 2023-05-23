import './css/App.css';
import './css/fullpage.css'
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
	  <NavBar/>
	  <div className='main'>
		<div className="section">
			<div className="container-fluid row" style={{height: 1000}}>
				<div className="col">
				{page[index]}
				</div>
			</div>
		</div>
		<div>
		{index <= 3 ?
			<button onClick={() => setIndex(index + 1)}>+</button>
			:
			<p></p>
			}
		</div>
		<div>
			{index >= 1 ?
			<button onClick={() => setIndex(index - 1)}>-</button>
			:
			<p></p>
			}
		</div>
		<div className="App" style={{ position: "relative", overflow: "hidden" }}>
			<div style={{ position: "absolute" }}>
				<Particles
				id="tsparticles"
				init={particlesInit}
				params={particlesOption}
				/>
			</div>
		</div>
	  </div>
	</div>
  );
}

export default App;
