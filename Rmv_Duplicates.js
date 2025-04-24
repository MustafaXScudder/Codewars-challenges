//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

//The order of the sequence has to stay the same.

//Examples:

//Input -> Output
//[1, 1, 2] -> [1, 2]
//[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//we need to remove duplicates
//the way i remeber to remove was /'n'+ $/
//what are som alts you can use to get rid of the duplicates?
// "new Set(a)" builds a Set from the array, automatically dropping duplicates but keeping insertion order.
// "[...new Set(a)]" spreads the Set’s values back into a new array and returns it.
function distinct(a) {
  return [...new Set(a)];
}
