import styled from "styled-components";

export const MoviesContent = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const MoviesWrapper = styled.div`
  
`