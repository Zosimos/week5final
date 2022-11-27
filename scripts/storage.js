function saveUser(user) {
  let existing = getAllUsers(); //creat array to save multiple users
  existing.push(user); //add new user to array

  //localstorage supports only strings, numbers. It does not support objects. So, here you must change the object into a string, and store it as a string.
  //JSON = JavaScript Object Notation, encodes these objects into strings for us.
  let value = JSON.stringify(existing); //<--This will parse the object into a JSON string
  localStorage.setItem("users", value);
}

function getAllUsers() {
  let allUsers = [];

  let string = localStorage.getItem("users"); //read the json string
  if (string) {
    //parse the string into an array
    allUsers = JSON.parse(string); //decodes string back to an object/array of objects
    return allUsers;
  } else {
    return [];
  }
}
