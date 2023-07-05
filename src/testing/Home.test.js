import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/mainStore";
import Home from "../components/Home";
import { Router, MemoryRouter } from "react-router-dom";

test("renders App component", () => {
  const home = render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );
  expect(home).toMatchSnapshot();
});
