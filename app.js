"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTrait(people);
      break;
      default:
      app(people); // restart app
      break;

  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);

}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    displayFamily(person);
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })

    foundPerson = foundPerson[0];
    return foundPerson;
}

function searchByTrait(people){


let displayOption = promptFor("Do you want to search by the persons 'gender', 'height', 'weight', 'eye color' or 'age'?  Or select from 2 to 3 of the prior traits, separated by a comma. Type the option you want or to start over type 'restart'.", chars).toLowerCase();
let filterPeople;

  switch(displayOption){
    case "gender":
    filterPeople = searchByGender(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "age":
    filterPeople = searchByGender(people);
    filterPeople = searchByAge(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "height":
    filterPeople = searchByGender(people);
    filterPeople = searchByHeight(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "weight":
    filterPeople = searchByGender(people);
    filterPeople = searchByWeight(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "eye color":
    filterPeople = searchByGender(people);
    filterPeople = searchByEyes(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "age" + "," + "height":
    filterPeople = searchByGender(people);
    filterPeople = searchByAge(people);
    filterPeople = searchByHeight(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "height" + "," + "weight":
    filterPeople = searchByGender(people);
    filterPeople = searchByHeight(people);
    filterPeople = searchByWeight(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "weight" + "," + "eye color":
    filterPeople = searchByGender(people);
    filterPeople = searchByWeight(people);
    filterPeople = searchByEyes(people);
    displayPeople(filterPeople);
    break;
    case "gender" + "," + "eye color" + "," + "age":
    filterPeople = searchByGender(people);
    filterPeople = searchByEyes(people);
    filterPeople = searchByAge(people);
    displayPeople(filterPeople);
    break;
    case "height":
    filterPeople = searchByHeight(people);
    displayPeople(filterPeople);
    break;
    case "weight":
    filterPeople = searchByWeight(people);
    displayPeople(filterPeople);
    break;
    case "eye color":
    filterPeople = searchByEyes(people);
    displayPeople(filterPeople);
    break;
    case "age":
    filterPeople = searchByAge(people);
    displayPeople(filterPeople);
    break;
    case "restart":
    app(people);
    break;
    
    default:
    return foundPeople;
  }
}

// search by gender
function searchByGender(people) {
    let gender = promptFor("What is the persons gender you are searching for?", maleFemale);
    let foundGender = people.filter(function(person) {
        if (person.gender === gender) {

            return true;
        }
        else {
            return false;
        }
    })

    return foundGender;
}

// search by dob
function searchByBirth(people) {
    let birth = promptFor("What is the date of birth for the person you are searching for? (day month year)", chars);
    let foundDateOfBirth = people.filter(function(person) {
        if (person.birth === birth) {
            return true;
        }
        else {
            return false;
        }
    })

    return foundDateOfBirth;
}

// search by height
function searchByHeight(people) {
    let height = promptFor("What is the height(in inches) of the person you are searching for?", int);

    let foundHeight = people.filter(function(person) {
        if (person.height === height) {
            return true;
        }
        else {
            return false;
        }
    })

    return foundHeight;
}

// search by weight
function searchByWeight(people) {
    let weight = promptFor("What is the weight of the person you are searching for?", int);

    let foundWeight = people.filter(function(person) {
        if (person.weight === weight) {
            return true;
        }
        else {
            return false;
        }
    })

    return foundWeight;
}

// search by eye color
function searchByEyes(people) {
    let eyeColor = promptFor("What is the eye color of the person you are searching for?", chars);

    let foundEyeColor = people.filter(function(person) {
        if (person.eyeColor === eyeColor) {
            return true;
        }
        else {
            return false;
        }    
    })

    return foundEyeColor;
}
 
// search by occupation
function searchByOccupation(people) {
    let occupation = promptFor("What is the occupation of the person you are searching for?", chars);

    let foundOccupation = people.filter(function(person) {
        if (person.occupation === occupation) {
            return true;
        }
        else {
            return false;
        }   
    })

    return foundOccupation;
}

// search by age NEED A FORMULA??
function searchByAge(people) {
    let age = parseInt(promptFor("What is the age of the person you are searching for?", int));

    let foundAge = people.filter(function(person) {
        if (person.age === age) {
            return true;
        }
        else {
            return false;
        }        
    })

    return foundAge;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

  // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
function displayPerson(person) {
    let personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "Gender: " + person.gender + "\n";
    personInfo += "Height: " + person.height + " inches" + "\n";
    personInfo += "Age: " + person.age + "\n";
    personInfo += "Weight: " + person.weight + " lbs." + "\n";
    personInfo += "Occupation: " + person.occupation + "\n";
    personInfo += "Eye Color: " + person.eyeColor + "\n";

    alert(personInfo);
}

function displayFamily(person){
    let personInfo = "Spouse: " + person.currentSpouse + "\n";

    alert(personInfo);
}



// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() === "yes" || input.toLowerCase() === "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// helper function for numbers
function int(input) {
    if (isNaN(input) || input < 1 || input > 300) {
        alert("Please enter a number between 1 and 300");
        return false;
    }
    return true;
}

// helper function for gender
function maleFemale(input) {
    if (input.toLowerCase() === "male" || input.toLowerCase() === "female") {
        return true;
    }
    else {
        alert("Please type male or female");
        return false;
    }  
}

// helper function for eye color
function eyes(input) {
    if (input.toLowerCase() === "brown" || "black" || "hazel" || "blue" || "green") {
        return true;
    }
    else {
        alert("Please select another eye color");
        return false;
    }
}

// helper function for occupation
function occupations(input) {
    if (input.toLowerCase() === "programmer" || "assistant" || "landscaper" || "nurse" || "student" || "architect" || "doctor" || "politician") {
        return true;
    }
    else {
        alert("Enter a different occupation");
        return false; 
    }
}

// helper function for name search
function names(input) {
    if (input.toLowerCase() === " ") {
        alert("Please enter a name");
        return false;
    }
    return true;
}

