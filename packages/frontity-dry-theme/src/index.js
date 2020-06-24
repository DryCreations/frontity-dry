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
              header: "#FFFFFF",
              footer: "#FFFFFF",
              body: "#FFFFFF",
            },
            text: {
              link: "#8888FF",
              title: "#000000",
              menu: "#000000"
            },
            accent: {
              post: "#C5D7C0",
              page: "#F8CA9D",
              list: "#E8E8E8",
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
