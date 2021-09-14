import React from 'react';
import { 
  Nav,
  NavbarContainer,
  NavLink,
  LogoLink,
  Logo,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';
import ConnectButton from '../ConnectButton';
import logo from '../../images/three.svg';

const Navbar = ({ toggle }) => {
  
  // would like to set transpart when a system is rendered
  const isTransparent = false;

  return (
    <>
      <Nav isTransparent={isTransparent}>
        <NavbarContainer>
          <LogoLink exact to="/">
            <Logo src={logo}/>
          </LogoLink>
          <Bars onClick={toggle}/>
          <NavMenu>
            <NavLink exact to="tokens" >
              Tokens
            </NavLink>
            <NavLink exact to="mint" >
              Mint
            </NavLink>
            <NavLink exact to="about" >
              About
            </NavLink>
          </NavMenu>
          <NavBtn>
            <ConnectButton />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar