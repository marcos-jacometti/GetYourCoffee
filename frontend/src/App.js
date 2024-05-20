import React, { useState } from "react";
import { GlobalStyle } from "./assets/styles/global";
import themeContext from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./assets/styles/toggle/darkTheme";
import { lightTheme } from "./assets/styles/toggle/lightTheme";
import AppRoutes from "../src/routes/Routes";

function App() {
  const [mode, setMode] = useState(false);
  return(
    <themeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default App;