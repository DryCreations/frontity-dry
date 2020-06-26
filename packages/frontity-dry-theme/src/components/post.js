import React, { useEffect} from "react";
import { connect, styled } from "frontity";

import Image from "@frontity/components/image";
import { getMediaAttributes } from "../helpers";

import Link from "./link"

const Post = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;
  const date = new Date(post.date);

  useEffect(() => {
      window.scrollTo(0, 0);
      actions.source.fetch("/");
  });

  return (
    <Wrapper>
    {post.featured_media != 0 &&
        <Featured {...getMediaAttributes(state, post.featured_media)}/>
    }
    <Article>
    <h1>{post.title.rendered}</h1>
      <h5>{date.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric' })} by <Link href={state.source.author[post.author].link}>{state.source.author[post.author].name}</Link></h5>


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
  > h5:nth-of-type(1) {
    margin-top: 0px;
  }
  > h1:nth-of-type(1) {
    margin-bottom: 0px;
  }
`;
