import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/mainStore';
import Detail from '../components/Detail';

test('renders App component', () => {
  const detail = render(
    <MemoryRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </MemoryRouter>,
  );
  expect(detail).toMatchSnapshot();
});
