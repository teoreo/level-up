import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/lvluplogo-white.png';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks 
    } from './navbarElements.js'
 
const Navbar = ({ toggle }) => {
    return (
        <React.Fragment>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'><img src={logo} alt="level-up-logo"/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">Om oss</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="offer">Vårt erbjudande</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="jobs">Lediga jobb</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact">Kontakta oss</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
        </React.Fragment>
    )
}
export default Navbar;
