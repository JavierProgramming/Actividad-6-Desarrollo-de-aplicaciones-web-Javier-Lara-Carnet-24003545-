import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders input to add todos', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/add todo/i);
  expect(inputElement).toBeInTheDocument();
});
