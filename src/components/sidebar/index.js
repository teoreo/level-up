import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';

export const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Om oss</SidebarLink>
                    <SidebarLink to="offer" onClick={toggle}>Vårt erbjudande</SidebarLink>
                    <SidebarLink to="jobs" onClick={toggle}>Lediga jobb</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Kontakta oss</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;