import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import React from 'react';

import App from './App';

test('renders correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('Fastinator')).toHaveTextContent('Fastinator');
});
