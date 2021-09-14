import React, { useState } from 'react'
import {
  SettingsContainer,
  SettingsWrapper,
} from './SettingsModalElements'

const SettingsModal = ({ isOpen, toggle, initSettings, updateSettings }) => {

  const [showPaths, setShowPaths] = useState(initSettings.paths)
  const [background, setBackground] = useState(initSettings.background)
  const [color0, setColor0] = useState(initSettings.colors[0])
  const [color1, setColor1] = useState(initSettings.colors[1])
  const [color2, setColor2] = useState(initSettings.colors[2])

  const onSubmit = (e) => {
    e.preventDefault()
    updateSettings({
      era: initSettings.era,
      background: background,
      colors: [color0, color1, color2],
      paths: showPaths,
    })
    toggle()
  }

  return (
    <SettingsContainer isOpen={isOpen}>
      <SettingsWrapper>
        <form onSubmit={onSubmit}>
          <label>
            Show paths
            <input
              name="paths"
              type="checkbox"
              checked={showPaths}
              onChange={e => setShowPaths(e.target.checked)} />
          </label>
          <br />
          <label>
            Colors
            <input
              name="color0"
              type="color"
              value={color0}
              onChange={e => setColor0(e.target.value)} />
            <input
              name="color1"
              type="color"
              value={color1}
              onChange={e => setColor1(e.target.value)} />
            <input
              name="color2"
              type="color"
              value={color2}
              onChange={e => setColor2(e.target.value)} />
          </label>
          <br />
          <label>
            Background
            <select
              value={background}
              onChange={e => setBackground(e.target.value)}>
                <option value="black">Black</option>
                <option value="space">Space</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </SettingsWrapper>
    </SettingsContainer>
  )
}

export default SettingsModal
