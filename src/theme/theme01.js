import { createTheme, rgbToHex } from "@mui/material/styles";

let theme01 = {
  font: {
    color: {
      primary: "yellow",
    },
    size: {
      header: "22px",
    },
  },
  bgc: {
    color: {
        header:"rgb(253,253,253)"
    },
  },
};

theme01 = createTheme(theme01);

export { theme01 };
