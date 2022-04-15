import { createTheme, rgbToHex } from "@mui/material/styles";

let theme01 = {
  font: {
    color: {
      primary: "yellow",
      footer:"rgb(3,193,255)",
    },
    size: {
      header: "22px",
      primary: "18px",
      h1title:"48px"
    },
  },
  font768:{
    size:{
      title:"18px",
      big:"16px",
      primary:"14px",
      small:"12px"
    }
  },
  bgc: {
    color: {
        header:"rgb(253,253,253)"
    },
  },
};

theme01 = createTheme(theme01);

export { theme01 };
