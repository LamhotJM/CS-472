function NTH(list, index) {
  return listToArray(list)[index];
}

function nthNextMethod(list, index) {
  while (list !== null) {
    if (list.value !== undefined) {

      if (index-- === 0) {
        return list.value;
      }
    }
    list = list.rest;

  }

}

function nth(list, index) {
  let i = 0;
  while(list!= null && list.value != null) {
    if (i == index)
    {
      return list.value;
    }
    list = list.rest;
    i++;
  }
  return null;
}


function recursiveNth(list, index) {
  if (index === 0)
    return list.value;

  return recursiveNth(list.rest, --index);

}

console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));
console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1));

console.log("==============================================");
