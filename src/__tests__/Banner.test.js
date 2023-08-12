import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

describe('Banner component', () => {
  it('renders correctly', () => {
    render(<Banner />);
    expect(screen.getByText('Welcome to SpaceX Database.')).toBeInTheDocument();
  });
});