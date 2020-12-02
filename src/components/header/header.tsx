import React from "react";
import './header.scss'
import logo from '../../assets/lvluplogo-white.png';

export default function Header(){
    
    return(
        <React.Fragment>
        <div className="Header">
            <img src={logo} alt="level-up-logo"/>
            <div className="containerH1">
                <h1>Din <h1 className="orangeTxt">konsult- och rekryteringspartner</h1> där ingen utmaning är för stor</h1>
            </div>
        </div>
        </React.Fragment>
    )
}