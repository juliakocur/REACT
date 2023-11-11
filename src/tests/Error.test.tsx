import ErrorButton from '../components/ErrorButton/ErrorButton';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ErrorButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorButton />);
    expect(baseElement).toBeTruthy();
  });
  it('should render with text', () => {
    const { getByText } = render(<ErrorButton />);
    expect(getByText('Crash')).toBeTruthy();
    userEvent.click(getByText('Crash'));
    expect(getByText('Crash')).not.toBeInTheDocument;
  });
});
