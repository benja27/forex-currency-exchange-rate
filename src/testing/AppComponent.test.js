import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../redux/mainStore';
import App from '../App';

test('renders App component', () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(app).toMatchSnapshot();
});
