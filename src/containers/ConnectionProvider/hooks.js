import { useContext } from 'react'
import context from './context'

export function useConnect() {
  const { connect } = useContext(context);
  return connect;
}

export function useAddress() {
  const { address } = useContext(context);
  return address;
}

export function useNetwork() {
  const { network } = useContext(context);
  return network;
}

export function useContract() {
  const { signerContract } = useContext(context);
  return signerContract;
}

export function useCurrentBlock() {
  const { block } = useContext(context);
  return block;
}

export function useArbitrum() {
  const { addArbitrum } = useContext(context);
  return addArbitrum;
}