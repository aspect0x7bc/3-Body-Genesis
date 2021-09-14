import styled from 'styled-components'

export const SettingsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 50vh;
  min-width: 300px;
  background-color: black;
  border: medium solid white;
  border-radius: 5rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const SettingsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: white;
`