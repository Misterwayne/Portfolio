import React from 'react';
import axios from 'axios';


function NavBar()
{
    const Logout = async() =>{
        try {
            await axios.get("http://localhost:3001/logout")
            .then(response => {
                window.location.reload(false);
                console.log(response.cookie)
            });
        }
        catch (error)
        {
            console.log("error: exp failed")
        }
    }
    return (
        <nav class="navbar sticky-top navbar-expand-sm bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#profile">Mwane</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#experience">Competence</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#competence">Experience</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#formation">Formation</a>
                    </li>
                    <li className='nav-item ml-auto'>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;