import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state, accent, background, titleColor, menuColor }) => {
  const { title } = state.frontity;

  return (
    <PageHeader background={background} accent={accent}>
      <HeaderInner>
        <StyledLink href="/">
          <SiteTitle textColor={titleColor}>
            {title}
          </SiteTitle>
        </StyledLink>
        <Menu accent={accent} textColor={menuColor}>
          {state.theme.menu.map(item => (
            <StyledLink key={item[0]} href={item[1]}>
              {item[0]}
            </StyledLink>
          ))}
        </Menu>
      </HeaderInner>
    </PageHeader>
  );
};

export default connect(Header);

const PageHeader = styled.header`
  border-top: 10px solid ${(props) => props.accent};
  background-color: ${(props) => props.background};
`;

const HeaderInner = styled.div`
  a {
    float: left;
    text-align: center;
    padding: 5px 15px;
    font-size: 18px;
    line-height: 25px;
    border-radius: 30px;
  }

  @media screen and (max-width: 700px) {
    a {
      float: none;
      display: block;
      margin-left: 0px;
      border-radius: 0px;
    }
    > div {
      float: none;
    }
    padding:0px;
  }

  overflow: hidden;
  padding: 10px;
`;

const SiteTitle = styled.h1`
  font-size: 150%;
  color: ${(props) => props.textColor}
`;

const StyledLink = styled(Link)`

`;

const Menu = styled.div`
  float: right;

  a.active {
    background-color: ${(props) => props.accent};
  }

  a:hover:not(.active) {
    background-color: rgba(127,127,127,.1)
  }
  @media screen and (min-width: 700px) {
    a {
      margin-left: 20px;
    }
  }
  a {
    color: ${(props) => props.textColor}
  }


`;
