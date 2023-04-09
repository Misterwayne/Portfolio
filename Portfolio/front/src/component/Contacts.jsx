import PhoneIcon from "../images/phone-icon.webp"
import React from 'react';
import GitIcon from "../images/github-icon.webp"
import MailIcon from "../images/mail-icon.webp"
import LinkIcon from "../images/linkedin-icon-logo.webp"

function Contact()
{
    return(
        <div className="container-fluid">
            <div className="border border-dark border-3 rounded">
                <ul className="list-group">
                    <div className="list-group-item">
                        <div className="row align-items-start">
                            <div className="col-2">
                                <img style={{width: 20}} src={PhoneIcon} alt="numero de telephone" />
                            </div>
                            <div className="col-7">
                                0784082133
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-start">
                            <div className="col-2">
                                <img style={{width: 20}} src={MailIcon} alt="numero de telephone" />
                            </div>
                            <div className="col-7">
                                baidyfall@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-start">
                            <div className="col-2">
                                <img style={{width: 20}} src={GitIcon} alt="numero de telephone" />
                            </div>
                            <div className="col-7">
                                <a href="https://github.com/Misterwayne">
                                    Misterwayne
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-start">
                            <div className="col-2">
                                <img style={{width: 20}} src={LinkIcon} alt="numero de telephone" />
                            </div>
                            <div className="col-7">
                                link
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
    </div>
    )
}

export default Contact;