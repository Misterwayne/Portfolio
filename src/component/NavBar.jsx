

function NavBar()
{
    return (
        <nav class="navbar sticky-top navbar-expand-sm bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mwane</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#competence">Competence</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#experience">Projet</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#profile">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;