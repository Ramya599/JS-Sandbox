console.log("object");
console.error("error");
console.warn("warning");
console.info("info");
console.table({ name: "John", age: 30, city: "New York" });

console.group("Group 1");
console.warn("warning");
console.info("info");
console.table({ name: "John", age: 30, city: "New York" });
console.groupEnd();

const styles = "color: blue; font-size: 20px;";
console.log("%cThis is a styled message", styles);

const array = [1, 2, 3, 4, 5];
array.push(6);
array.unshift(0);
array.reverse();
console.log(array);

const arr1= [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr1Subset = arr1.slice(0, 3);
const arr3 = [...arr1Subset, ...arr2];
console.log(arr3);

//JSON
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
// Convert person object to JSON string
const personJSON = JSON.stringify(person);
console.log(personJSON);
// Convert JSON string back to JavaScript object
const personObj = JSON.parse(personJSON);
console.log(personObj);

const posts= [
    { id: 1, title: "Post 1", content: "This is the first post." },
    { id: 2, title: "Post 2", content: "This is the second post." },
    { id: 3, title: "Post 3", content: "This is the third post." }
];
const postsJSON = JSON.stringify(posts);
console.log(postsJSON);
const postsObj = JSON.parse(postsJSON);
console.log(postsObj[0].id);

const library= [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", status:{own: true, reading: false, read: false}},
    {title: "To Kill a Mockingbird", author: "Harper Lee", status: {own: false, reading: false, read: false}},
    {title: "1984", author: "George Orwell", status: {own: false, reading: false, read: false}}
]
library[0].status.own=true;
library[1].status.own=true;
library[2].status.own=true;

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const {title:firstBook} = library[0];
console.log(firstBook);
console.log(library);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);