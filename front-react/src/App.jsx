import logo from './logo.svg';
import './css/App.css';
import NavBar from "./component/NavBar"
import Contact from './component/Contacts';
import Experience from './component/Experience';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container-fluid row w-100">
          <div className="col-7">
            <Profile/>
          </div>
          <div className="col-3">
            <Contact/>
          </div>
        </div>
    <div className="container-fluid p-5">
      <Experience/>
    </div>
    </div>
  );
}

export default App;
