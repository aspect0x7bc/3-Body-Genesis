import styled from 'styled-components'
import { FaInfoCircle } from 'react-icons/fa'

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
`

export const DrandText = styled.h3`
  display: inline-block;
  position: relative;
  padding-top: 1rem;
  z-index: 10;
  color: white;
  background-color: transparent;
  word-break: break-word;
  font-family: Iceland;
  font-size: 24px;
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    margin-right: 5rem;
  }
`

export const InfoModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 50vh;
  min-width: 300px;
  background-color: white;
  opacity: 55%;
  border-radius: 5rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const InfoContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: black;
  font-family: sans-serif;
`

export const InfoIcon = styled(FaInfoCircle)`
  position: relative;
  top: 5rem;
  color: #fff;
`

export const InfoWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`