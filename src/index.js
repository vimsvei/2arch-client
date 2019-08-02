import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import { ServiceProvider } from "./components/service-context";
import Service from "./services/service";
import store from "./store";

import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';


const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ServiceProvider value={service}>
        <Router>
          <App />
        </Router>
      </ServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
