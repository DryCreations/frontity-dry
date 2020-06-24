import React from "react";
import { connect, Head, Global } from "frontity";
import Switch from "@frontity/components/switch";
import Title from "./meta/title";
import Header from "./header";
import Main from "./main";
import Loading from "./loading";
import List from "./list";
import Post from "./post";
import Page from "./page";
import PageError from "./page-error";
import Footer from "./footer";

import globalStyles from "./styles/global-styles";

const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  const scheme = state.theme.color[state.theme.currentTheme];

  const accent = () => {
    if (data.isFetching) return scheme.accent.loading;
    if (data.isError) return scheme.accent.error;
    if (data.isArchive) return scheme.accent.list;
    if (data.isPage) return scheme.accent.page;
    if (data.isPostType) return scheme.accent.post;
  }

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles(scheme)} />

      <Header
        background={scheme.background.header}
        accent={accent}
        titleColor={scheme.text.title}
        menuColor={scheme.text.menu}
      />

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page when={data.isPage} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);
