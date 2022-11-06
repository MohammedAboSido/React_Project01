import React from "react";
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, ALink } from './style.js';
const Navbar = () => {
    return (
        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem > <ALink to="/"> Home</ALink> </ListItem>
                    <ListItem ><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem ><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem ><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem ><Anchor href="#">About</Anchor></ListItem>
                    <ListItem ><ALink to="/contact">Contact</ALink></ListItem>
                </UlList>

            </div>
        </NavbarSection>
    );
};

export default Navbar;
