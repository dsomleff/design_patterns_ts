import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

import App from './UserBuilder';

it('should render different users from UserBuilder', () => {
    render(<App/>);
    const displayedImage = document.querySelector("img") as HTMLImageElement;

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(displayedImage.alt).toContain('Avatar');
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
});
