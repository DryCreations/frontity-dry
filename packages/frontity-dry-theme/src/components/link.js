import React from "react";
import { connect, styled } from "frontity";

const Link = ({ state, href, actions, children }) => {
  const scheme = state.theme.color[state.theme.currentTheme];
  const currentRoute = state.router.link;

  const isActiveClass = currentRoute == href ? "active" : "";

  return (

      <Anchor
        className={isActiveClass}
        href={href}
        linkColor={scheme.text.link}
        onClick={ e => {
          e.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </Anchor>

  );
};

export default connect(Link);

const Anchor = styled.a`
    color: ${ (props) => props.linkColor };
    text-decoration: none;
`
