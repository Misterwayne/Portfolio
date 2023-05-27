import ProfileImg from "../images/mwane.jpg";
import "../css/fullpage.css"
import React from 'react';


function Profile()
{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="rounded-circle" src={ProfileImg} style={{width: 200}}alt="profile img" />
                </div>
                <div className="profile" style={{width: 1000, height: 550}} >
                    <div> 
                    <div className="col text-wrap">
                        <h1 className="card-title text-white">Bonjour, Je m'appelle Malick Wane</h1>
                        <p className="card-text text-white"> Je m'appelle Malick Wane, nee le 29 juin 1996 a Paris, de nationalite francaise.
                        Je suis depuis 2019 a l'ecole 42 (96 Boulevard Bessieres, 75017 PARIS) pour preparez un titre RNCP (Répertoire national de la certification professionnelle) "Expert en Architecture Informatique".
                        </p>
                        <p className="text-white">
                        Passionné par la création d'interfaces web dynamiques et interactives, je maîtrise plusieurs langages et technologies essentiels à la conception de sites web modernes. J'ai une excellente connaissance du HTML, du CSS et du JavaScript, ce qui me permet de donner vie aux idées et de créer des expériences utilisateur engageantes. J'ai également une bonne maîtrise de React, qui est un framework JavaScript très populaire pour la création d'applications web réactives.
                        </p>
                        <p className="text-white">
                        En plus de mes compétences front-end, je suis à l'aise avec les technologies back-end. J'ai une bonne connaissance de Node.js, qui me permet de créer des serveurs robustes et performants, ainsi que d'interagir avec les bases de données. De plus, je suis à l'aise avec les langages de programmation C et C++, ce qui me permet de développer des applications système et de travailler sur des projets plus complexes.
                        </p>
                        <p className="text-white">
                        Enfin, j'ai une expérience pratique avec Docker, une technologie de conteneurisation qui facilite le déploiement et la gestion d'applications. Grâce à cette compétence, je peux créer des environnements de développement cohérents et reproductibles.
                        Je suis un étudiant autonome, curieux et passionné par l'apprentissage continu. J'aime résoudre des problèmes complexes, travailler en équipe et partager mes connaissances avec les autres. Je suis également ouvert aux nouvelles idées et aux défis stimulants.
                        Si vous recherchez un stagiaire motivé et polyvalent dans le domaine du développement web, je serais ravi de contribuer à votre équipe. Je suis convaincu que mes compétences techniques et mon enthousiasme pourront apporter une réelle valeur ajoutée à votre entreprise.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;