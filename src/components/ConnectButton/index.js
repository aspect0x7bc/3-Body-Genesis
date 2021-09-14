import React from 'react'
import { useAddress, useConnect } from '../../containers/ConnectionProvider/hooks'
import { getShortenedAddress } from '../../utils/string'
import {
  ConnectBtn,
  DisconnectBtn,
  ConnectedCircle,
} from './ConnectButtonElements'

const ConnectButton = () => {
  const address = useAddress();
  const onConnect = useConnect();
  let content;

  if (address) {
    const addressShort = getShortenedAddress(address);
    content = (
      <DisconnectBtn
        onClick={onConnect}
      >
        <span><ConnectedCircle />
        {addressShort}</span>
      </DisconnectBtn>
    );
  } else {
    content = (
      <ConnectBtn
        onClick={onConnect}
      >
        Connect
      </ConnectBtn>
    )
  }

  return (
    <>
      {content}
    </>
  )
}

export default ConnectButton
