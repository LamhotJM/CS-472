(function () {
  "use strict";


  function nth(list, index) {
    let i = 0;
    while (list != null && list.value != null) {
      if (i == index) {
        return list.value;
      }
      list = list.rest;
      i++;
    }
    return null;
  }


  function recNth(list, index) {
    if (index === 0)
      return list.value;

    return recNth(list.rest, --index);

  }

  console.log(recNth({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }

  }, 0));
  console.log(nth({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }

  }), 0);

  describe("Test suite using mocha for NTH and Recursive NTH", function () {
    it("nth({\n" +
      "    value: 1,\n" +
      "    rest: {\n" +
      "      value: 2,\n" +
      "      rest: {\n" +
      "        value: 3,\n" +
      "        rest: null\n" +
      "      }\n" +
      "    }\n" +
      "\n" +
      "  }, 0) -> 1", function () {
      assert.equal(nth({
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }

      },0), 1)
    })

    it("recNth({\n" +
      "    value: 1,\n" +
      "    rest: {\n" +
      "      value: 2,\n" +
      "      rest: {\n" +
      "        value: 3,\n" +
      "        rest: null\n" +
      "      }\n" +
      "    }\n" +
      "\n" +
      "  }, 0) -> 1", function () {
      assert.equal(recNth({
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }

      }, 0),1)
    })

  });

}());
