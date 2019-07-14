const deepConpare = function(object1, object2) {
    const obj1keys = Object.keys(object1);
    const obj2keys = Object.keys(object2);
    if (obj1keys.length !== obj2keys.length) {
      return false;
    }
    for (let i = 0; i < obj1keys.length; i++) {
      const key = obj1keys[i];
      if (obj2keys.findIndex(e => e === key) === -1) {
        return false;
      }
      if ((typeof object1[key]) !== (typeof object2[key])) {
        return false;
      }
      if (typeof object1[key] === 'object') {
        if (!deepConpare(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  let obj = {here: {is: "an"}, object: "a"};
  console.log(Object.keys(obj));
  console.log(deepConpare(obj, {here: {is: "an"}, object: "a"}));