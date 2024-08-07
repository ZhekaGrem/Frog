import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portal from '@/app/components/portal/Portal';

// Mock ReactDOM.createPortal
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: React.ReactNode) => node,
}));

describe('Portal component', () => {
  beforeEach(() => {
    // Create a div with id 'portal-root' before each test
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    // Clean up the portal-root div after each test
    const portalRoot = document.getElementById('portal-root');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('renders the portal and handles close button click', async () => {
    const onCloseMock = jest.fn();

    render(<Portal onClose={onCloseMock} />);

    // Check if the portal content is rendered
    const portalContent = screen.getByRole('button');
    expect(portalContent).toBeInTheDocument();

    // Click the close button
    fireEvent.click(portalContent);

    // Wait for the animation to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    // Check if onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('handles click outside to close', async () => {
    const onCloseMock = jest.fn();

    render(<Portal onClose={onCloseMock} />);

    // Click outside the modal
    fireEvent.mouseDown(document.body);

    // Check if onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('logs an error when portal-root is not found', () => {
    // Remove the portal-root element
    const portalRoot = document.getElementById('portal-root');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Portal onClose={() => {}} />);

    expect(consoleSpy).toHaveBeenCalledWith('Портала немає');
    consoleSpy.mockRestore();
  });
});
