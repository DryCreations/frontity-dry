import React from "react";
import { connect } from "frontity";
import Link from "./link"

const PageError = ({ state }) => {
  return (
    <h1>
      Sorry, we couldn't find that page, head back to <Link href="/">safety...</Link>
    </h1>
  );
};

export default connect(PageError);
