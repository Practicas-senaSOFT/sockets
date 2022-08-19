import styled from "styled-components";

export const GroupColor = styled.div`
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  border-radius: 255px;`;

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
`;

export const PopUp = styled.div`
 box-shadow: 0px 5px 5px -1px rgba(0, 0, 0, 0.66);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
  background: rgba(0, 0, 0, 0.1);
  width: 300px;
  height: ${(props) => props.height};
  transition: all 0.5s ease-in-out;
`;
