import React from 'react'

import eqNewton from '../images/eq_newton.png'
import eqScore from '../images/eq_score.png'

import GithubLogo from '../images/github.png'
import TwitterLogo from '../images/twitter.png'
import DiscordLogo from '../images/discord.png'

const About = () => {
  return (
    <div>
      <h1 className="title">About</h1>
      <p>In this NFT experiment the tokens (which are just hashes) derive their value from the code/math performed on them.</p>
      <p>Ideally since math is universal any code following the same equations on the same tokens will yeild the same results.</p>
      <p>In this Genesis Era there is a single metric by which these tokens are "scored".</p>
      <p>Based off of this scoring they are ranked on the leaderboard.</p>
      <hr/>
      <h2>Let's walk through an example to see how this works</h2>
      <p>When a token is minted you choose it's name.</p>
      <p>This name is then hashed and stored on chain as a NotRandom token.</p>
      <p>To convert this hash into a 3-body system we move off chain and generate some initial values (IVs) from the hash.</p>
      <p>These IVs are the position and velocity vectors (xyz) of each of the three bodies. <a href="www.github.com">code</a></p>
      <p>Using these initial conditions and Newton's Law of Gravitation we solve the IVP for time.</p>
      <img src={eqNewton} alt="F = G * m1 * m2 / r^2"/>
      <p>Here this gives us ~1000 points between t = 0 and t = 5 which can then be plotted in 3D space.</p>
      <p>Finally a score is calculated using the equation below.</p>
      <p>Essentially the closer bodies stay to the center of mass the lower score it gets. The lowest score is ranked the highest.</p>
      <img src={eqScore} alt="LaTeX notation: $\textcolor{white}{\frac{1}{n}\sum_{t=0}^{n} \frac{\hat{r}_{1_{t}} \hat{r}_{2_{t}} \hat{r}_{3_{t}}}{3}}$" />
      <p>Where r hat is the normal of the position vector of a body at each time step t, and n is the total number of time steps.</p>
      <hr/>
      <p>Links to code and socials</p>
      <footer className="Footer">
        <a href="https://github.com/"><img src={GithubLogo} alt="Github Logo" target="_blank"></img></a>
        <a href="https://twitter.com/ThreeBodyNFT"><img src={TwitterLogo} alt="Twitter Logo" target="_blank"></img></a>
        <a href="https://discord.gg/u3duf2AG"><img src={DiscordLogo} alt="Discord Logo" target="_blank"></img></a>
      </footer>
    </div>
  )
}

export default About