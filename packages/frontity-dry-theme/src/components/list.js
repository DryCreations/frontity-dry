import React, { useEffect} from "react";
import { connect, styled } from "frontity";
import PostCard from "./post-card";
import Link from "./link";

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  const header = data.isTaxonomy ? state.source[data.taxonomy][data.id] :
                  data.isAuthor ? state.source.author[data.id] : null;

  useEffect(() => {
      window.scrollTo(0, 0);
      if (data.next)
        actions.source.fetch(data.next);
      if (data.previous)
        actions.source.fetch(data.previous);
  });

  return (
    <>
      {header && <ListHeader>"{header.name.toUpperCase()}"</ListHeader>}
      <Items>

        {data.items.map(item => {
          const post = state.source.post[item.id];
          return (
            <PostCard key={post.id} post={post} />

          );
        })}
      </Items>
      <Pagination>
        {data.previous && <Link href={data.previous}>previous page</Link>} {data.next && <Link href={data.next}>next page</Link>}
      </Pagination>
    </>
  );
};

export default connect(List);

const Items = styled.div`
  margin-top: 100px;
`

const ListHeader = styled.h2`
  /* font-size: 140%; */
  text-align: center;
  margin-top: 100px;
  font-style: italic;
`;

const Pagination = styled.div`
  text-align: center;

  margin-bottom: 100px;

  > a:nth-child(2) {
    margin-left: 20px;
  }

  > a {
    text-decoration: underline;
  }
  > a:hover {
    text-decoration: none;
  }
`;
