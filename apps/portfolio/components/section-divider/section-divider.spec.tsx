import { render } from '@testing-library/react';

import SectionDivider from './section-divider';

describe('SectionDivider', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SectionDivider />);
        expect(baseElement).toBeTruthy();
    });
});
