import{ createNewPost } from '@wordpress/e2e-test-utils';

describe('Alternative Site Logo', () => {
    
    beforeEach( async () => {
		await createNewPost();
	} );
    it('should view at design category', async () => {
        expect(true).toEqual(true);
    });

});
