import { visitAdminPage } from '@wordpress/e2e-test-utils';
 
describe('Sample Plugin', () => {
 
    it('Sample Test', async () => {
        await visitAdminPage( '/' );
        expect(true).toEqual(true);
    });
 
});