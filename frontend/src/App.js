import React, { useState } from "react";
import { GlobalStyle } from "./assets/styles/global";
import themeContext from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./assets/styles/toggle/darkTheme";
import { lightTheme } from "./assets/styles/toggle/lightTheme";
import Home from "./pages/home";

function App() {
  const [mode, setMode] = useState(false);
  return(
    <themeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default App;