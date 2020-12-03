import React, {useState} from "react";
import './header.scss'
import Sidebar from "../sidebar";
import Navbar from "../navbar";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <React.Fragment>
        <div className="Header">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            
            <div className="containerH1">
                <h1>Din <h1 className="orangeTxt">konsult- och rekryteringspartner</h1> där ingen utmaning är för stor</h1>
                
            </div>
        </div>
        </React.Fragment>
    )
}