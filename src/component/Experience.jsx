import "../css/text-animation.css"

const works = [
    {
        job : "Animateur d'atelier informatique",
        date : "Novembre 2020 - Juin 2021",
        company : "Magic Maker",
        adress : "Paris",
        link : "https://www.magicmakers.fr/"
    },
    {
        job : "Serveur en restaurant",
        date : "Avril 2019 à juin 2019",
        company : "Pain Vin Fromage",
        adress : "3, Rue Geoffroy-l'Angevin - 75004 Paris",
        link : "http://painvinfromages.com/"
    },
    {
        job : "Chef de rang",
        date : "Janvier 2018 à mars 2018",
        company : "Grand Bistro De la Muette",
        adress : "10 Chaussé de la Muette 75016 - Paris",
        link : ""
    }
];




function Experience()
{
    return (
        <div className="container bg-dark p-5">
            <div class="waviy">
                <span style={{"--i":1}}>E</span>
                <span style={{"--i":2}}>X</span>
                <span style={{"--i":3}}>P</span>
                <span style={{"--i":4}}>E</span>
                <span style={{"--i":5}}>R</span>
                <span style={{"--i":6}}>I</span>
                <span style={{"--i":7}}>E</span>
                <span style={{"--i":8}}>N</span>
                <span style={{"--i":9}}>C</span>
                <span style={{"--i":10}}>E</span>
            </div>
            <div className="row">
            {works.map(({job, date, company, adress, link}) => {
                return (
                    <div className="col" key={job.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{job}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
                                <p className="card-text">{date}</p>
                                {adress ? 
                                <p>{adress}</p>
                                :
                                ""
                                }
                                <a href={link} className="card-link">{company}</a>
                            </div>
                        </div>
                    </div>
            )})}
            </div>
        </div>
    );
}

export default Experience;