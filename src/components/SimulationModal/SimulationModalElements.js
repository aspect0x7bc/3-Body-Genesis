import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { GoGear } from 'react-icons/go'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: cyan;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const CloseWrapper = styled.div`
  position: absolute;
  top: 6rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SettingsIcon = styled(GoGear)`
  color: #fff;
`

export const SettingsWrapper = styled.div`
  position: absolute;
  top: 6rem;
  right: 4.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`