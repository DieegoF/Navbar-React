import React, {useState} from "react";
import { 
    Container, 
    LogoContainer,
    Wrapper,
    Menu,
    MenuItemLink,
    MenuItem, 
    MobileIcon} 
    from "./navbar.elements";

    import { BiShoppingBag } from "react-icons/bi";
    import { FaBars } from "react-icons/fa";

import { IconContext } from "react-icons";
    

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                    <IconContext.Provider value={{style: {fontSize: "2em"} }}>

                   
                <LogoContainer>
                    <BiShoppingBag>
                  
                    </BiShoppingBag>
                </LogoContainer>

                <MobileIcon onClick = {() => setShowMobileMenu(!showMobileMenu)} >
                    <FaBars />
                </MobileIcon>
                <Menu open ={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>HOME</MenuItemLink>
                    </MenuItem>
                </Menu> 
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
}
export default Navbar;