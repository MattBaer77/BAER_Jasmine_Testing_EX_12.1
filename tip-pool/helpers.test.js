describe ('helpers test **section for sumPaymentTotal with 0 payments** with startup and teardown', function() {

    beforeEach(function(){

        allPayments = {}
    })

    it('should total billAmt, or tipAmt, or tipPercent with one of the beforeEach payment "type" inputs', function() {

        expect(sumPaymentTotal('billAmt')).toEqual(0);
        expect(sumPaymentTotal('tipAmt')).toEqual(0);
        expect(sumPaymentTotal('tipPercent')).toEqual(0);

    });

    afterEach(function(){
        allPayments = {};
    })

})


describe ('helpers test **section for sumPaymentTotal with one payment** with startup and teardown', function() {

    beforeEach(function(){

        allPayments = {
            payment1: {
                billAmt: '100',
                tipAmt: '20',
                tipPercent: 20
            }
        }
    })

    it('should total billAmt, or tipAmt, or tipPercent with one of the beforeEach payment "type" inputs', function() {

        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

    });

    afterEach(function(){
        allPayments = {};
    })

})


describe ('helpers test **section for sumPaymentTotal with multiple (2) payments** with startup and teardown', function() {

    beforeEach(function(){

        allPayments = {
            payment1: {
                billAmt: '100',
                tipAmt: '20',
                tipPercent: 20
            },
            payment2: {
                billAmt: '400',
                tipAmt: '100',
                tipPercent: 25
            }
        }
    })

    it('should total billAmt, or tipAmt, or tipPercent with one of the beforeEach payment "type" inputs', function() {

        expect(sumPaymentTotal('billAmt')).toEqual(500);
        expect(sumPaymentTotal('tipAmt')).toEqual(120);
        expect(sumPaymentTotal('tipPercent')).toEqual(45);

    });

    afterEach(function(){
        allPayments = {};
    })

})


describe ('helpers test **section for sumPaymentTotal with multiple (3) payments** with startup and teardown', function() {

    beforeEach(function(){

        allPayments = {
            payment1: {
                billAmt: '100',
                tipAmt: '20',
                tipPercent: 20
            },
            payment2: {
                billAmt: '400',
                tipAmt: '100',
                tipPercent: 25
            },
            payment3: {
                billAmt: '20',
                tipAmt: '200',
                tipPercent: 1000
            }
        }
    })

    it('should total billAmt, or tipAmt, or tipPercent with one of the beforeEach payment "type" inputs', function() {

        expect(sumPaymentTotal('billAmt')).toEqual(520);
        expect(sumPaymentTotal('tipAmt')).toEqual(320);
        expect(sumPaymentTotal('tipPercent')).toEqual(1045);

    });

    afterEach(function(){
        allPayments = {};
    })

})


describe ('helpers test **section for calculateTipPercent** with startup and teardown', function() {

    beforeEach(function(){

        billAmt = 100;
        tipAmt = 20;

    })

    it('should calculate the tip percantage from both the billAmt and tipAmt', function() {
        expect(calculateTipPercent(billAmt,tipAmt)).toEqual(20);
    })

    afterEach(function(){
        billAmt = 0;
        tipAmt = 0;
    })

})

describe ('helpers testing appendTd with values from inputs', function() {

    it('should accept a tr, and value and add a new td element to that tr', function(){

        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');

    })

})

// Note - Copied this to see how it works

it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });