import React from "react";
import { Head, connect } from "frontity";

const Title = ({ state }) => {
  return (
    <Head>
      <title>{state.frontity.title}</title>
    </Head>
  );
};

export default connect(Title);
