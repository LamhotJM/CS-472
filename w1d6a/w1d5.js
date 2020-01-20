
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  ;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

/* Function 4, using regular expression will check lower case and uppercase*/
function isVowel(a) {
  if (a.match(/[aeiouAIUEO]/)) {
    return true;
  }
  return false;
}

/*Function 5a*/
function sum(a) {
  return  a.reduce(function (preVal, elem) {
    return preVal + elem;
  });

}

// reverse input string
function reverse(input) {

  /*let ret= null;
  for(let i=input.length-1; i>=0; i--)
  {
    ret+= input[i];
  }

  return ret;*/

  const split = input.split("");
  const reverse = split.reverse();
  const combine = reverse.join("");
  return combine;
}

function compareObjects(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  if (arr1.length!= arr2.length) return false;

  for(let i=0; i<arr1.length;i++)
  {
    if(arr1[i]!=arr2[i])
    {
      return false;
    }
  }
  return  true;

}

function slideJS() {

  const a = [3,3,4];
  // return map
  const b = a.map(function(elem, i, array) {
    return elem * 10;



  })// expected output [30,30,40]
  console.log(b.toString());

  console.log("Expected output of [3,3,4] -> [30,30,40] ->  " + myFunctionTest(30,30,40, b.toString()));


  //select base on specific criteria
  const c = a.filter(function(elem, i, array){
    return elem === 3;
  });

  return a.concat(b).concat(c);
}

/* Function 5b*/
function multiply(a) {
  return  a.reduce(function (preVal, elem) {
    return preVal * elem;
  });
}

//function findLongestWord() , @input is array and return type string
function findLongestWord(arr) {
  if (arr.length > 0) {
    const long_word = arr.sort(function (a, b) { return b.length - a.length; })[0];
    return long_word.length;
  }
  return null;
}

//filterLongWords() input are an array of words and an integer and returns the array of words that are longer than a
// using filter
function filterLongWords(words, a) {
  return words.filter(word => word.length >= a);
}

// Test suite -> list of test cases
function testSuite () {
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  /* Test Function 4 */
  console.log("Expected output of isVowel(true,'a') is true  " + myFunctionTest(true, isVowel('a')));
  console.log("Expected output of isVowel(true,'A') is true  " + myFunctionTest(true, isVowel('A')));
  console.log("Expected output of isVowel(false,'b') is false  " + myFunctionTest(false, isVowel('b')))
  /* Test Function 5a*/
  console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
  /* Test Function 5a*/
  console.log("Expected output of multiply([1, 2, 3, 4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

  //reverse
  console.log("Expected output of reverse(abc) is cba  " + myFunctionTest("cba", reverse("abc")))

// testing for find longest word
  console.log("Expected output of findLongestWord([lam,hot,soa,siagian]) is 7 " +
    myFunctionTest(7, function () {
      return findLongestWord(["lam", "hot", "soa", "siagian"]);
    })
  );

  console.log(findLongestWord(["lam", "hot", "soa", "siagian"]));
//filterLongWords function test
  console.log("Expected output of filterLongWords([\"jambu\", \"buku\", \"bola\", " +
    "\"durian\", \"sirsak\", \"hitam\"], 6) is [durian, sirsak, hitamm] " +
    myFunctionTest("durian", "sirsak", "hitamm", filterLongWords(["jambu", "buku", "bola", "durian", "sirsak", "hitamm"], 5).toString()));

  console.log(function() {return filterLongWords(["jambu", "buku", "bola", "durian", "sirsak", "hitamm"])});
  slideJS()
}

testSuite();
