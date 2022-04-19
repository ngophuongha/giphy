import { StyledThemeProvider } from "./themes";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { PageRoute } from "./pages/PageRoute";

import "./i18n";
import "./App.css";
import "./style/index.scss";

const persistor = persistStore(store);

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <StyledThemeProvider>
          <PageRoute />
        </StyledThemeProvider>
      </PersistGate>
    </BrowserRouter>
  );
};

export default App;
