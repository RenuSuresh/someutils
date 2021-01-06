function map(arr, cb) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    let modifiedElement = cb(arr[i], i, arr);
    resultArray.push(modifiedElement);
  }
  return resultArray;
}

function filter(arr, callback) {
  const resultantArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultantArray.push(arr[i]);
    }
  }
  return resultantArray;
}

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function all(arr, callback) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
}
