// tests/AboutMe.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import AboutMe from '../components/AboutMe/AboutMe'; 

describe('AboutMe Component', () => {
  test('renders "Olá, me chamo Leonardo"', () => {
    render(<AboutMe />);
    const linkElement = screen.getByText(/Olá, me chamo Leonardo/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('shows more information when "Saber mais" is clicked', () => {
    render(<AboutMe />);
    const button = screen.getByText(/Saber mais/i);
    fireEvent.click(button);
    const expandedText = screen.getByText(/ao longo do tempo/i);
    expect(expandedText).toBeInTheDocument();
  });
});
