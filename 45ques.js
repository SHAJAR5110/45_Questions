"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// //  QUESTION 02
let person_Name = "shajar abbas";
console.log(`${person_Name}, would you like to learn python programming?`);
// QUESTION 03
let personName = "shajar abbas";
const uppercaseName = personName.toUpperCase();
const lowercaseName = personName.toLowerCase();
const titlecaseName = personName.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
console.log(`Your name in Upper Case ${uppercaseName}`);
console.log(`Your name in Lower Case ${lowercaseName}`);
console.log(`Your name in Title Case ${titlecaseName}`);
// //  QUESTION 04
console.log("Quaid-e-Azam Muhammad Ali Jinnah once said,\"I do not believe in taking the right decision, I take a decision and make it right.\"");
// //QUESTION 05
const Famous_Personality = "Quaid-e-Azam Muhammad Ali Jinnah";
const Quote = "\"I do not believe in taking the right decision, I take a decision and make it right.\"";
console.log(`${Famous_Personality} once said,${Quote}`);
// // QUESTION 06
let personName1 = "\t Shajar Abbas \n";
console.log(personName1);
console.log(personName1.trim());
// // QUESTION 07
console.log("Addition " + (4 + 4));
console.log("Subtraction " + (12 - 4));
console.log("Multiplication " + 2 * 4);
console.log("Division " + 16 / 2);
// // QUESTION 08
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
// QUESTION 09
let favoriteNumber = 5;
console.log(`My Favorite Number is: ${favoriteNumber}`);
// // QUESTION 10
// Author: Shajar Abbas
//Date: 15 March 2024
console.log("Addition " + (4 + 4)); //Addition of two number
console.log("Subtraction " + (12 - 4)); //Subtraction of two number
console.log("Multiplication " + 2 * 4); //Multiplication of two number
console.log("Division " + 16 / 2); //Dividion of two number
//Author: Shajar Abbas
//Date: 15 March 2024
let favorite_Number = 12; //Storing Favorite Number in a variable.
console.log(`My Favorite Number is: ${favorite_Number}`); //Revealing the Favorite Number.
// QUESTION 11
let friendsNames = ["SHAJAR", "Hasnat", "Fahad", "Uzair", "Usama"];
for (let i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i]);
}
// QUESTION 12
let friendsNames1 = ["SHAJAR", "Hasnat", "Fahad", "Uzair", "Usama"];
for (let i = 0; i < friendsNames1.length; i++) {
    console.log(`Hi, ${friendsNames1[i]}! Have a great day.`);
}
;
// // QUESTION 13
let transportationSource = ["MotorCycle", "Car"];
for (let j = 0; j < transportationSource.length; j++) {
    console.log(`I would like to own a Honda ${transportationSource[j]}`);
}
//  QUESTION 14
let guestList = ["Shajar", "Hasnat", "Fahad"];
for (let n = 0; n < guestList.length; n++) {
    console.log(`${guestList[n]} I would be honored to have you join me at dinner`);
}
//  QUESTION 15
let guestList1 = ["Shajar ", "Hasnat ", "Fahad "];
for (let n = 0; n < guestList1.length; n++) {
    console.log(`${guestList1[n]}\t I would be honored to have you join me at dinner`);
}
let notAttendDinner = guestList1.pop();
console.log();
console.log(`Unfortunately ${notAttendDinner} guest won't able to join us `);
let newMember = guestList1.push("Uzair");
console.log();
console.log(`New Guest will join us on  Dinner, so list of Guest is:\t ${guestList1}`);
// QUESTION 16
let guestList2 = ["Shajar ", "Hasnat ", "Fahad "];
for (let n = 0; n < guestList2.length; n++) {
    console.log(`${guestList2[n]}\t I would be honored to have you join me at dinner`);
}
let not_Attend_Dinner = guestList2.pop();
console.log();
console.log(`Unfortunately ${not_Attend_Dinner} guest won't able to join us `);
let new_member = guestList2.push("Uzair");
console.log();
console.log(`New Guest will join us on  Dinner, so list of Guest is:\t ${guestList2}`);
console.log("---I'm glade to inform all of you that we have a bigger Dinner Table--- ");
let add_member_at_start = guestList2.unshift("Arslan "); //Add member at start
let middleIndex = Math.floor(guestList2.length / 2);
let add_member_at_middle = guestList2.splice(middleIndex, 0, "Noman "); //Add member at Middle
let add_member_at_last = guestList2.push("Hassan "); //Add member at Last
for (let n1 = 0; n1 < guestList2.length; n1++) {
    console.log(`${guestList2[n1]}\t You are invited at Dinner.!`);
}
// QUESTION 17
let guestList3 = ["Arslan ", "Shajar ", "Noman ", "Hasnat ", "Uziar ", "Hassan "];
for (let n1 = 0; n1 < guestList3.length; n1++) {
    console.log(`${guestList3[n1]}\t You are invited at Dinner.!`);
}
console.log();
while (guestList3.length > 2) {
    let remove_mem = guestList3.pop();
    console.log(`${remove_mem} Sorry! you're not invited.`);
}
console.log();
for (let x = 0; x < guestList3.length; x++) {
    console.log(`${guestList3[x]} You are still invited at Dinner`);
}
let a = true;
while (a) {
    if (guestList3[0] == null)
        break;
    else
        guestList3.pop();
}
console.log(`List is empty:  ${guestList3}`);
// QUESTION 18
let favorite_places_for_visit = ["Paris ", "London ", "Tokyo ", "Greece ", "Maldives "];
console.log(favorite_places_for_visit);
console.log("Sorted List: " + [...favorite_places_for_visit].sort());
console.log("Orignal List: " + favorite_places_for_visit);
console.log("Reverse of list: " + [...favorite_places_for_visit].reverse());
console.log("Orignal List: " + favorite_places_for_visit);
console.log("--------------------------------------");
let reverse_list = favorite_places_for_visit.reverse();
console.log("Reverse of List: " + reverse_list);
console.log("Orignal List is Modified: " + favorite_places_for_visit);
let reverse_list1 = favorite_places_for_visit.reverse();
console.log("Back to the Orignal List: " + reverse_list1);
console.log("--------------------------------------");
let sort_list = favorite_places_for_visit.sort();
console.log("List Sorted: " + sort_list);
console.log("Orignal List is Modified: " + favorite_places_for_visit);
let sort_list1 = favorite_places_for_visit.sort((a, b) => b.localeCompare(a));
console.log("List sorted Reverse Alphabatical order: " + sort_list1);
// QUESTION 19
let total_invitations = 0;
let totalMemberToInvited = 0;
let Q19_guestList = ["Shajar", "Hasnat", "Fahad"];
for (let n = 0; n < Q19_guestList.length; n++) {
    console.log(`${Q19_guestList[n]} I would be honored to have you join me at dinner`);
    totalMemberToInvited++;
    total_invitations++;
}
console.log("---------------------------------------");
let Q19_guestList2 = ["Shajar ", "Hasnat ", "Fahad "];
for (let n = 0; n < Q19_guestList2.length; n++) {
    console.log(`${Q19_guestList2[n]}\t I would be honored to have you join me at dinner`);
}
let Q19_not_Attend_Dinner = Q19_guestList2.pop();
console.log();
console.log(`Unfortunately ${Q19_not_Attend_Dinner} guest won't able to join us `);
let Q19_new_member = Q19_guestList2.push("Uzair");
console.log();
console.log(`New Guest will join us on  Dinner, so list of Guest is:\t ${Q19_guestList2}`);
console.log("---I'm glade to inform all of you that we have a bigger Dinner Table--- ");
let Q19_add_member_at_start = Q19_guestList2.unshift("Arslan "); //Add member at start
totalMemberToInvited++;
total_invitations++;
let Q19_middleIndex = Math.floor(Q19_guestList2.length / 2);
let Q19_add_member_at_middle = Q19_guestList2.splice(Q19_middleIndex, 0, "Noman "); //Add member at Middle
totalMemberToInvited++;
total_invitations++;
let Q19_add_member_at_last = Q19_guestList2.push("Hassan "); //Add member at Last
totalMemberToInvited++;
total_invitations++;
for (let n1 = 0; n1 < Q19_guestList2.length; n1++) {
    console.log(`${Q19_guestList2[n1]}\t You are invited at Dinner.!`);
    totalMemberToInvited++;
    total_invitations++;
}
console.log("---------------------------------------");
let Q19_guestList3 = ["Arslan ", "Shajar ", "Noman ", "Hasnat ", "Uziar ", "Hassan "];
for (let n1 = 0; n1 < Q19_guestList3.length; n1++) {
    console.log(`${Q19_guestList3[n1]}\t You are invited at Dinner.!`);
    totalMemberToInvited--;
}
console.log();
while (Q19_guestList3.length > 2) {
    let remove_mem = Q19_guestList3.pop();
    totalMemberToInvited--;
    console.log(`${remove_mem} Sorry! you're not invited.`);
}
console.log();
for (let x = 0; x < Q19_guestList3.length; x++) {
    console.log(`${Q19_guestList3[x]} You are still invited at Dinner`);
    totalMemberToInvited++;
    total_invitations++;
}
let Q19_a = true;
while (Q19_a) {
    if (Q19_guestList3[0] == null)
        break;
    else
        Q19_guestList3.pop();
    totalMemberToInvited--;
}
console.log(`List is empty:  ${Q19_guestList3}`);
console.log("---------------------------------------");
console.log(`Total count of member to be at Dinner ${totalMemberToInvited}`);
console.log("---------------------------------------");
// QUESTION 20
let provinces = ["Punjab", "Kpk", "Sindh", "Balochistan", "Gilgit"];
console.log(`Provinces of Paksitan are: ${provinces}`);
const Punjab = {
    name: "Punjab",
    district: 42,
    language: "punjabi"
};
const Sindh = {
    name: "Sindh",
    district: 30,
    language: "sindhi"
};
const kpk = {
    name: "Kpk",
    district: 38,
    language: "pushtu"
};
const Balochistan = {
    name: "Balochistan",
    district: 36,
    language: "Balochi"
};
console.log(`Pakistan's Province: ${Punjab.name}`);
console.log(`Their total District: ${Punjab.district}`);
console.log(`Their Language: ${Punjab.language}`);
console.log();
console.log(`Pakistan's Province: ${Sindh.name}`);
console.log(`Their total District: ${Sindh.district}`);
console.log(`Their Language: ${Sindh.language}`);
console.log();
console.log(`Pakistan's Province: ${kpk.name}`);
console.log(`Their total District: ${kpk.district}`);
console.log(`Their Language: ${kpk.language}`);
console.log();
console.log(`Pakistan's Province: ${Balochistan.name}`);
console.log(`Their total District: ${Balochistan.district}`);
console.log(`Their Language: ${Balochistan.language}`);
// Question 22
let cars = ["Honda Civic", "BMW", "Porche"];
console.log(cars[3]);
console.log(cars[1]);
// Question 23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
let car1 = "BMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car1 == 'BMW');
let car2 = "Porche";
console.log("Is car == 'Porche'? I predict True.");
console.log(car2 == 'Porche');
let car3 = "Civic";
console.log("Is car == 'Civic'? I predict True.");
console.log(car3 == 'Civic');
let car4 = "Haval";
console.log("Is car == 'Haval'? I predict True.");
console.log(car4 == 'Haval');
let fruit = "Banana";
console.log("Is Fruit == 'Apple'? I predict False.");
console.log(fruit == "Apple");
let fruit1 = "Mango";
console.log("Is Fruit == 'Orange'? I predict False.");
console.log(fruit1 == "Orange");
let fruit2 = "Kiwi";
console.log("Is Fruit == 'Graps'? I predict False.");
console.log(fruit2 == "Graps");
let fruit3 = "Banana";
console.log("Is Fruit == 'Papaya'? I predict False.");
console.log(fruit3 == "Papaya");
let fruit4 = "Banana";
console.log("Is Fruit == 'Kiwi'? I predict False.");
console.log(fruit4 == "Kiwi");
// Question 24
let testNumber = 5;
console.log("Is Number==5? I predict True ");
console.log(testNumber == 5);
let testNumber1 = 6;
console.log("Is Number==4? I predict False ");
console.log(testNumber1 == 4);
let lowerCaseFunction = "SHAJAR".toLowerCase();
console.log("Is Name==shajar? T predict True");
console.log(lowerCaseFunction == "shajar");
let lowerCaseFunction1 = "SHAJAR".toLowerCase();
console.log("Is Name==SHAJAR? T predict False");
console.log(lowerCaseFunction1 == "SHAJAR");
let equaleNumber = 12;
console.log("Is Number Greater than equals to 12? I predict True");
console.log(equaleNumber >= 12);
let equaleNumber1 = 10;
console.log("Is Number Greater than equals to 11? I predict False");
console.log(equaleNumber1 >= 11);
let inequaleNumber = 2;
console.log("Is Number Less than equals to 6? I predict True");
console.log(inequaleNumber <= 6);
let inequaleNumber1 = 4;
console.log("Is Number Less than equals to 3? I predict False");
console.log(inequaleNumber1 <= 3);
let bakeryItem = "Burfy";
console.log("Bakery Item is Burfy or Cham Cham? I predict True");
console.log(bakeryItem == "Burfy" || bakeryItem == "Cham Cham");
let bakeryItem1 = "Bread";
console.log("Bakery Item is Cockies or Bun? I predict False");
console.log(bakeryItem1 == "Cockies" || bakeryItem1 == "Bun");
let bakeryItem2 = "Ghulab Jamun";
let bakeryItem3 = "Burfy";
console.log("Bakery Item is Ghulab Jamun and Burfy? I predict True");
console.log(bakeryItem2 == "Ghulab Jamun" && bakeryItem3 == "Burfy");
let bakeryItem4 = "Ghulab Jamun";
let bakeryItem5 = "Burfy";
console.log("Bakery Item is Ghulab Jamun and Cham Cham? I predict False");
console.log(bakeryItem3 == "Ghulab Jamun" && bakeryItem5 == "Cham Cham");
let testArray = ["Shajar", "Hasnat", "Fahad", "Uziar", "Usama"];
let predictName = "Hasnat";
for (let test = 0; test < testArray.length; test++) {
    if (predictName == testArray[test]) {
        console.log("Is Name == Hasnat in List? I predict True");
        console.log(predictName == testArray[test]);
    }
    else {
        continue;
    }
}
let testArray1 = ["Shajar", "Hasnat", "Fahad", "Uziar", "Usama"];
let predictName1 = "Arslan";
let found = false;
for (let test1 = 0; test1 < testArray1.length; test1++) {
    if (predictName1 == testArray1[test1]) {
        console.log(predictName1 == testArray1[test1]);
        console.log("Is Name == Hasnat in List? I predict True");
    }
}
if (!found) {
    console.log("Is Name == Arslan in List? I predict False");
    console.log(predictName1 == testArray1[1]);
}
// Question 25
let alien_color = "Green";
if (alien_color == "Green") {
    console.log("You Earned 5 Points");
}
let alien_color_fail = 'Red';
if (alien_color_fail === 'green') {
    console.log("Player just earned 5 points.");
}
// Question 26
let alien_color1 = "Green";
if (alien_color1 == "Green") {
    console.log("You Earned 5 Points");
}
else {
    console.log("You Earned 10 Points");
}
let alien_color_fail1 = 'Red';
if (alien_color_fail1 === 'green') {
    console.log("You just earned 5 points.");
}
else {
    console.log("You just earned 10 points.");
}
// Question 27
let alien_color_ = 'green';
if (alien_color_ === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color_ === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color_ === 'red') {
    console.log("Player earned 15 points.");
}
// Question 28
let personAge = 20;
if (personAge >= 2 && personAge < 4)
    console.log("The Person is Toddler");
else if (personAge >= 4 && personAge < 13)
    console.log("The Person is Kid");
else if (personAge >= 13 && personAge < 20)
    console.log("The Person is Teenager");
else if (personAge >= 20 && personAge < 65)
    console.log("The Person is Adult");
else
    console.log("The person is Elder");
// Question 29
let favoriteFruit = ["Banana", "Apple", "Mango"];
if (favoriteFruit.includes("Banana"))
    console.log("You really Like Bananas");
if (favoriteFruit.includes("Apple"))
    console.log("You really Like Apples");
if (favoriteFruit.includes("Mango"))
    console.log("You really Like Mango");
if (favoriteFruit.includes("Graps"))
    console.log("You really Like Graps");
if (favoriteFruit.includes("Kiwi"))
    console.log("You really Like Kiwi");
// Question 30
let user_name = ["Shajar", "Hasnat", "Fahad", "Uzair", "Admin"];
for (let v = 0; v < user_name.length; v++) {
    if (user_name[v] == "Admin") {
        console.log(`Hello ${user_name[v]}, would you like to see status report`);
    }
    else {
        console.log(`Hello ${user_name[v]} thank you for logging in again`);
    }
}
// Question 31
let emptyArray = [];
if (emptyArray.length == 0) {
    console.log("We need to find some User.!");
}
else {
    let personAge1 = 20;
    if (personAge1 >= 2 && personAge1 < 4)
        console.log("The Person is Toddler");
    else if (personAge1 >= 4 && personAge1 < 13)
        console.log("The Person is Kid");
    else if (personAge1 >= 13 && personAge1 < 20)
        console.log("The Person is Teenager");
    else if (personAge1 >= 20 && personAge1 < 65)
        console.log("The Person is Adult");
    else
        console.log("The person is Elder");
}
// Question 32
let current_users = ["Shajar", "Hasnat", "Fahad", "Uzair", "Usama"];
let new_users = ["Noman", "Arslan", "Hasnat", "Shajar", "Hassan"];
for (let q = 0; q < current_users.length; q++) {
    let usernameAvailable = true;
    for (let w = 0; w < new_users.length; w++) {
        if (current_users[q].toLowerCase() === new_users[w].toLowerCase()) {
            console.log(`Username '${new_users[w]}' is already taken. Please enter a new username.`);
            usernameAvailable = false;
            break;
        }
    }
    if (usernameAvailable) {
        console.log(`Username '${current_users[q]}' is available.`);
    }
}
// Question 33
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ord_number = 0; ord_number < ordinalNumbers.length; ord_number++) {
    if (ordinalNumbers[ord_number] == 1)
        console.log(`${ordinalNumbers[ord_number]}st`);
    else if (ordinalNumbers[ord_number] == 2)
        console.log(`${ordinalNumbers[ord_number]}nd`);
    else if (ordinalNumbers[ord_number] == 3)
        console.log(`${ordinalNumbers[ord_number]}rd`);
    else
        console.log(`${ordinalNumbers[ord_number]}th`);
}
// Question 34
let favoritePizza = ["Pepperoni", "Mashrom", "Chicken Fajita"];
console.log('List of Pizzas: ');
let f = 0;
while (favoritePizza.length > f) {
    console.log(favoritePizza[f]);
    f++;
}
let f1 = 0;
console.log("\nAbout My favorite Pizzas");
while (favoritePizza.length > f1) {
    console.log(`I like ${favoritePizza[f1]} pizza.`);
    f1++;
}
console.log("\nI really love pizza.!");
// Question 35
let differentAnimals = ["Dog", "Cat", "Rabbit"];
for (let anml = 0; anml < differentAnimals.length; anml++) {
    console.log(`${differentAnimals[anml]}`);
}
for (let anml = 0; anml < differentAnimals.length; anml++) {
    console.log(`${differentAnimals[anml]} would make a great pet`);
}
console.log("\nAny of these animals would make a great pet!");
// Question 36
function make_shirt(size, message) {
    console.log(`Shirt size is ${size}, Message on it: ${message}`);
}
make_shirt(14, "I love Python Programming language");
// Question 37
function make_shirts(size = "Large", message = "I love Typescript") {
    return `Size of shirt ${size}, Message on it: ${message}`;
}
console.log(make_shirts());
console.log(make_shirts("Medium"));
console.log(make_shirts("Small"));
// Question 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("London", "UK");
// Question 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("London", "UK"));
console.log(city_country("New York", "USA"));
// Question 40
function make_album(artistName, artistAlbum, albumtrack) {
    let Album = {
        artist: artistName,
        album: artistAlbum,
        track: albumtrack
    };
    return Album;
    if (albumtrack == undefined) {
        Album.track = albumtrack;
    }
}
console.log(make_album("Artist1", "Album1", 11));
console.log(make_album("Artist2", "Album2", 7));
console.log(make_album("Artist3", "Album3"));
// Question 41
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Magician Name: ${magicians[i]}`);
    }
}
let magicianName = ["Shajar", "Hasnat", "Fahad", "Uzair", "Usama"];
show_magicians(magicianName);
// Question 42
function show_magicians1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
}
let magicianName1 = ["Shajar", "Hasnat", "Fahad", "Uzair", "Usama"];
show_magicians1(magicianName1);
console.log("-------Modified List-------");
for (let j = 0; j < magicianName1.length; j++) {
    magicianName1[j] = "Great " + magicianName1[j];
}
show_magicians1(magicianName1);
// Question 43
function show_magicians2(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
}
let magicianName2 = ["Shajar", "Hasnat", "Fahad", "Uzair", "Usama"];
let unchangedMagicians = [];
console.log("------List Of Names------");
for (let j = 0; j < magicianName2.length; j++) {
    unchangedMagicians[j] = "Great " + magicianName2[j];
}
show_magicians2(magicianName2);
console.log("------Modified List------");
show_magicians2(unchangedMagicians);
// Question 44
function orderSandwich(arrayOfItem) {
    console.log("\n-----------Order Summary-----------\n");
    if (arrayOfItem.length == 0)
        console.log("No Item Provided For the Sandwich");
    else {
        for (let item = 0; item < 1; item++) {
            console.log(" " + arrayOfItem);
        }
    }
}
let sandwich1 = ["Ham", "Cheese", "Lettuce", "Tomato"];
let sandwich2 = ["Peanut Butter", "Jelly"];
let sandwich3 = ["Cheese", "Lettuce", "Tomato"];
orderSandwich(sandwich1);
orderSandwich(sandwich2);
orderSandwich(sandwich3);
// Question 45
function carInfo(name, manufacture, model, ...extraFeature) {
    let car = {
        carName: name,
        manufacturer: manufacture,
        carmodel: model
    };
    extraFeature.forEach((feature) => {
        const [key, value] = feature;
        extraFeature[key] = value;
    });
    console.log(car);
    return car;
}
console.log(car);
carInfo("Sports Car", "Porsche", "PSC-2020");
