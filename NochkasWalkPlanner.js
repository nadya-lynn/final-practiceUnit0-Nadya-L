// --------------------------------
// Nochka' Walk Planner- Day Planener Application
// --------------------------------
// Nochka is a 4 years old pit bull rescue pup, and my life and my love

// 1 Values, Datatypes, and Operations.  Store and calcutale total walk time

let morningWalk = 30; // minutes
let eveningWalk = 60; 
let emoji = "\u{1F43E}";// Paw prints unicode character
let totalWalkTime = morningWalk + eveningWalk; // using number operation
console.log("Good job, Nochka! Total walk time today:", totalWalkTime, "minutes");

// 2 Stringing Characters Together
let dogName = "Nochka";
let dogFriend = "Jenny";
let reminderMessage = "Don't forget, " + dogName +"," + " you're walking at 7:00 PM with your friend " + dogFriend + " in the park!";
console.log(reminderMessage);

// 3 Control Structures and Logic
let currentTime = "19:00";
let walkTime = "19:00";

if (currentTime === walkTime) {
  console.log("Nochka, it's walk time! \u{1F43E}"); //unicode U+1F43E paw prints
} else {
  console.log("Oh, it's not our walk time yet.");
}

// 4 Building Arrays
let walkSchedule = ["6:00 AM", "12:00 PM", "6:00 PM"];
console.log("Walk schedule:", walkSchedule);

// 5 Using Arrays (looping)
for (let i = 0; i < walkSchedule.length; i++) {
  console.log("Scheduled walk at:", walkSchedule[i]);
}

// 6 Creating and Using Objects
let dog = {
  name: "Nochka \u{1F436}", // U+1F436 dog face
  breed: "Pit Bull \u{1F415}", // U+1F415 dog emoji
  age: 4 ,
  mood: "happy",
  favoriteActivities: [
    "running with Jenny!",
    "playing ball", 
    "napping", 
    `eating \u{1F9B4}`, // Bone emoji
  ],
  friends:["Jenny"]
};

console.log("Dog info:", dog);
console.log(`${dog.name} loves ${dog.favoriteActivities[0]} ${dog.name} is a very happy pup! ${emoji}`);


// New section that is not a part of the assignment but potentially a future plan for an application.
// Meal time, Belly Scratch Time, and Vet Visit.
// 7 Meal Times Loop
let mealTimes = ["7:30 AM - Breakfast", "6:30 PM - Dinner"];
for (let i = 0; i < mealTimes.length; i++) {
  console.log(`\u{1F372} Time to eat, Nochka! Meal scheduled at: ${mealTimes[i]}`);
};

// 8 Belly sratch time loop
let bellyScratchTime = ["8:00AM", "11:00AM", "1:00PM", "4:00PM", "8:00PM", "10:00PM"]; 
  for(i = 0; i < bellyScratchTime.length; i++); {
    console.log(`\u{1F60A} Belly scratch time at: ${bellyScratchTime[i]} - Nochka loves it!`);
  };


