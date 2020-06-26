import React, { useEffect} from "react";
import { connect, styled } from "frontity";

import Image from "@frontity/components/image";
import { getMediaAttributes } from "../helpers";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;



  return (
    <Wrapper>
    {post.featured_media != 0 &&
        <Featured {...getMediaAttributes(state, post.featured_media)}/>
    }
    <Article>
      <h1>{post.title.rendered}</h1>
      <Html2React html={post.content.rendered} />
    </Article>

    </Wrapper>
  );
};

export default connect(Post);

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
