import { render, screen } from '@ssg/core/jest/utils';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should render footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
