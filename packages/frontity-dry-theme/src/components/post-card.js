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
    if (data.isError) return scheme.accent.error;
    if (data.isArchive) return scheme.accent.list;
    if (data.isPage) return scheme.accent.page;
    if (data.isPostType) return scheme.accent.post;
  }

  return (
    <Card>
        {post.featured_media != 0 &&
          <Link href={post.link}>
            <Featured {...getMediaAttributes(state, post.featured_media)}/>
          </Link>
        }
        <CardInfo background={scheme.background.body} showBorder={post.featured_media == 0} accent={accent}>
          <h4><Link href={post.link}>{date.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase()}</Link> BY <Link href={state.source.author[post.author].link}>{state.source.author[post.author].name.toUpperCase()}</Link></h4>
          <h3><Link href={post.link}><div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div></Link></h3>
          <div>
            <Break accent={accent} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </CardInfo>
    </Card>
  );
};

export default connect(PostCard);

const Featured = styled(Image)`
  max-width: 100%;

  @media screen and (min-width: 700px) {
    border-radius: 5px;
  }

`;

const Card = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const CardInfo = styled.div`
  padding: 20px;
  display: inline-block;
  margin: auto;

  @media screen and (min-width: 700px) {
    border-radius: 5px;
  }

  @media screen and (max-width: 700px) {
    max-width: ${(props) => props.showBorder ? '100%' : '80%'};
    border-radius: ${(props) => props.showBorder ? '0px' : '5px'};
  }

  background: ${(props) => props.background};

  position: relative;
  bottom: 70px;

  max-width: 70%;

  > * {
    margin-top: 10px;
  }

  h4 {
    font-size: 100%;
    font-weight: bold;
  }

  h3 {
    font-size: 160%;
    font-weight: bold;
  }

  div {
    font-size: 100%;
  }

  border-top: ${(props) => props.showBorder ? '10px' : '0'} solid ${(props) => props.accent};
`;

const Break = styled.hr`
  width: 50px;
  border: 1.5px solid ${(props) => props.accent};
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
