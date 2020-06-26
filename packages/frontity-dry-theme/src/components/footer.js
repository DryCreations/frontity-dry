import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state, background, textColor }) => {
  return (
    <Wrapper background={background} textColor={textColor}>
      <p>Created by Hayden Mankin, Powered by Wordpress, React, Frontity</p>
    </Wrapper>
  );
};

export default connect(Footer);

const Wrapper = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${(props)=>props.textColor};
  background-color: ${(props)=>props.background};
  padding: 20px;
  > p {
    margin: 0px;
  }
`;
