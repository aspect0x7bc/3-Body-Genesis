import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(364px, 1fr));
  grid-gap: 2rem;
  align-items: center;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;
  height: 500px;
  width: 300px;
  background-color: transparent;
  margin: 2rem;
  padding: 0.5rem;
  border-style: solid;
  border-width: medium;
  border-radius: 1rem;
  border-color: white;
`

export const CardHeader = styled.h1`
  font-size: 24;
  font-weight: bold;
  text-align: center;
`

export const CardRenderBtn = styled.button`
  border-radius: 50px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 3px solid #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`