// you need a combo of a grade and number of projects
//the overall scorce and the project number is the 
 //If exam is greater than 90 OR projects are more than 10:
    //Return 100

  //Else if exam is greater than 75 AND projects are at least 5:
    //Return 90

  //Else if exam is greater than 50 AND projects are at least 2:
    //Return 75

  //Else:
    //Return 0

//function finalGrade(exam, projects) {
  //if (exam > 90 || projects > 10) {
   // return 100;
 // } else if (exam > 75 && projects >= 5) {
  //  return 90;
 // } else if (exam > 50 && projects >= 2) {
  //  return 75;
 // } else {
  //  return 0;
 // }
//}

const finalGrade = (exam, projects) =>
  (exam > 90 || projects > 10) ? 100 :
  (exam > 75 && projects >= 5) ? 90 :
  (exam > 50 && projects >= 2) ? 75 : 0;
