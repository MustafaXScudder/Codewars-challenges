//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  // Setup array to tabulate 
 let array = [];
  
  // Setup for loop to iterate from n to 0
  for (let i = n; i > 0; i--) {
    // Push the numbers to the tabulation array
    array.push(i);
  }
  // Return the tabulation array once done iterating
  return array;
};
