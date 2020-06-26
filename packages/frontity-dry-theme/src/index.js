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
              title: "#313639",
              menu: "#313639",
              main: "#313639",
              caption: "#202020"
            },
            accent: {
              post: "#3EB650",
              page: "#E56B1F",
              list: "#3778C2",
              error: "#FF0000",
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
