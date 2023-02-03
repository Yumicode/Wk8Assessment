// 1) Sum to Zero //
//Write a function that takes in an array of numbers. 
//The function should return True if any two numbers in list sum to 0, 
//and false otherwise.

let array = [0, 68, -58, -9, 1, 9] 

let value = false

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true
      } 
    }
  }
}
console.log(value)  // output = true as -9+9=0
//////////////////////////////////////////////////////////////////////////////////////////////
// in this problem, each of these calls is added to call stack and takes up actual memory.  //
// So it takes O(n) space.                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
2) Unique Characters
let bool = true;

function hasUniqueChars(str) { 
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) { 
      if (str[i] === str[j]) {
        bool = false
      }
    }
  }
  return bool
}
console.log(hasUniqueChars("Mahalo"))    //output: false
console.log(hasUniqueChars("Aloha"))     //output: true

//////////////////////////////////////////////////////////////////////////////////////////////
// it takes O(1) space.                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////
3) Pangram Sentence
const str = 'The quick brown fox jumps over the lazy dog';  //output: true
// const str = 'The quick brown fox jumps over the lazy cat';  //output: false
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));
//////////////////////////////////////////////////////////////////////////////////////////////
// in this problem, each of these calls is added to call stack and takes up actual memory.  //
// So it takes O(1) space.                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
// 4) Longest Word//
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWord("Humuhumunukunukuapua`a 22 letters and the name of a trigger fish is often said to be the longest word but there is another fish called lauwiliwilinukunuku`oi`oi 25 characters"))
//////////////////////////////////////////////////////////////////////////////////////////////
// it takes O(n) space.                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////

