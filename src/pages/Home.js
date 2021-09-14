import React from 'react';

import { useCurrentBlock } from '../containers/ConnectionProvider/hooks';

import GithubLogo from '../images/github.png'
import TwitterLogo from '../images/twitter.png'
import DiscordLogo from '../images/discord.png'

const Home = () => {

  const currentBlock = useCurrentBlock();

  const estimateTime = () => {

    const blocksLeft = 13333333 - currentBlock;
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
      <p>In this very first era of 3-body you will have until ethereum block 13333333 ({estimateTime()}) to mint tokens from the <a href= "https://arbiscan.io/token/0x945b6ae5ec8324b1cc941c41e300cec60102e4b5">NotRandom</a> contract.</p>
      <p>At ethereum block 13333333 a snapshot will be taken of the NotRandom tokens and a new ThreeBodyGenesis NFT will be claimable 1 to 1 for the price of 0.1 ether.</p>
      <p>Prior to the snapshot all NotRandom NFTs will be visable on the token leaderboard along with their rank and score. Please see About for more info on scoring.</p>
      <p>After the snapshot only claimed ThreeBodyGenesis NFTs will be visable.</p>
      <hr />
      <h2>Doing it this way is beneficial for a few reasons.</h2>
      <p>Unlimited renders: Mint as many as you want then only keep and pay for the ones you like.</p>
      <p>Final ThreeBodyGenesis NFTs will contain {'<tbd data: score, IVs, customized view settings?>'} and a nice render for opensea.</p>
      <p>Limited run without a FOMO rush to mint tokens.</p>
      <hr/>
      <h1>Future Eras</h1>
      <p>I have tons of ideas for future eras but nothing concrete planned.</p>
      <p>Funds raised from this Genesis round will be re-invested into creating future eras.</p>
      <p>Following the 3-Body twitter account will be the best way to see announcements when they are made.</p>

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

export default Home