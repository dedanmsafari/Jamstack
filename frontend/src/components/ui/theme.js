import { createTheme } from "@material-ui/core/styles"

const green = "#99B898"
const darkGreen = "#708670"

const offBlack = "#2A363B"
const grey = "#747474"
const white = "#FFFFFF"

const theme = createTheme({
  palette: {
    primary: { main: green },
    secondary: { main: darkGreen },
    common: {
      offBlack,
      white,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
      color: green,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
      fontFamily: "Montserrat",
      color: white,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 300,
      fontFamily: "Montserrat",
      color: green,
    },
    h4: {
      fontSize: "3rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
      color: white,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
      color: white,
    },
    body1: {
      fontSize: "1.5rem",
      fontFamily: "Montserrat",
      color: grey,
    },
  },
  overrides: {},
})

export default theme
