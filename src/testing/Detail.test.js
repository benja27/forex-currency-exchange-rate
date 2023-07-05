import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/mainStore";
import Detail from "../components/Detail";
import { MemoryRouter } from "react-router-dom";

test("renders App component", () => {
  const detail =  render(
    <MemoryRouter>
      <Provider store={store}>
          <Detail />        
      </Provider>
    </MemoryRouter>
  );  
  expect(detail).toMatchSnapshot()
});
