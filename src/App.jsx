import logo from './logo.svg';
import './css/App.css';
import './css/fullpage.css'
import './css/background.css'
import NavBar from "./component/NavBar"
import Contact from './component/Contacts';
import Experience from './component/Experience';
import Profile from './component/Profile';
import Competence from './component/Competence';
import Formation from './component/Formation';

function App() {
  return (
	<div className="App">
	  <NavBar/>
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
			</div>
			</div>
		</div>
		<div className='section'>
			<div className='background'>
		  <div id="experience" className="container-fluid p-5">
			<Competence/>
		  </div>
		</div>
		</div>
		<div className='section'>
		<div className='background'>
		  <div id="competence" className="container-fluid p-5">
		  <Experience/>
		  </div>
		</div>
			</div>
		<div className='section'>
		<div className='background'>
		  <div id="formation" className="container-fluid p-5">
			<Formation/>
		  </div>
		</div>
		</div>
	  </div>
	</div>
  );
}

export default App;
