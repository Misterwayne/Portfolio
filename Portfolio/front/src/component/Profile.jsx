import ProfileImg from "../images/mwane.jpg";
import React from 'react';


function Profile()
{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="rounded-circle" src={ProfileImg} style={{width: 200}}alt="profile img" />
                </div>
                <div className="card " style={{width: 500, height: 250, objectFit: "fill", overflow: "hidden"}}>
                    <div className="card-body">
                    <div className="col text-wrap">
                        <h1 className="card-title">Hi, my name is Malick Wane</h1>
                        <p className="card-text"> Je m'appelle Malick Wane, nee le 29 juin 1996 a Paris, de nationalite francaise.
                        Je suis depuis 2019 a l'ecole 42 (96 Boulevard Bessieres, 75017 PARIS) pour preparez un titre RNCP (Répertoire national de la certification professionnelle) "Expert en Architecture Informatique".</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;