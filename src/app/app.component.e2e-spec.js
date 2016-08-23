describe('App Tests', function () {

    let expectedMsg = 'Spotify App';

    beforeEach(function () {
        browser.get('');
    });

    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('title')).getText()).toEqual(expectedMsg);
    });
});
