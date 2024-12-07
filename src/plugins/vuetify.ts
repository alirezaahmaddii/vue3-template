import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  defaults: {
      VBtn: { color: "bgBtn" },
  },
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        colors: {
          bgBtn: "#B5C458",
          "on-bgBtn": "#FFF",
          red: "#FF3636",
          bgRed: "#FFE5E5",
          greenBorder: "#B5C458",
          bgGreen: "#B5C45833",
        },
      },
    },
  },
});
