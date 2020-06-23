import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\frontity-dry-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "frontity-dry-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
