import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const callMock = jest.fn();
  const TEST_NAME = 'TEST_NAME';

  it('should display title', () => {
    render(<Button name={TEST_NAME} onClick={callMock} />);
    const name = screen.getByText(TEST_NAME);
    expect(name).toBeInTheDocument();
  });

  it('should call callback', () => {
    render(<Button name={TEST_NAME} onClick={callMock} />);
    const button = screen.getByText(TEST_NAME);
    fireEvent.click(button);
    expect(callMock).toHaveBeenCalled();
  });
});
