import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import dark from "./styles/themes/dark";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout/>
    </ThemeProvider>
  );
}
