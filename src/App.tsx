import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { useAppSelector } from "./store/hooks";
import "./App.css";
import { GifPage } from "./pages/gif-page/GifPage";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const App = (): JSX.Element => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={{ theme: theme }}>
      <Container>
        <GifPage />
      </Container>
    </ThemeProvider>
  );
};

export default App;
