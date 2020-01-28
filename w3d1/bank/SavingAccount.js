class SavingsAccount extends Account {

  /**
   *
   * @param number
   * @param interest
   */
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  /**
   *
   * @returns {*}
   */
  getInterest() {
    return this._interest;
  }

  /**
   *
   * @param val
   */
  setInterest(val) {
    this._interest = val;
  }

  /**
   *
   * @returns {string}
   */
  addInterest() {
    const balance = super.getBalance();
    const intAmt = (balance * this._interest) / 100;
    super.deposit(intAmt);
    return (
      "Savings account: " +
      this._number +
      " balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }

  /**
   *
   * @returns {string}
   */
  toString() {
    return (
      "Savings account " +
      this._number +
      ": balance " +
      this._balance +
      " interest: " +
      this._interest
    );
  }

  endOfMonth() {
    console.log(this.addInterest());
  }
}
