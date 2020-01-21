(function(){
  "use strict";
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }

  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }

  function isVowel(a){
    if(a.length > 1) return false;
    let flag = false;
    //Vowels
    const vowels = ['a','e','i','o','u'];
    vowels.forEach(function(value,index,vowels){
      if(a === value){
        flag = true;
      }
    })
    return flag;
  }

  /*  sum takes an array and returns the sum */
  function sum(n){
    return n.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    })
  }

  /* multipy takes an array and returns the result */
  function multiply(n){
    return n.reduce(function(previousValue,currentValue){
      return previousValue * currentValue;
    })
  }

  /* reverse takes a string and returns a reversed string */
  function reverse(keyword){
    if(keyword.length == 0) return '';
    let lastChar = keyword.substring(keyword.length-1);
    let remaining = keyword.substring(0,keyword.length-1);
    return lastChar +""+ reverse(remaining);
  }

  /* findLongestWords and returns the longest word */
  function findLongestWords(words){
    let longestWord = '';
    words.forEach(function(value,index,words){
      if(longestWord.length < value.length)
        longestWord = value;
    })
    return longestWord;
  }

  /* filterLongWords and returns an array of words greate than i */
  function filterLongWords(words,i){
    let filter = [];
    words.filter(function(value){
      if(value.length > i){
        filter.push(value)
      }
    })

    return filter;
  }


  const a = [6,2,4,2,2];

  function multiply5(){
    return a.map(function(value,i,array){
      return value * 5;
    })
  }

  function filterTwo(){
    return a.filter(function(value,i,array){
      return (value == 2)
    })
  }

  function reduceFunction(){
    return a.reduce(function(previousValue,currentValue){
      return previousValue - currentValue;
    })
  }

  /** list of test suite using mocha */
  describe("test suite using mocha ",function(){
    it("maxOfThree(2,3,4) is 4",function(){
      assert.equal(maxOfThree(2, 3, 4),4)
    })

    it("sum([2,2,4]) is 8",function(){
      assert.equal(sum([2,2,4]),8);
    })

    it("multiply([2,2,4) is 16",function(){
      assert.equal(multiply([2,2,4]),16);
    })

    it("reverse('lamhot') is tohmal",function(){
      assert.equal(reverse("tohmal"),"lamhot")
    })

    it("reduce([175,75,25]) is -4",function(){
      assert.equal(reduceFunction([175,75,25]),-4)
    })

    it("filterTwo() is [ 2, 2, 2 ]",function(){
      assert.equal(filterTwo().toString(),[2,2,2])
    })

    it("multiply5  is [ 30, 10, 20, 10, 10 ]]",function(){
      assert.equal(multiply5().toString(),[ 30, 10, 20, 10, 10 ])
    })

  })

}());
