import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useAddress } from '../containers/ConnectionProvider/hooks';

import LeaderTable from '../components/LeaderTable';
import SimulationModal from '../components/SimulationModal';
import TokenCards from '../components/TokenCards';

const Leaderboard = () => {

  const address = useAddress();
  
  const topTen = (tokens) => {
    tokens.sort((a,b) => a.score - b.score)
    return tokens.slice(0,10);
  }

  const tokens = useSelector((state) => state.token.tokens);
  const leadTokens = topTen(tokens.slice());
  const userTokens = tokens.filter(token => token.owner === address)

  const [isOpen, setIsOpen] = useState(false)
  const [solution, setSolution] = useState(null)

  const toggle = () => setIsOpen(!isOpen)


  const columns = useMemo(() => [
    {
      Header: 'Rank',
      id: 'row',
      Cell: ({row}) => {
        return <div>{row.index+1}</div>
      }
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Owner',
      accessor: 'owner',
    },
    {
      Header: 'Score',
      accessor: 'score',
    },
    {
      Header: 'View',
      Cell: ({row}) => {
        return (<button onClick={() => onClick(row.original)}>Render</button>)
      }
    },
    // eslint-disable-next-line
  ],[]);

  const data = useMemo(() => leadTokens, [leadTokens]);

  const onClick = (token) => {
    axios
      .post(
        'http://api.3-body.xyz/solve',
        {
          'hash': token.hash,
        })
      .then(res => setSolution(res.data))
      .catch(e => console.error(e))
    
    toggle()
  }

  return (
    <>
      <h1 className="title">Leaderboard</h1>
      <SimulationModal isOpen={isOpen} toggle={toggle} solution={solution} />
      <LeaderTable columns={columns} data={data} />
      <h1 className="title">My Tokens</h1>
      <TokenCards setSolution={setSolution} toggle={toggle} tokens={userTokens} />
    </>
  )
}

export default Leaderboard

