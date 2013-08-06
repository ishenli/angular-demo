describe('PhoneCat App', function() {


    describe('Phone detail view', function() {

        beforeEach(function() {
            browser().navigateTo('../../app/index.html#/phones/nexus-s');
        });


        it('should display placeholder page with phoneId', function() {
            expect(binding('phoneId')).toBe('nexus-s');
        });
    });


    describe('Phone detail view', function() {

        beforeEach(function() {
            browser().navigateTo('../../app/index.html#/phones/nexus-s');
        });


        it('should display placeholder page with phoneId', function() {
            expect(binding('phoneId')).toBe('nexus-s');
        });
    });
});