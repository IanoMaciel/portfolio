import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import dark from "./styles/themes/dark";
import { MainHeader } from "./components/MainHeader";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <MainHeader />
    </ThemeProvider>
  );
}
