// --------------------------------
// Nochka' Walk Planner Application
// --------------------------------
// Nochka is a 4 years old pit bull rescue pup, and my life and my love. 

// 1 Values, Datatypes, and Operations.  Store and calcutale total walk time.

let morningWalk = 30; // minutes.
let eveningWalk = 60; 
let totalWalkTime = morningWalk + eveningWalk; // using number operation.
console.log("Good job, Nochka! Total walk time today:", totalWalkTime, "minutes");

// 2 Stringing Characters Together
let dogName = "Nochka";
let reminder = "Don't forget " + dogName + "'s walk at 7:00 PM!";
console.log(reminder);

// 3 Control Structures and Logic
let currentTime = "19:00";
let walkTime = "19:00";

if (currentTime === walkTime) {
  console.log("It's walk time! \u{1F43E}"); //unicode U+1F43E paw prints
} else {
  console.log("Not time yet.");
}

// 4 Building Arrays
let walkSchedule = ["7:00 AM", "12:00 PM", "7:00 PM"];
console.log("Walk schedule:", walkSchedule);

// 5 Using Arrays (looping)
for (let i = 0; i < walkSchedule.length; i++) {
  console.log("Scheduled walk at:", walkSchedule[i]);
}

// 6 Creating and Using Objects
let dog = {
  name: "Nochka \u{1F436}", // U+1F436 dog face
  breed: "Pit Bull \u{1F415}",
  age: 4,
  favoriteActivities: [
    "running",
    "playing ball", 
    "sleeping", 
    `eating \u{1F9B4}` //bone emoji
  ]
};

console.log("Dog info:", dog);
console.log(dog.name + " loves " + dog.favoriteActivities[0]);