import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./FormBuilder";

it('should render form build by FormBuilder', () => {
    const {container} = render(<App />);
    const firstName = container.querySelector((`input[name="firstName"]`));
    const lastName = container.querySelector((`input[name="lastName"]`));
    const email = container.querySelector((`input[name="email"]`));
    const button = container.querySelector('button');

    expect(screen.getByRole('heading', {name: /sign up/i })).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
