"use strict";
// Question 2
console.log("\nQuestion 2");
let a = "Saad";
console.log("Hello " + a + ", would you like to learn some Python today?");
//Question 3
console.log("\nQuestion 3");
console.log(`Hello ${a.toUpperCase()}, would you like to learn some Python today?`);
console.log(`Hello ${a.toLowerCase()}, would you like to learn some Python today?`);
function toTitleCase(word) {
    return word.substring(0, 1).toUpperCase() +
        word.substring(1).toLowerCase();
}
console.log(`Hello ${toTitleCase(a)}, would you like to learn some Python today?`);
//Question 4 
console.log("\nQuestion 4");
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
// Qustion 5
console.log("Question 5");
let famous_person = "Albert Einstein";
let message = "once said, “A person who never made a mistake never tried anything new.";
console.log(`${famous_person} ${message}`);
// Question 6
console.log("\nQuestion 6");
let n = "\ts\n\ta\n\ta\n\td\n";
console.log(n);
// Question 7
console.log("\nQuestion 7");
console.log(`Addition:  ${4 + 4}`);
console.log(`Subtraction: ${16 - 8}`);
console.log(`Multiplication: ${(4 * 2)}`);
console.log(`Division: ${64 / 8}`);
//Question 8
console.log("\nQuestion 8");
console.log(`______________________________`);
for (let i = 0; i < 4; i++) {
    console.log(4 + 4);
    console.log(`______________________________`);
}
//Question 9
console.log("\nQuestion 9");
let favorite_Number = 1;
let message_q9 = "My Favorite Number is";
console.log(` ${message_q9} ${favorite_Number} `);
//Question 10
console.log("\nQuestion 10");
// This program is printing sum four times using a for loop.
// console.log(`______________________________`);
// for (let i=0;i<4;i++){
//     console.log(4+4);
//     console.log(`______________________________`);
// }
// This program is printing favourite number store in a variable.
// let favorite_Number:number =1;
// let message_q9:string="My Favorite Number is";
// console.log(`${ favorite_Number} ${message_q9}`);
// Question 11
console.log("\nQuestion 11");
let names = ["Asad", "Ali", "Aladdin", "Waleed"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 12
console.log("\nQuestion 12");
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}! have a good day.`);
}
// Question 13
console.log("\nQuestion 13");
let transport = ["Motorcycle", "Car", "Aeroplane", "Train", "Ship"];
for (let i = 0; i < transport.length; i++) {
    console.log(`I would like to own a Honda ${transport[i]}.`);
}
// Question 14
console.log("\nQuestion 14");
let guest_list = ["Asad", "Ali", "Waleed"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
// Question 15
console.log("\nQuestion 15");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
console.log(`I would like to say ${guest_list[2]} is coming due to his personal problem. `);
guest_list.pop();
guest_list.push("Saad");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
// Question 16
console.log("\nQuestion 16");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
console.log(`I would like to say ${guest_list[2]} is coming due to his personal problem. `);
guest_list.pop();
guest_list.push("Saad");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
//added part of Q16
console.log("There is more space available for guest. so we can invite 3 more persons. ");
guest_list.unshift("Waleed");
guest_list.splice(2, 0, "Fahad");
guest_list.push("Umer");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
// Question 17
console.log("\nQuestion 17");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. I would like to invite you for dinner tonight.`);
}
console.log("Due to some issues i can only invite two persons from the list for dinner");
//removing entries except first 2
for (let i = guest_list.length - 1; i > 1; i--) {
    console.log(`Sorry ${guest_list[i]}. Unfortunatly I am not able to invite you for dinner tonight.`);
    guest_list.pop();
}
// for people still invited
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hello ${guest_list[i]}. You are still invited for dinner tonight.`);
}
guest_list.pop();
guest_list.pop();
//to check empty array
console.log(guest_list);
// Question 18
console.log("\nQuestion 18");
let ar = ["Spain", "Italy", "France", "Germany", "Austrilla", "America"];
console.log(ar);
let ar1 = [];
for (let i = 0; i < ar.length; i++) {
    ar1[i] = ar[i];
}
ar1.sort();
console.log("Sorted array: " + ar1); //after sort
console.log("Original array: " + ar);
//Revesing array Alphabetcally without any chamge in original array
ar1.reverse();
console.log("\nReverse Alpabetically order array: " + ar1);
console.log("Original array: " + ar);
ar.reverse();
console.log("\nRecerse order array: " + ar);
ar.reverse();
console.log("Original after re-reverse: " + ar);
ar.sort();
console.log("\nSorted array: " + ar);
ar.reverse();
console.log("\nChanged order: " + ar);
// Question 19
console.log("\nQuestion 19");
console.log(`There are ${guest_list.length} people invited for the dinner.`);
// Question 20
console.log("\nQuestion 20");
let arrcountries = ["Italy", "France", "Germany", "UK", "United States"];
console.log("List of countries");
for (let i = 0; i < arrcountries.length; i++) {
    console.log(arrcountries[i]);
}
// Question 21
console.log("\nQuestion 21");
function create_object(n, s, t) {
    return {
        name: n,
        session: s,
        teacher: t
    };
}
console.log(create_object("TypeScript", 22, "Ali"));
// Question 22
console.log("\nQuestion 22");
arrcountries = ["Italy", "France", "Germany", "UK", "United States"];
let index = 8;
arrcountries[index] == undefined ?
    console.log(`Index is not present`) : console.log(`Index is present in array`);
// Question 23
console.log("\nQuestion 23");
// case 1 & 2
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'subaru'? I predict false.");
console.log(car == 'subar');
// case 3 & 4
let Person = "male";
console.log("Is Person == 'male'? I predict True.");
console.log(Person == 'male');
console.log("Is Person == 'male'? I predict false.");
console.log(Person == 'female');
// case 5 & 6
let country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == 'Pakistan');
console.log("Is Country == 'France'? I predict False.");
console.log(country == 'France');
// case 7 & 8
let job = "Engineer";
console.log("Is Job == 'Engineer'? I predict True.");
console.log(job == 'Engineer');
console.log("Is Job == 'Carpenter'? I predict false.");
console.log(job == 'Carpenter');
// case 9 & 10
let model = 1990;
console.log("Is  Model== 1990? I predict True.");
console.log(model == 1990);
console.log("Is Model == '1980? I predict false.");
console.log(model == 1980);
// Question 24
console.log("\nQuestion 24");
// Tests using the lower case function
let d = "SAAD";
console.log("Is d == SAAD? I predict True");
console.log(d == "SAAD");
d.toLowerCase();
console.log("Is d == saad? I predict False");
console.log(d == "saad");
// Numerical tests involving equality and inequality,greater than and less than, greater than or
//  equal to, and less than or equal to
let c = 10;
console.log("Is c == 10? I predict True");
console.log(c == 10);
console.log("Is c !== 10? I predict False");
console.log(c !== 10);
console.log("Is c > 10? I predict False");
console.log(c > 10);
console.log("Is c < 10? I predict False");
console.log(c < 10);
console.log("Is c >= 10? I predict True");
console.log(c >= 10);
console.log("Is c <= 10? I predict True");
console.log(c <= 10);
// Tests using "and" and "or" operators
let e = 12;
console.log("Is c == 10 and e==12? I predict True");
console.log(c == 10 && e == 12);
console.log("Is c == 10 or e==12? I predict True");
console.log(c == 10 || e == 12);
// Test whether an item is in a array
//using allready declared array above
let flag = "France";
if (arrcountries.includes("France")) {
    console.log("France is pessent in an array");
}
// Test whether an item is not in a array
flag = "English";
if (arrcountries.includes("English")) {
    console.log("English is pessent in an array");
}
else {
    console.log("English is not pessent in an array");
}
//Question 25
console.log("\nQuestion 25");
let alian_color = "green";
if (alian_color == "green") {
    console.log(" The player just earned 5 points.");
}
alian_color = "red";
if (alian_color == "green") {
    console.log(" The player just earned 5 points.");
}
else {
    console.log("\n");
}
//Question 26
console.log("\nQuestion 26");
//for if block
alian_color = "green";
if (alian_color == "green") {
    console.log(" The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//for else block
alian_color = "red";
if (alian_color == "green") {
    console.log(" The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Question 27
console.log("\nQuestion 27");
//for green color
alian_color = "green";
if (alian_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alian_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else {
    console.log("The player just earned 15 points.");
}
//for yellow color
alian_color = "yellow";
if (alian_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alian_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else {
    console.log("The player just earned 15 points.");
}
//for red color
alian_color = "red";
if (alian_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alian_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else {
    console.log("The player just earned 15 points.");
}
//Question 28
console.log("\nQuestion 28");
let age = 12;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question 29
console.log("\nQuestion 29");
let favourite_fruits = ["Apple", "Orange", "Banana"];
if (favourite_fruits.includes("Apple")) {
    console.log(`You really like Apple!`);
}
if (favourite_fruits.includes("Orange")) {
    console.log(`You really like Orange!`);
}
if (favourite_fruits.includes("Banana")) {
    console.log(`You really like Banana!`);
}
if (favourite_fruits.includes("PineApple")) {
    console.log(`Pineapple is not in your favorites fruits list`);
}
if (favourite_fruits.includes("Mango")) {
    console.log(`Mango is not in your favorites fruits list`);
}
//Question 30
console.log("\nQuestion 30");
let username = ["Saad", "Ali", "Waleed", "Asad", "Admin"];
for (let i = 0; i < username.length; i++) {
    if (username[i] === "Admin") {
        console.log(`Hello ${username[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
}
//Question 31
console.log("\nQuestion 31");
username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] === "Admin") {
            console.log(`Hello ${username[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username[i]}, thank you for logging in again.`);
        }
    }
}
//Question 32
console.log("\nQuestion 32");
let current_users = ["saad", "ali", "waleed", "asad", "admin"];
let new_users = ["Waleed", "Saad", "Hamza", "Moez", "Umer"];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(`The person ${new_users[i]} will need to enter a new username.`);
    }
    else {
        console.log(`The username ${new_users[i]} is available`);
    }
}
//Question 33
console.log("\nQuestion 33");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log("1st");
    }
    else if (numbers[i] == 2) {
        console.log("2nd");
    }
    else if (numbers[i] == 3) {
        console.log("3rd");
    }
    else if (numbers[i] >= 4) {
        console.log(`${numbers[i]}th`);
    }
}
//Question 34
console.log("\nQuestion 34");
let pizzas = ["Chicken Tikka", "Fagita", "Pepperoni"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} Pizza.`);
}
console.log("The is one my favourite meals. I always preffer to eat pizza over burger. I like to try different flaver of pizza every time. I really like pizza!");
//Question 35
console.log("\nQuestion 35");
let pets = ["Cat", "Dog", "Parret"];
for (let i = 0; i < pets.length; i++) {
    console.log(`A ${pets[i]} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
//Question 36
console.log("\nQuestion 36");
function make_shirt(sizes, text) {
    console.log(`The size of shirt is ${sizes} and text to be printed on it would be ${text}.`);
}
make_shirt("Medium", "SAAD");
//Question 37
console.log("\nQuestion 37");
function make_shirts(size) {
    if (size == "Large") {
        console.log(` I love TypeScript. Make a large shirt and a medium shirt`);
    }
    else {
        console.log(`Make a shirt of any size`);
    }
}
make_shirts("Medium");
//Question 38
console.log("\nQuestion 38");
function describe_city(name, country) {
    console.log(`${name} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Lahore", "Pakistan");
describe_city("LA", "America");
//Question 39
console.log("\nQuestion 39");
function city_country(city, country) {
    return console.log(`${city},${country}`);
}
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Islamabad", "Pakistan");
//Question 40
console.log("\nQuestion 40");
function make_album(name, title, no_of_tracks) {
    let music = {
        artist_name: name,
        album_title: title,
        number_of_tracks: no_of_tracks,
    };
    return console.log(music);
}
make_album("Saad", "School");
make_album("Waleed", "France");
make_album("Ali", "Paris");
make_album("Ali", "Paris", 10);
//Question 41
console.log("\nQuestion 41");
let magician = ["Saad", "Waleed", "Ali", "Asad"];
function show_magicians(magician) {
    console.log("Names of magicians");
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magician);
//Question 42
console.log("\nQuestion 42");
function great_magician(mag) {
    for (let i = 0; i < mag.length; i++) {
        mag[i] = `The Great ${mag[i]}`;
    }
}
great_magician(magician);
show_magicians(magician);
//Question 43
console.log("\nQuestion 43");
magician = ["Saad", "Waleed", "Ali", "Asad"];
let name_arr_magician = [];
for (let i = 0; i < magician.length; i++) {
    name_arr_magician[i] = magician[i];
}
show_magicians(magician);
great_magician(name_arr_magician);
show_magicians(name_arr_magician);
//Question 44
console.log("\nQuestion 44");
let itemsarr = ["Dijon mustard", " Tzatziki", " Fruit jam"];
function items(items) {
    return console.log(`The sandwich consist of ${items} items in it`);
}
items(itemsarr);
itemsarr = [" Pepper jelly", " Lettuce", " Spinach"];
items(itemsarr);
itemsarr = [" Tomatoes", " Pickles", " Onions", " Avocado"];
items(itemsarr);
//Question 45
console.log("\nQuestion 45");
function cars(manufature, model, argument, color, optionalfeature) {
    let car = {
        manufture: manufature,
        model: model,
        argument: argument,
        color: color,
        optfeatures: optionalfeature,
    };
    return car;
}
console.log(cars("Honda", 1999, "no", "Black", "Push start"));
