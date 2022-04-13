import React, { useState, useEffect } from 'react'
import World from '../world/World'
import {
  ModalContainer,
  InfoIcon,
  InfoWrapper,
  InfoModal,
  InfoContent,
} from './WanderModalElements'

let container
let world

const WanderModal = ({ solution }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
      container = document.querySelector('#scene-container')
      world = new World(container)
  }, [])
  useEffect(() => {
    if (solution) {
      console.log('solution', solution)
      world.setScene(solution, {})
      world.start()
    }
  },[solution])

  return (
    <ModalContainer id='scene-container'>
      <InfoModal isOpen={isOpen} >
        <InfoContent>
          <h1>This pulls the current random hash from drand.love to demonstrate possible 3-body systems</h1>
        </InfoContent>
      </InfoModal>
      <InfoWrapper onClick={toggle}>
        <InfoIcon />
      </InfoWrapper>
    </ModalContainer>
  )
}

export default WanderModal
