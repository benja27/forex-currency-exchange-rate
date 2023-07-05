import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/mainStore';
import Navbar from '../components/Navbar';

test('renders App component', () => {
  const navbar = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(navbar).toMatchSnapshot();
});
