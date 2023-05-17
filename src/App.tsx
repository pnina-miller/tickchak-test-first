import React from "react";
import "./App.css";
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "./theme";
import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "./components/HomePage";
interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <ConnectedRouter history={history}>
          <HomePage />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
