const arrayToList = function(array) {
    if (array.length === 0) {
      return null;
    } else {
      const firstElement = array.shift();
      const element = {};
      element.value = firstElement;
      element.rest = arrayToList(array);
      return element;
    }
  }
  
  const listToArray = function(list) {
    return convert(list, []);
    function convert(list, array) {
      if (!list) {
        return array;
      } else {
        array.push(list.value)
        return convert(list.rest, array);
      }
    }
    
  }
  
  const prepend = function(element, list) {
    return {
      value: element,
      rest: list
    };
  }
  
  const nth = function(list, index) {
    for (let i = 0; true; i++) {
      if (!list) {
        return undefined;
      }else if (i === index) {
        return list.value;
      } else {
        list = list.rest;
      }
    }
  }
  
  let object = arrayToList([1,2,3,4]);
  nthValue = nth(object, 3);
  object = prepend(1, object);
  console.log(nthValue);
  console.log(JSON.stringify(object));
  console.log(listToArray(object));