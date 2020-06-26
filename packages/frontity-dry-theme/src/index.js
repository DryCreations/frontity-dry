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
              footer: "#F0F0F0",
              body: "#FBFBF8",
            },
            text: {
              title: "#313639",
              menu: "#313639",
              main: "#313639",
              caption: "#505050"
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
            background: {
              header: "#181822",
              footer: "#181822",
              body: "#181822",
            },
            text: {
              title: "#FFFFFF",
              menu: "#FFFFFF",
              main: "#FFFFFF",
              caption: "#FFFFFF"
            },
            accent: {
              post: "#3EB650",
              page: "#E56B1F",
              list: "#3778C2",
              error: "#FF0000",
              loading: "#F2CF59"
            }
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
