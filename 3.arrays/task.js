// Задача 1, вариант 1

// function compareArrays(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
// }

// console.log(compareArrays([1, 2, 3], [1, 2, 3]));
// console.log(compareArrays([1, 2], [1, 2, 3]));
// console.log(compareArrays([1, 2, 3], [3, 2, 1]));
// console.log(compareArrays([0, 1, 2], [0, 1]));
// console.log(compareArrays([0, 1], [0, 1, 2]));
// console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));

// Задача 1, вариант 2

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let compareResult = [];
    compareResult.push(arr1[i] === arr2[i]);
    
    if (compareResult.includes(false)) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [3, 2, 1]));
console.log(compareArrays([0, 1, 2], [0, 1]));
console.log(compareArrays([0, 1], [0, 1, 2]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));

module.exports = {
  compareArrays
}

// function getUsersNamesInAgeRange(users, gender) {
//   return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, user, index, arr)=> {
//     acc += user;
//     if(index === arr.length - 1){
//       return acc / arr.length;
//     }
//     return acc;
//   }, 0);
// }

function getUsersNamesInAgeRange(users, gender) {
  let genderCount = 0;
  let genderAgeSum = 0;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].gender === gender) {
      genderCount++;
      genderAgeSum += users[i].age;
    }
  }

  if (genderCount > 0) {
    return genderAgeSum / genderCount;
  }
  
  return 0;
}

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]

console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0


module.exports = {
  getUsersNamesInAgeRange
}