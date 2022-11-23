describe ('payments test with setup and tear-down', function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        //Possibly should have done the '0' edge cases inside of a different describe...


    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {

        submitPaymentInfo();

        console.log(allPayments);

        // console.log(Object.keys(allPayments));

        // console.log(Object.keys(allPayments['payment1']))

        expect(Object.keys(allPayments).length).toEqual(1);

        expect(Object.keys(allPayments['payment1']).length).toEqual(3);

        expect(allPayments['payment1']['billAmt']).toEqual('100');
        expect(allPayments['payment1']['tipAmt']).toEqual('20');
        expect(allPayments['payment1']['tipPercent']).toEqual(20);

    });

    it('should increment paymentId each time submitPaymentInfo(evt) occurs, unless the fields are empty', function () {

        submitPaymentInfo();

        // console.log(paymentId);

        expect(paymentId).toEqual(1);

        billAmtInput.value = 20;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        // console.log(paymentId);
        // console.log(allPayments);

        expect(paymentId).toEqual(2);

        billAmtInput.value = '';
        tipAmtInput.value = '';

        submitPaymentInfo();

        // console.log(paymentId);
        // console.log(allPayments);

        expect(paymentId).toEqual(2); // previous entry is empty, so should not increment

    });

    it('should create a new payment with createCurPayment(), unless either fields are left empty', function () {

        expect(createCurPayment()).toEqual({
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        });

        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual();

        billAmtInput.value = '1';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual();

        billAmtInput.value = '';
        tipAmtInput.value = '1';

        expect(createCurPayment()).toEqual();

    });

    it('should append the payment table with the current payment when appendPaymentTable(curPayment) is called', function () {

        let curPayment = createCurPayment();

        // console.log(curPayment);

        // console.log(allPayments);

        allPayments['payment1'] = curPayment

        // console.log(allPayments);

        appendPaymentTable(curPayment);

        let currentTDList = document.querySelectorAll('#paymentTable td')

        // console.log(currentTDList);

        expect(currentTDList.length).toEqual(4);
        expect(currentTDList[0].innerText).toEqual('$100');
        expect(currentTDList[1].innerText).toEqual('$20');
        expect(currentTDList[2].innerText).toEqual('20%');
        expect(currentTDList[3].innerText).toEqual('X');

    });

    it('should update #summaryTable when updateSummary() is run with multiple inputs', function () {

        // submitPaymentInfo();

        // console.log(allPayments);
        // console.log(paymentId);
        // console.log(summaryTds);

        // let summaryTable = document.querySelectorAll('#summaryTable td');

        // console.log(summaryTable);
        // console.log(summaryTable[0]);
        // console.log(summaryTable[0].innerText);

        // expect(summaryTable[0].innerText).toEqual('$100');

        submitPaymentInfo();
        // console.log(summaryTds);

        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('20%');



        billAmtInput.value = 20;
        tipAmtInput.value = 20;

        submitPaymentInfo();
        // console.log(summaryTds);

        expect(summaryTds[0].innerText).toEqual('$120');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('60%');



        billAmtInput.value = 20;
        tipAmtInput.value = 0;

        submitPaymentInfo();
        // console.log(summaryTds);

        expect(summaryTds[0].innerText).toEqual('$140');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('40%');



        billAmtInput.value = 0;
        tipAmtInput.value = 20;

        submitPaymentInfo();
        // console.log(summaryTds);

        expect(summaryTds[0].innerText).toEqual('$140');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('40%');



        billAmtInput.value = 0;
        tipAmtInput.value = 0;

        submitPaymentInfo();
        // console.log(summaryTds);

        expect(summaryTds[0].innerText).toEqual('$140');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('40%');

    })




    afterEach ( function() {

        // billAmtInput.value = ''
        // tipAmtInput.value = ''
        // ^Edit the variables directly, not the items in the DOM.

        // vLike this.

        paymentId = 0;
        allPayments = {}
        paymentTbody.innerHTML = ''

        // let resetPaymentBody = document.querySelector('#summaryTable tbody')

        // console.log(resetPaymentBody);

        // resetPaymentBody.innerHTML = ''

        document.querySelector('#summaryTable tbody').innerHTML = ''


    })




})