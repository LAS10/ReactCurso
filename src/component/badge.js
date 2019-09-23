import React from 'react';
import FotoPerfil from '../images/FB_IMG_1540859353162.jpg'
import Header from '../images/badge-header.svg';
import "../component/styles/Badge.css";
import ReactIcon from "../images/iconfinder_React.js_logo_1174949.svg"
import Gravatar from './Gravatar';
class badge extends React.Component
{
    render()
    {
        return (
        <div className="Badge">
            <div className="Badge__header">
                <h1 className="h1_ReactDeveloper">React Developers</h1>
                <img src={ReactIcon} alt="Header"/>
            </div>

            <div className="Badge__section-name">
                <Gravatar className="Badge__avatar" email={this.props.email}/>
                <h1>{this.props.Name} <br/>{this.props.LastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h1>{this.props.Job}</h1>
                <div>
                    <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    {this.props.FB}
                </div>
            </div>

            <div className="Badge__footer">
                #Facebook_ReactJS
            </div>
        </div>
        )
    }
}

export default badge;
