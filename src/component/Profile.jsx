import ProfileImg from "../images/mwane.jpg"


function Profile()
{
    return (
        <div className="container text-light">
            <div className="row align-items-start">
                <div className="col">
                    <img className="rounded" src={ProfileImg} style={{width: 200}}alt="profile img" />
                </div>
                <div className="col text-wrap">
                    <h1>Malick Wane</h1>
                    <p> Je m'appelle Malick Wane, nee le 29 juin 1996 a Paris, de nationalite francaise.</p>
                    <p>Je suis depuis 2019 a l'ecole 42 (96 Boulevard Bessieres, 75017 PARIS) pour preparez un titre RNCP (Répertoire national de la certification professionnelle) "Expert en Architecture Informatique".</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;