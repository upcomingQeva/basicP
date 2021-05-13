/* Task1:
make this work(repeat 3 times the contents of an array):
repeat([1,2,3]) 
[1,2,3,1,2,3,1,2,3]
*/


/*use Array.from to create an array of array you want to repeat,
then flatten using[].concat and spread. */
let repeat=[1,2,3];
const makeRepeated=(arr,repeats)=>
[].concat(...Array.from({length:repeats},()=>arr));
console.log(makeRepeated(repeat,3));

/*Task2:
Make this work (no vowels, lowercase except the first letter):
reformat("MAY you HAPPY") 
*/

//RegExp
//remove all vowels from a string unless it is the first letter of a word.
//lowecase each letter except the first one
function formatString(str) {
    return str
      .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))//all to lowercase
      .replace(/^[^ ]/g, match => (match.toUpperCase()))//first to uppercase
      .replace(/[aeiou]/g,'')
    }

  
  let text = "MAY YOU HAPPY";
  console.log(formatString(text));

  