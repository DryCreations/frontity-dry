import React, { useEffect} from "react";
import { connect, styled } from "frontity";

import Image from "@frontity/components/image";
import { getMediaAttributes } from "../helpers";

const Page = ({ state,actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;

  useEffect(() => {
      window.scrollTo(0, 0);
      actions.source.fetch("/");
  });

  return (
    <Wrapper>
    <Article>
      <h1>{page.title.rendered}</h1>
      <Html2React html={page.content.rendered} />
    </Article>

    </Wrapper>
  );
};

export default connect(Page);

const Featured = styled(Image)`
  max-width: 100%;
  @media screen and (min-width: 700px) {
    border-radius: 5px 5px 0px 0px;
  }

`;

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Article = styled.article`

`;
