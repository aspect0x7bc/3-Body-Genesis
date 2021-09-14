import React, { useEffect, useState } from 'react'
import World from '../world/World'
import SettingsModal from '../SettingsModal'
import {
  ModalContainer,
  CloseIcon,
  SettingsIcon,
  CloseWrapper,
  SettingsWrapper
} from './SimulationModalElements'

let container
let world

const SimulationModal = ({ toggle, isOpen, solution }) => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    era: 'genesis',
    background: 'space',
    colors: ['#ffffff', '#ff0000', '#0000ff'],
    paths: true,
    //playback, follow, 
  })

  const toggleSettings = () => setSettingsIsOpen(!settingsIsOpen)

  useEffect(() => {
      container = document.querySelector('#scene-container')
      world = new World(container)
  }, [])
  useEffect(() => {
    if (solution) {
      world.setScene(solution, settings)
      world.start()
    }
  }, [solution, settings])

  return (
    <ModalContainer isOpen={isOpen} id='scene-container'>
      <CloseWrapper onClick={toggle}>
        <CloseIcon />
      </CloseWrapper>
      <SettingsModal isOpen={settingsIsOpen} toggle={toggleSettings} initSettings={settings} updateSettings={setSettings}/>
      <SettingsWrapper onClick={toggleSettings}>
        <SettingsIcon />
      </SettingsWrapper>
    </ModalContainer>
  )
}

export default SimulationModal
