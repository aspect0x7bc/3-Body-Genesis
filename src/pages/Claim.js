import React, { useState } from 'react'
import SimulationModal from '../components/SimulationModal'
import TokenCards from '../components/TokenCards'

const Claim = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [solution, setSolution] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <SimulationModal isOpen={isOpen} toggle={toggle} solution={solution} />
      <TokenCards setSolution={setSolution} toggle={toggle} />
    </>
  )
}

export default Claim