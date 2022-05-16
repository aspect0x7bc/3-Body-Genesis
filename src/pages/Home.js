import React from 'react';

//import { useCurrentBlock } from '../containers/ConnectionProvider/hooks';

import GithubLogo from '../images/github.png'

const Home = () => {

  // const currentBlock = useCurrentBlock();

  // const estimateTime = () => {

  //   const blocksLeft = 33333333 - currentBlock;
  //   const aproxSecondsLeft = 13 * blocksLeft;
  //   const aproxDaysLeft = Math.floor(aproxSecondsLeft / 86400);
  //   const modAproxHours = Math.floor((aproxSecondsLeft % 86400) / 3600);
  //   const modAproxMins = Math.floor(((aproxSecondsLeft % 86400) % 3600) / 60);

  //   return '~' + aproxDaysLeft + ' days ' + modAproxHours + ' hours ' + modAproxMins + ' minutes';
  // }

  return (
    <div>
      <h1 className="title">3-Body NFT</h1>
      <h2>Your gateway into the countably infinite universe of imperfect newtonian physics</h2>
      <h1>Current Era: Genesis</h1>
      <p>In this very first era of 3-body you can mint unlimited tokens from the <a href= "https://arbiscan.io/token/0x945b6ae5ec8324b1cc941c41e300cec60102e4b5">NotRandom</a> contract for the price of gas. You'll be able to see how "stable" the system is on the Leaderboard.</p>
      <hr />

      <h1>Future Eras</h1>
      <p>I have tons of ideas for future eras to imporove the mechanics, aesthetics and functionality of 3-body.</p>
      <p>First I would like to add a planet to the three stars to better illistrate the plight of Trisolaris.</p>
      <p>I'd also like to add a mechanisum to extend the time of each token's simulation. As well as create rewards for periods of time where the planet is in a stable orbit.</p>
      <hr/>
      <p>If you'd like to read more of my thoughts on this project check out the github.</p>
      <footer className="Footer">
        <a href="https://github.com/aspect0x7bc/3-Body-Genesis"><img src={GithubLogo} alt="Github Logo" target="_blank"></img></a>
      </footer>
    </div>
  )
}

export default Home