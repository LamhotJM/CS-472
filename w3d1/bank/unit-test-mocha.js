(function() {
  "use strict";
  const accObj = new Account(223);
  describe("Account class test", function() {
    context("add balance function test", function() {
      accObj.deposit(200);
      it("unit test for get balance", function() {
        assert.equal(accObj.getBalance(), 390);
      });
    });

    context("withdraw function test , reduce from 200 to 190", function() {
      accObj.deposit(200);
      accObj.withdraw(10);
      it("unit test for withraw", function() {
        assert.equal(accObj.getBalance(), 390);
      });

    });

    context("unit test get number and toString", function() {

      it("unit test get number 223", function() {
        assert.equal(accObj.getNumber(), 223);
      });

      it("unit test to string Account 223: balance 390", function() {
        assert.equal(accObj.toString(), 'Account 223: balance 390');
      });


    });
  });
})();
