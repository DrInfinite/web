import { render } from '@testing-library/react';

import ThemeSwitch from './theme-switch';

describe('ThemeSwitch', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ThemeSwitch />);
        expect(baseElement).toBeTruthy();
    });
});
