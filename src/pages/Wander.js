import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WanderModal from '../components/WanderModal'
import { DrandText } from '../components/WanderModal/WanderModalElements'

const Wander = () => {
  const [solution, setSolution] = useState(null)
  const [drand, setDrand] = useState(null)

  useEffect(() => {
    const fetchDrand = () => {
      axios
        .get('https://drand.cloudflare.com/public/latest')
        .then(res => setDrand(res.data.randomness))
        .catch(e => console.error(e))
      
      setTimeout(fetchDrand, 30000)
    }
    fetchDrand()
  },[])

  useEffect(() => {
    if (drand) {
      console.log('drand', drand)
      axios
        .post(
          'http://localhost:8000/api/solve/wander',
          {
            'drand': drand,
          })
        .then(res => setSolution(res.data))
        .catch(e => console.error(e))
    }
  },[drand])

  return (
    <>
      <DrandText>{drand}</DrandText>
      <WanderModal solution={solution} />
    </>
  )
}

export default Wander