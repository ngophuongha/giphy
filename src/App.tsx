import { StyledThemeProvider } from "./themes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { Wrapper } from "./components/wrapper";
import { PageRoute } from "./pages/PageRoute";

import "./i18n";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StyledThemeProvider>
          <Wrapper>
            <PageRoute />
          </Wrapper>
        </StyledThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
