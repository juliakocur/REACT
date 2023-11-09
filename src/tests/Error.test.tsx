import ErrorButton from '../components/ErrorButton/ErrorButton';
import { render } from '@testing-library/react';

describe('ErrorButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorButton />);
    expect(baseElement).toBeTruthy();
  });
});
