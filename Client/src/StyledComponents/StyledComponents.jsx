import styled from 'styled-components';

export const GroupColor = styled.div`
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  border-radius: 255px;
  outline: 1px solid #000;`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopUp = styled.div`
  width: 500px;
  height: ${props => props.height};
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  outline: 1px solid #000;
  transition : all 0.5s ease-in-out;`
  
  