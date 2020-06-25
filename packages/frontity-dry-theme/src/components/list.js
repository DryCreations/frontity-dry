import React from "react";
import { connect, styled } from "frontity";
import PostCard from "./post-card"


const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  const header = data.isTaxonomy ? state.source[data.taxonomy][data.id] :
                  data.isAuthor ? state.source.author[data.id] : null;

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
    </>
  );
};

export default connect(List);

const Items = styled.div`
  margin-top: 100px;
`

const ListHeader = styled.h2`
  font-size: 140%;
  text-align: center;
  margin-top: 100px;
  font-style: italic;
`;
