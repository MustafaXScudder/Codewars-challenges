//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Input = ["Ryan", "Kieran", "Jason", "Yous"]
//Output = ["Ryan", "Yous"]

//Input = ["Peter", "Stephen", "Joe"]
//Output = []
//Input strings will only contain letters.
//Note: keep the original order of the names in the output.

function friend(friends) {
  // Filter the array to include only names that have exactly 4 letters
  return friends.filter(name => name.length === 4);
}

// friends is an array of names- gives you an idea of what tools you have access too
//exactly 4 characters in name to pass
// if more or less than 4 characters return false
// if the name is in the friends array return true
// ["Chad", "Bob", "Alice", "johnathan", "Rex"] //["chad"]

// take friends array
// returning array with only values containing 4 characters

function friend(friends){

  return friends.filter((word) => word.length === 4)
}

