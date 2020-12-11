import React, {useState} from "react";
import './header.scss'
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { HeroSection } from "../heroSection";


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
            <HeroSection></HeroSection>
        </div>
        </React.Fragment>
    )
}