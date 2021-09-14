import React from 'react'
import ConnectButton from '../ConnectButton'
import {
  SideContainer,
  Icon,
  CloseIcon,
  SideWrapper,
  SideMenu,
  SideLink,
  SideBtn,
}
from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideWrapper>
        <SideMenu>
          <SideLink to="tokens" onClick={toggle}>
            Tokens
          </SideLink>
          <SideLink to="mint" onClick={toggle}>
            Mint
          </SideLink>
          <SideLink to="about" onClick={toggle}>
            About
          </SideLink>
        </SideMenu>
        <SideBtn>
          <ConnectButton />
        </SideBtn>
      </SideWrapper>
    </SideContainer>
  )
}

export default Sidebar
