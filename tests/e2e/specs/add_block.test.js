import{ createNewPost, toggleGlobalBlockInserter, insertBlock, getEditedPostContent } from '@wordpress/e2e-test-utils';

describe('Alternative Site Logo', () => {
    
    beforeEach( async () => {
		await createNewPost();
	} );
    it('should insert by name', async () => {
        // await toggleGlobalBlockInserter();
        await insertBlock( 'Alternative Site Logo' );
        expect( await getEditedPostContent() ).toMatchSnapshot();
    });

});
