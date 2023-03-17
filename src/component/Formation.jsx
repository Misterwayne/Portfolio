

const formations = [
    {
        name:"Brevet des college",
        school:"College Montpezat",
        date:"De septembre 2006 à juin 2010",
        adress:"137 Rue des Déportés et de la Résistance,"
    },
    {
        name:"BAC STD2D",
        school:"Lycées Janot - Curie",
        date:"De septembre 2011 à juin 2013",
        adress:"3-5 Rue de la Compagnie Ferry, 89100 Sens, France"
    },
    {
        name:"RNCP",
        school:"Ecole 42",
        date:"Depuis octobre 2019",
        adress:"96 Boulevard Bessières"
    },
]

function Formation()
{
    return (
        <div className="container">
            <h1>Formation</h1>
            <div className="row">
            {formations.map(({name, school, date, adress}) => {
                return (
                    <div className="col" key={name.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{school}</h6>
                                <p className="card-text">{date}</p>
                                <p>{adress}</p>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Formation;