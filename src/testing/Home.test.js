import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/mainStore';
import Home from '../components/Home';

test('renders App component', () => {
  const home = render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  expect(home).toMatchSnapshot();
});
