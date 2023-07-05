import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/mainStore";
import App from "../App";

test("renders App component", () => {
  render(
    <Provider store={store} >
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Forex/i);
  expect(linkElement).toBeInTheDocument();
});
