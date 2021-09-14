import axios from 'axios';
import { keccak256, toUtf8Bytes } from 'ethers/lib/utils';
import React, { useState } from 'react'

import { useContract, useNetwork, useArbitrum } from '../containers/ConnectionProvider/hooks';

const Mint = () => {
  const [tokenName, setTokenName] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const contract = useContract();
  const network = useNetwork();
  const addArbitrum = useArbitrum();

  const onSubmit = (e) => {
    e.preventDefault();
    verify();
  }

  const verify = async () => {
    const hash = keccak256(toUtf8Bytes(tokenName));
    axios.post(
      'http://api.3-body.xyz/solve',
      {
        'hash': hash.substring(2),
      })
    .then(res => setIsVerified(true))
    .catch(e => {
      if(e.response.status === 420) {
        alert(`This name (${tokenName}) will not produce a simulation. If you still wish to mint it please do so directly from the contract.`);
      }
      else {
        alert("other error - see console");
        console.error(e);
      }
    });
  }

  const mint = async () => {
    try{
      const tx = await contract.mint(tokenName);
      const receipt = await tx.wait();
      console.log('tx', tx);
      console.log('receipt', receipt);
    } catch (e) {
      console.error(e);
      if(e.code !== 4001) {
        alert(e.data.message);
      }
      //e.code 4001 user rejected
      //-32603 internal JSON-RPC error -> e.data.code = -32000 insufficientgasfunds
      //          -> e.data.code = 3 Hash already exists..
    }
  }

  const restart = async () => {
    setIsVerified(false);
    setTokenName('');
  }

  let content;
  if (!contract) {
    content = <h1>Connect Metamask</h1>
  }
  else if (network !== 42161) {
    content = (
      <>
        <h1>3-Body uses the Arbitrum Network</h1>
        <p>Please switch your network, or add Arbitrum if you have not done so yet.</p>
        <button onClick={addArbitrum}>Add/Switch To Arbitrum</button>
      </>
    );
  }
  else {
    content = (
      <div>
        <h1>Mint</h1>
        <p>Here you can verify that a given name will produce a simulation before you mint it</p>
        <p>Minting is free, you only need to pay for the price of gas</p>
        <form onSubmit={onSubmit}>
          <label>
            Token name
            <input
              name="tokenName"
              type="text"
              value={tokenName}
              onChange={e => setTokenName(e.target.value)} />
          </label>
          <br />
          <input type="submit" value="Verify"/>
        </form>
      </div>
    )
    if (isVerified) {
      content = (
        <div>
          <h1>Mint</h1>
          <p>{tokenName} will produce a simulation</p>
          <button className="mint" onClick={() => mint()}>Mint</button>
          <button className="mint" onClick={() => restart()}>Restart</button>
        </div>
      ) 
    }
  }

  return content;
  
}

export default Mint