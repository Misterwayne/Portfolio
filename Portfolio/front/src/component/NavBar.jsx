import React from 'react';


function NavBar()
{
    const getCV = async () => {
        try {
            fetch('CV2023.pdf').then(response => {
                response.blob().then(blob => {

                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'CV_Malick_Wane.pdf';
                    alink.click();
                })
            });
        }
        catch (error)
        {
            console.log("error: comp failed");
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
                    <a class="nav-link" href="https://github.com/Misterwayne">Github</a>
                    </li>
                    <li class="nav-item">
                    <div class="nav-link" onClick={() => {getCV()}}>CV</div>
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