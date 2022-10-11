import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 700px;
  height: 500px;

  @media (max-width: 660px) {
  width: auto;
  height: auto;
  }
`;
