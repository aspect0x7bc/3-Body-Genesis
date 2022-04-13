import React from 'react';

import { useCurrentBlock } from '../containers/ConnectionProvider/hooks';

import GithubLogo from '../images/github.png'
import TwitterLogo from '../images/twitter.png'

const Home = () => {

  const currentBlock = useCurrentBlock();

  const estimateTime = () => {

    const blocksLeft = 33333333 - currentBlock;
    const aproxSecondsLeft = 13 * blocksLeft;
    const aproxDaysLeft = Math.floor(aproxSecondsLeft / 86400);
    const modAproxHours = Math.floor((aproxSecondsLeft % 86400) / 3600);
    const modAproxMins = Math.floor(((aproxSecondsLeft % 86400) % 3600) / 60);

    return '~' + aproxDaysLeft + ' days ' + modAproxHours + ' hours ' + modAproxMins + ' minutes';
  }

  return (
    <div>
      <h1 className="title">3-Body NFT</h1>
      <h2>Your gateway into the countably infinite universe of imperfect newtonian physics</h2>
      <h1>Current Era: Genesis</h1>
      <p>In this very first era of 3-body you will have until ethereum block 33333333 ({estimateTime()}) to mint tokens from the <a href= "https://arbiscan.io/token/0x945b6ae5ec8324b1cc941c41e300cec60102e4b5">NotRandom</a> contract.</p>
      <hr />
      <h1>Future Eras</h1>
      <p>I have tons of ideas for future eras but nothing concrete planned.</p>
      <p>Any funds raised from this Genesis round will be re-invested into creating future eras.</p>
      <hr/>
      <p>Links to code and socials</p>
      <footer className="Footer">
        <a href="https://github.com/aspect0x7bc/3-Body-Genesis"><img src={GithubLogo} alt="Github Logo" target="_blank"></img></a>
        <a href="https://twitter.com/0xaspect"><img src={TwitterLogo} alt="Twitter Logo" target="_blank"></img></a>
      </footer>
    </div>
  )
}

export default Home