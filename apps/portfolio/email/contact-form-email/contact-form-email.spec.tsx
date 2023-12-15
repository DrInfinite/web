import { render } from '@testing-library/react';

import ContactFormEmail from './contact-form-email';

describe('ContactFormEmail', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ContactFormEmail />);
        expect(baseElement).toBeTruthy();
    });
});
