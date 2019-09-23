import React from 'react';
import "./styles/Home.css";
import { Link } from 'react-router-dom'
import platziConfLogo from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'
function BadgeHome()
{
    return(
        <div className="Home">
            <div className="container">
                <div class="row">
                    <div className="Home__col col-12 col-md-4">
                        <img
                            src={platziConfLogo}
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />
                        <h1>Badge Management System</h1>
                        <Link className="btn btn-primary" to="/Badges">
                            Start
                        </Link>
                    </div>

                    <div className="Home__col d-none d-md-block col-md-8">
                        <img
                            src={Astronauts}
                            alt="Astronauts"
                            className="img-fluid p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeHome;