import Theme from "./components";

const fontityDryTheme = {
  name: "fontity-dry-theme",
  roots: {
    theme: Theme
  },
  state: {
      theme: {
        menu: [],
        currentTheme: "light",
        color: {
          light: {
            background: {
              header: "#FBFBF8",
              footer: "#FBFBF8",
              body: "#FBFBF8",
            },
            text: {
              link: "#8888FF",
              title: "#313639",
              menu: "#313639",
              main: "#313639",
              caption: "#202020"
            },
            accent: {
              post: "#C5D7C0",
              page: "#F8CA9D",
              list: "#313639",
              error: "#FA6E4F",
              loading: "#F2CF59"
            }
          },
          dark: {

          }
        }
      }
  },
  actions: {
      theme: {
        setDarkMode: ({state}) => {
          state.theme.currentTheme = "dark";
        },
        setLightMode: ({state}) => {
          state.theme.currentTheme = "light";
        },
      }
  }
};

export default fontityDryTheme
