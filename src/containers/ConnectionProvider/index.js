import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { ethers } from 'ethers';
import abi from '../../abi/NotRandom.json';

import ConnectionContext from './context'

const ConnectionProvider = (props) => {
  const { children } = props;
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [block, setBlock] = useState(0);
  const [signerContract, setSignerContract] = useState(null);
  //const provider = new ethers.providers.JsonRpcProvider('https://arb1.arbitrum.io/rpc');
  // plz dont use my node :D - too lazy to hide in backend xI
  const provider = new ethers.providers.JsonRpcProvider('https://arb-mainnet.g.alchemy.com/v2/ujzK1r0pxgv1s85OABnSqENfQbUJ5kD2');
  const contractAddress = '0x945B6AE5eC8324B1Cc941C41E300cEc60102e4B5';

  const dispatch = useDispatch();

  const connect = async () => {
    if(!window.ethereum) {alert("Please install Metamask"); return;}
    window.ethereum.enable();

    const metamask = new ethers.providers.Web3Provider(window.ethereum, "any");
    metamask.on("network", (newNetwork, oldNetwork) => {
      if (oldNetwork) { window.location.reload(); }
    });
    const networkID = await metamask.getNetwork();
    const signer = metamask.getSigner();
    const addr = await signer.getAddress();
    const signedContract = new ethers.Contract(contractAddress, abi, signer);

    setNetwork(networkID.chainId);
    setAddress(addr);
    setSignerContract(signedContract);
  }

  const addArbitrum = async () => {
    window.ethereum.sendAsync({
      id: 1,
      jsonrpc: '2.0',
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: '0xA4B1',
          chainName: 'Arbitrum',
          rpcUrls: ['https://arb1.arbitrum.io/rpc'],
          blockExplorerUrls: ['https://arbiscan.io']
        }
      ]
    })
  }

  useEffect(() => {
    async function load(scores) {

      const ethProvider = new ethers.getDefaultProvider();
      const currentBlock = await ethProvider.getBlockNumber();
      setBlock(currentBlock);

      const contract = new ethers.Contract(contractAddress, abi, provider);
      const numTokens = (await contract.totalSupply()).toNumber();

      //load assets...
      const tokens = []
      for (let i = 0; i < numTokens; ++i) {
        const tokenId = await contract.tokenByIndex(i);
        const tokenRaw = await contract.tokens(tokenId);
        const tokenHash = tokenRaw[1].substring(2);
        const owner = await contract.ownerOf(tokenId);
        let score = scores[tokenId];
        if (score === undefined) {
          score = 'not loaded - try refreshing the page';
          axios.post('https://cryptic-dawn-48229.herokuapp.com/solve',
            {
              'hash': tokenHash,
            })
            .then(res => {
              const score = res.data[4];
              console.log('tokenId', tokenId.toNumber())
              console.log('score', score)
              axios.post('https://cryptic-dawn-48229.herokuapp.com/scores/',
              {
                'tokenId': tokenId.toNumber(),
                'score': score
              })
              .catch(e => console.error(e));
            })
            .catch(e => console.error(e));
        }
        const token = {
          name: tokenRaw[0],
          hash: tokenHash,
          owner: owner,
          score: score,
        }
        tokens.push(token);
      }
      dispatch({
        type: 'tokens/load',
        payload: tokens
      })
    }

    axios.get('https://cryptic-dawn-48229.herokuapp.com/scores/')
    .then(res => {
      load(res.data);
    })

    // eslint-disable-next-line
  }, [])

  useEffect(() => setNetwork(network), [network]);

  return (
    <ConnectionContext.Provider
      value={{ connect, address, network, signerContract, block, addArbitrum }}
    >
      { children }
    </ConnectionContext.Provider>
  )
}

export default ConnectionProvider;