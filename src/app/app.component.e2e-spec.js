"use strict";

describe('App Tests', () => {
    beforeEach(function () {
        browser.get('');
    });

    it('should have <div class="container">', () => {
        let main = element(by.css('div.container'));
        expect(main.isPresent()).toEqual(true);
    });
});
