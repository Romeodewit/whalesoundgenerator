const input = `Hope you have a really nice day.`;

const vowels = ['a', 'e', 'o', 'u', 'i'];

let resultArray = [];

for ( let inputIndex = 0; inputIndex < input.length; inputIndex++) { 
  for( let vowel = 0; vowel < vowels.length; vowel++) {
     if (input[inputIndex] === vowels[vowel]) {
       if (input[inputIndex] === 'e') {
         resultArray.push('ee');
       } else if (input[inputIndex] === 'u') {
         resultArray.push('uu');
       } else {
         resultArray.push(input[inputIndex]);
       }
     }
  }
}

resultArray = resultArray.join("")

console.log(resultArray.toUpperCase())