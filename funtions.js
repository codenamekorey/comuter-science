let array = [2, -2, 4, 9];


function addToZero(arr) {

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        return true 
      } 
    } 
    }
    }
  }

console.log(addToZero(array));



function isUnique(str) {
    let uniqueStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueStr.includes(str[i])) {
        return false
      } else {
        uniqueStr += str[i]
      }
    }
    return true
  }

  console.log(isUnique("Korey"))

  function findTheLongestWord(str, str2){
    if (str.length > str2.length){
        console.log(str)
    } if(str2.length > str.length){
        console.log(str2)
    } 
  }
  findTheLongestWord('korey', 'tinaaa')

  function isPangram(str){
    let group = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = str.toLowerCase();
    
    
    for (let i = 0; i < group.length; i++) {
      if(arr.indexOf(group[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram('ab cde fghij klmno pqrstuvw xyz'))

  
