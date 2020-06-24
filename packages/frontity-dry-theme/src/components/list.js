import React from "react";
import { connect, styled } from "frontity";
import PostCard from "./post-card"


const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Items>
      {data.items.map(item => {
        const post = state.source.post[item.id];
        return (
          <PostCard key={post.id} post={post} />

        );
      })}
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  margin-top: 100px;
`
