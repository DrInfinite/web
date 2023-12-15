import { render } from '@testing-library/react';

import SubmitBtn from './submit-btn';

describe('SubmitBtn', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SubmitBtn />);
        expect(baseElement).toBeTruthy();
    });
});
