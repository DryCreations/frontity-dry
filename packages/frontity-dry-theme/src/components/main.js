import React from "react";
import { connect, styled } from "frontity";

const Main = ({ state, children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

export default connect(Main);

const MainContainer = styled.main`
  max-width: 800px;
  margin: auto;
  
`;
