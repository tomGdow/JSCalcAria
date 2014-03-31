jasmine.getFixtures().fixturesPath = '../test/js/spec/fixtures/';

describe("Plus function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should add plus to an input box string value", function () {

        var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("2+");
    }),

    it("should NOT add plus to an input box string value if last character is a plus", function () {

            var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputIdPlus'));
            expect(fixture.value).toBe("2+");
            expect(fixture.value).not.toBe("2++");
    }),

    it("should NOT add plus to an input box string value if last character is a minus", function () {

            var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputIdMinus'));
            expect(fixture.value).toBe("2-");
            expect(fixture.value).not.toBe("2-+");
    }),

    it("should NOT add plus to an input box string value if last character is a multiply", function () {
            var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputIdMultiply'));
            expect(fixture.value).toBe("2*");
            expect(fixture.value).not.toBe("2*+");
        }),

    it("should NOT add plus to an input box string value if last character is a divide", function () {
            var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputIdDivide'));
            expect(fixture.value).toBe("2/");
            expect(fixture.value).not.toBe("2/+");
    }),

    it("should NOT add plus to an input box string value if last character is a modulus", function () {
            var fixture = Jscalc.btn_plus_fn(document.getElementById('myInputIdModulus'));
            expect(fixture.value).toBe("2%");
            expect(fixture.value).not.toBe("2%+");
    })
});

describe("Subtract function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should add minus to an input box string value", function () {

        var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("2-");
    }),

    it("should NOT add minus to an input box string value if last character is a plus", function () {

            var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputIdPlus'));
            expect(fixture.value).toBe("2+");
            expect(fixture.value).not.toBe("2+-");
    }),

    it("should NOT add minus to an input box string value if last character is a minus", function () {

            var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputIdMinus'));
            expect(fixture.value).toBe("2-");
            expect(fixture.value).not.toBe("2--");
    }),

    it("should NOT add minus to an input box string value if last character is a multiply", function () {
            var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputIdMultiply'));
            expect(fixture.value).toBe("2*");
            expect(fixture.value).not.toBe("2*-");
    }),

    it("should NOT add minus to an input box string value if last character is a divide", function () {
            var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputIdDivide'));
            expect(fixture.value).toBe("2/");
            expect(fixture.value).not.toBe("2/-");
    }),

    it("should NOT add minus to an input box string value if last character is a modulus", function () {
            var fixture = Jscalc.btn_subtract_fn(document.getElementById('myInputIdModulus'));
            expect(fixture.value).toBe("2%");
            expect(fixture.value).not.toBe("2%-");
    })
});

describe("Multiply function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should add multiply to an input box string value", function () {

        var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("2*");
    }),

    it("should NOT add multiply to an input box string value if last character is a plus", function () {

            var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputIdPlus'));
            expect(fixture.value).toBe("2+");
            expect(fixture.value).not.toBe("2+*");
    }),

    it("should NOT add multiply to an input box string value if last character is a minus", function () {


            var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputIdMinus'));
            expect(fixture.value).toBe("2-");
            expect(fixture.value).not.toBe("2-*");
    }),

    it("should NOT add multiply to an input box string value if last character is a multiply", function () {
            var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputIdMultiply'));
            expect(fixture.value).toBe("2*");
            expect(fixture.value).not.toBe("2**");
    }),

    it("should NOT add multiply to an input box string value if last character is a divide", function () {
            var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputIdDivide'));
            expect(fixture.value).toBe("2/");
            expect(fixture.value).not.toBe("2/*");
    }),

    it("should NOT add multiply to an input box string value if last character is a modulus", function () {
            var fixture = Jscalc.btn_multiply_fn(document.getElementById('myInputIdModulus'));
            expect(fixture.value).toBe("2%");
            expect(fixture.value).not.toBe("2%*");
    })
});

describe("Divide function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should add divide to an input box string value", function () {

        var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("2/");
    }),

    it("should NOT add divide to an input box string value if last character is a plus", function () {

            var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputIdPlus'));
            expect(fixture.value).toBe("2+");
            expect(fixture.value).not.toBe("2+/");
    }),

    it("should NOT add divide to an input box string value if last character is a minus", function () {


            var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputIdMinus'));
            expect(fixture.value).toBe("2-");
            expect(fixture.value).not.toBe("2-/");
    }),

    it("should NOT add divide to an input box string value if last character is a multiply", function () {
            var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputIdMultiply'));
            expect(fixture.value).toBe("2*");
            expect(fixture.value).not.toBe("2*/");
    }),

    it("should NOT add divide to an input box string value if last character is a divide", function () {
            var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputIdDivide'));
            expect(fixture.value).toBe("2/");
            expect(fixture.value).not.toBe("2//");
    }),

    it("should NOT add divide to an input box string value if last character is a modulus", function () {
            var fixture = Jscalc.btn_divide_fn(document.getElementById('myInputIdModulus'));
            expect(fixture.value).toBe("2%");
            expect(fixture.value).not.toBe("2%/");
    })
});

describe("Modulus function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should add divide to an input box string value", function () {

        var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("2%");
    }),

    it("should NOT add divide to an input box string value if last character is a plus", function () {

            var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputIdPlus'));
            expect(fixture.value).toBe("2+");
            expect(fixture.value).not.toBe("2+%");
    }),

    it("should NOT add divide to an input box string value if last character is a minus", function () {


            var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputIdMinus'));
            expect(fixture.value).toBe("2-");
            expect(fixture.value).not.toBe("2-%");
    }),

    it("should NOT add divide to an input box string value if last character is a multiply", function () {
            var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputIdMultiply'));
            expect(fixture.value).toBe("2*");
            expect(fixture.value).not.toBe("2*%");
    }),

    it("should NOT add divide to an input box string value if last character is a divide", function () {
            var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputIdDivide'));
            expect(fixture.value).toBe("2/");
            expect(fixture.value).not.toBe("2/%");
    }),

    it("should NOT add divide to an input box string value if last character is a modulus", function () {
            var fixture = Jscalc.btn_modulus_fn(document.getElementById('myInputIdModulus'));
            expect(fixture.value).toBe("2%");
            expect(fixture.value).not.toBe("2%%");
    })
});

describe("Decimal Point function", function () {

    beforeEach(function () {
                loadFixtures('myfixture.html');
    });

    it("should add a decimal point to an input box string value", function () {

                var fixture = Jscalc.btn_decimal_fn(document.getElementById('myInputId'));
                expect(fixture.value).toBe("2.");
    }),

    it("should NOT add a decimal point an input box string value if last character is a decimal point", function () {

              var fixture = Jscalc.btn_decimal_fn(document.getElementById('myInputIdDecimal'));
              expect(fixture.value).toBe("2.");
              expect(fixture.value).not.toBe("2.%");
    })
});

describe("Cancel Function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should set the string value of an input string to no content", function () {

        var fixture = Jscalc.btn_cancel_fn(document.getElementById('myInputId'));
        expect(fixture.value).toBe("");
        expect(fixture.value).not.toBe("2");
    })
});

describe("Equals-to Function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should evaluate a string ", function () {

        var fixture = document.getElementById('myInputIdEquals');

        var newFixture =  Jscalc.btn_equals_fn(fixture);

        expect(newFixture.value).toBe("4");
        expect(fixture.value).not.toBe("2+2");
    })
});

describe("Cancel Error Function", function () {

    beforeEach(function () {
        loadFixtures('myfixture.html');
    });

    it("should remove last added character to input value", function () {

        var fixture = document.getElementById('myInputIdEquals');
        var newFixture =  Jscalc.btn_cancelError_fn(fixture);

        expect(newFixture.value).toBe("2+");
        expect(fixture.value).not.toBe("2+2");
    })
});

