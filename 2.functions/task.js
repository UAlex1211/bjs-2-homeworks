function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;

  if (arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);
    sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum,
    );

    let avg = sum / arr.length;
    avg = Number(avg.toFixed(2));

    return { min: min, max: max, avg: avg };

  } else {
    return 0;
  }
}

getArrayParams(1, 2, 3, -100, 10);


function summElementsWorker(...arr) {
  let sum = 0;
  
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;

  } else {
    return 0;
  }
}

summElementsWorker(10, 10, 11, 20, 10);


function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;

  if (arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);

    let dif = max - min;

    return dif;

  } else {
    return 0;
  }
}

differenceMaxMinWorker(10, 10, 11, 20, 10);


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    let difEvenOdd = sumEvenElement - sumOddElement;

    return difEvenOdd;

  } else {
    return 0;
  }
}

differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 ===0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }

    let avg = sumEvenElement / countEvenElement;
    
    return avg;

  } else {
    return 0;
  }
}

averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

makeWork(arr, summElementsWorker);