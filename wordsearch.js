const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  return false;
}

const transpose = function(letters) {
  let newArr = []

  for (let x = 0; x < letters[0].length; x++) {
    for (let y = 0; y < letters.length; y++) {
      if (letters[y])
     newArr += (letters[y][x]) + " ";
    }
    newArr += "\n";
  }
 return newArr.trim();
};


const wordsToSearch = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]

//console.log(wordsToSearch)
// ~~ TURN THE MATRIX
const secondmatrix = transpose(wordsToSearch)

// ~~ CREATE A NEW ARRAY TO TEST
let testingarr = []

// ~~ AN TEMP ARRAY TO PUSH INTO THE NEW ARRAY
let temparr = []

// ~~ SPLIT THE TURNED MATRIX
const testing  = secondmatrix.split(" ").join("").split('/n')

let index = 0
// ~~ FINDING OUT HOW MANY ROWS IN ARRAY AND LOOPING TO THAT AMOUNT
for (let j = 0; j < wordsToSearch.length; j++) {
  // ~~ RESETING THE TEMP ARRAY
  temparr = []
  // ~~ FINDING OUT HOW LONG A ROW IS AND CREATING A NEW ARRAY THE SAME LENGHT AND PUSHING LETTERS INTO IT
  for (let i = 0; i < wordsToSearch[0].length; i++) {
    
    temparr.push(testing.slice(index, index + 1))
    index++
  }

  // ~~ MOVING NEW ROW INTO NEW MATRIX
  testingarr.push(temparr)
}

// console.log(testingarr[0])


console.log(wordSearch(testingarr[0], 'LARRY'))

// const wordSearch = (letters, word) => { 
//     let newestWord = []
//     const verticalWords = transpose(letters);
//    console.log(verticalWords);
//    //CREATE VERTICAL WORDS VARIABLE AND THEN TRY VERTICAL JOIN WITH MAP ON THAT
//     const verticalJoin = verticalWords.map(ws => ws.join(''))
//     for (const w of verticalWords);
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (let l =0; l < horizontalJoin[0].length; l++) {
//         if (horizontalJoin.includes(word)){    
//           return true;
//         } else if (verticalJoin.includes(word)) {
//           return true;
//         } else {
//         return false;
//       }
//     }
//     };


// const transpose = function(letters) {
//   let newArr = []

//   for (let x = 0; x < letters[0].length; x++) {
//     for (let y = 0; y < letters.length; y++) {
//       if (letters[y])
//      newArr += (letters[y][x]) + " ";
//     }
//     newArr += "\n";
//   }
//  return newArr.trim();
// };



module.exports = wordSearch


// const wordsToSearch = [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]

//  console.log(transpose(wordsToSearch));


  // wordSearch(wordsToSearch, 'LARRY')
// const transpose = function(letters) {
//     const resultletters = [];
//     //for each column go through all rows and put into new row
//     // then push new row into new letters
//     for(let col = 0; col < letters[0].length; col++) {
//       let newRow = [];
//       for(let row = 0; row < letters.length; row++){
//         newRow.push(letters[row][col]);
//       }
//       resultletters.push(newRow);
//     }
  
//     return resultletters;
//   };
  



// const wordSearch = (letters, word) => { 
//     const splitWords = []
//     //const horizontalJoin = letters.map((ls) => ls.split("").join(''))
//     const horizontalJoin = function(ls){
//         letters.map(ls) 
//         ls.split('').join('')
//         splitWords.push(ls)
//         return ls
//     }
//     console.log("HJ",horizontalJoin);
//     for (const l of horizontalJoin) {
//         if (horizontalJoin[l].includes(word)) {
//         console.log("after", horizontalJoin[l]);
//         return true;
//         } else return false;
//     }
    
// }

