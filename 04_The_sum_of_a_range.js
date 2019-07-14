const sum = function(numbers) {
    let sum = 0;
    numbers.forEach(n => {
      sum += n; 
    });
    return sum;
  }
  
  const range = function(start,end, lamda = 1) {
    const result = [];
    if (lamda > 0) {
      for (;start <= end; start = start + lamda) {
        result.push(start);
      }
    } else {
      for (;start >= end; start = start + lamda) {
        result.push(start);
      }
    }
    console.log(result);
    return result;
  }
  
  console.log(sum(range(1, 4, 2)));
  console.log(sum(range(5, 2, -2)));