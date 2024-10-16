const twoDimensionalArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
];

console.log(validSolution(twoDimensionalArray));


function  validSolution(twoDimensionalArray) {
  const sudokuSets = {};
  //Создание set для строк
  for (let i = 0; i < 9; i++) {
    sudokuSets[`setRow${i}`] = new Set();
  }
  //Создание set для колонок
  for (let i = 0; i < 9; i++) {
    sudokuSets[`setColumn${i}`] = new Set();
  }
  //Создание set для квадратов
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sudokuSets[`setBlock${i}${j}`] = new Set();
    }
  }
  //Проход по массиву и заполнение set
  for (let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {

      sudokuSets[`setRow${i}`].add(twoDimensionalArray[i][j])
      sudokuSets[`setColumn${j}`].add(twoDimensionalArray[i][j])

      const blockRow = Math.floor(i / 3);
      const blockCol = Math.floor(j / 3);

      sudokuSets[`setBlock${blockRow}${blockCol}`].add(twoDimensionalArray[i][j])
    }
  }
  //Проверка условий на соответствия требованиям 
  for (const set in sudokuSets) {

    if((sudokuSets[set].size != 9 || !checkSetElements(sudokuSets[set]))) {
      return false;
    }
  }
  return true;
}

  function checkSetElements(set) {
    for (const value of set) {    
      if (value < 1 || value > 9) {
        return false;
      }
    }
    return true;
  }