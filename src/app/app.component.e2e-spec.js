"use strict";

describe('App Tests', () => {
    beforeEach(function () {
        browser.get('');
    });

    it('should have <div class="main">', () => {
        let main = element(by.css('div.main'));
        expect(main.isPresent()).toEqual(true);
    });
});
