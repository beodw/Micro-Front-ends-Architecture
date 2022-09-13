import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { increment, decrement, incrementByAmount } from "./store";
import counterReducer from "./store";
import { configureStore } from "@reduxjs/toolkit";

window.store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

window.actions = { increment, decrement, incrementByAmount };

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
