import { StyledThemeProvider } from "./themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { Wrapper } from "./components/wrapper";
import { PageRoute } from "./pages/PageRoute";

import "./i18n";
import "./App.css";
import "./style/index.scss";

const persistor = persistStore(store);

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StyledThemeProvider>
            <PageRoute />
          </StyledThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
