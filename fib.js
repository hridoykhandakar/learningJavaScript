function fib(number) {
  let arr = [];

  if (number === 1) {
    arr = [0];
  } else if (number === 2) {
    arr = [0, 1];
  } else {
    arr = [0, 1];
  }
  for (let i = 2; i < number; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fib(9));
