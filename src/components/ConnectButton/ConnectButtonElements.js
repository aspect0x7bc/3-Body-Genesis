import styled from 'styled-components'

export const ConnectBtn = styled.button`
  border-radius: 50px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  font-family: Iceland;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 3px solid #fff;
  width: 11rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`

export const DisconnectBtn = styled.button`
  border-radius: 50px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Iceland;
  font-size: 18px;
  border: 3px solid #fff;
  width: 11rem;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
    span {
      display: none;
    }
    ::before {
      content: "Set Username";
    }
  } */
`

export const ConnectedCircle = styled.div`
  background-color: #23d198;
  border-radius: 50%;
  width: 10px;
  display: inline-block;
  height: 10px;
  margin-right: 5px;
`