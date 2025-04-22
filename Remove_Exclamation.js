//Remove all exclamation marks from the end of sentence.
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

// identifying exclamation points  
//We are going to iterate through the string to find all exclamation points

// be able to remove the exclamation points from the end of the string

// and return the result

//short solution
//function remove(string) {  

 // return string.replace(/!+$/,'');
//}
function remove(string) {
let i = string.length - 1;
while(i >= 0 && string[i] === '!') {
i--;
}
return string.substring(0, i + 1);
}
//Loop Through ending Exclamation Marks: Decrement the index i while the character at position i is an exclamation mark. This loop stops when a non-exclamation mark character is encountered or the start of the string is reached.
//Construct Result String: Use substring to extract the part of the string from the start up to including the last non-exclamation mark character.
//Return Result: The resulting string will have all trailing exclamation marks removed, while any exclamation marks in the middle or beginning of the string remain unchanged.



//short solution that iterates through the string and focuses on "!"
//This is a good way to make changes, to specific parts of the 
function remove(string) {
  return string.replace(/!+$/, '');
}
