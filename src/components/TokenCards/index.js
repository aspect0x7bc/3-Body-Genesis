import React from 'react';
import axios from 'axios';
import { useAddress, useNetwork, useArbitrum } from '../../containers/ConnectionProvider/hooks';

import {
  GridContainer,
  CardWrapper,
  CardHeader,
  CardRenderBtn,
} from './TokenCardElements'

const TokenCards = ({ setSolution, toggle, tokens }) => {

  const address = useAddress();
  const network = useNetwork();
  const addArbitrum = useArbitrum();
  
  const onClick = (token) => {
    axios
      .post(
        'https://cryptic-dawn-48229.herokuapp.com/solve',
        {
          'hash': token.hash,
        })
      .then(res => setSolution(res.data))
      .catch(e => console.error(e))
    
    toggle()
  }

  let content;
  if(!address) {
    content = <p>Connect Metamask to see your tokens</p>
  }
  else if (network !== 42161) {
    content = (
      <>
        <p>3-Body uses the Arbitrum Network</p>
        <p>Please switch your network, or add Arbitrum if you have not done so yet.</p>
        <button onClick={addArbitrum}>Add/Switch To Arbitrum</button>
      </>
    );
  }
  else if (tokens.length === 0) {
    content = (
      <>
        <p>This address does not own any NotRandom tokens.</p>
      </>
    )
  } else {
    content = (
      <>
        <GridContainer>
          {tokens.map(token => (
            <CardWrapper key={token.hash}>
              <CardHeader>{token.name}</CardHeader>
              <CardHeader>Score: {token.score}</CardHeader>
              <CardRenderBtn onClick={() => onClick(token)} >
                Render
              </CardRenderBtn>
            </CardWrapper>
          ))}
        </GridContainer>
      </>
    );
  }

  return content;
}

export default TokenCards