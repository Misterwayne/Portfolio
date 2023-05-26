import React from 'react';
import "../css/button-animation.css"
import "../css/text-animation.css"
import Tabs from "./TabsComp";


function Competence()
{

    return (
        <div className="profile">
            <div class="waviy">
                <span style={{"--i":1}}>C</span>
                <span style={{"--i":2}}>O</span>
                <span style={{"--i":3}}>M</span>
                <span style={{"--i":4}}>P</span>
                <span style={{"--i":5}}>E</span>
                <span style={{"--i":6}}>T</span>
                <span style={{"--i":7}}>E</span>
                <span style={{"--i":8}}>N</span>
                <span style={{"--i":9}}>C</span>
                <span style={{"--i":10}}>E</span>
            </div>
            <Tabs/>
        </div>
    );
};

export default Competence;