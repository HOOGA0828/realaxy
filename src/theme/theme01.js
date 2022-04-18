import { createTheme } from "@mui/material/styles";

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
      homeTitle:"28px",
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
  button:{
    background: {
      home_header:"#b95ee6",
      home_create:"rgb(255,205,0)"
    },
  },
};

theme01 = createTheme(theme01);

export { theme01 };
