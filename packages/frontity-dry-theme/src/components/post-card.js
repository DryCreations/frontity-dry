import React from "react";
import { connect,styled } from "frontity";
import Image from "@frontity/components/image";
import { getMediaAttributes } from "../helpers";
import Link from "./link"

const PostCard = ({ state, post }) => {
  const scheme = state.theme.color[state.theme.currentTheme];

  const date = new Date(post.date);

  const data = state.source.get(state.router.link);
  const accent = () => {
    if (data.isFetching) return scheme.accent.loading;
    if (data.isArchive) return scheme.accent.list;
    if (data.isPostType) return scheme.accent.post;
    if (data.isPage) return scheme.accent.page;
    if (data.isError) return scheme.accent.error;
  }

  const infoString = (date.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric' }) + " by " + state.source.author[post.author].name).toUpperCase();
  return (
    <Card>
      <Wrapper>
        {post.featured_media != 0 &&
          <Link href={post.link}>
            <Featured {...getMediaAttributes(state, post.featured_media)}/>
          </Link>
        }
        <CardInfo background={scheme.background.body} accent={accent}>
          <h3>{infoString}</h3>
          <h2><Link href={post.link}><div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div></Link></h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </CardInfo>
      </Wrapper>
    </Card>
  );
};

export default connect(PostCard);

const Featured = styled(Image)`
  max-width: 100%;
  border-radius: 5px;
`;

const Card = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const CardInfo = styled.div`

  padding: 20px;
  display: inline-block;
  margin: auto;

  border-radius: 5px;

  background: ${(props) => props.background};

  position: relative;
  bottom: 70px;

  max-width: 70%;

  > * {
    margin-top: 10px;
  }

  h3 {
    font-size: 100%;
    font-weight: bold;
  }

  h2 {
    font-size: 150%;
    font-weight: bold;
  }

  div {
    font-size: 100%;
  }

  border: 1px solid ${(props) => props.accent};
`;

const Wrapper = styled.div`
  display: inline-block;
`;
