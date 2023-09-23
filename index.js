


// Prompt the user to enter their age
const age = prompt("Enter your age in figures:");

// Prompt the user to enter whether they are a citizen (yes or no)
const Citizenship = prompt("Are you a citizen? (yes or no)");

// Check if the age is at least 18 and if the person is a citizen
if (age >= 18 && Citizenship === "yes") {
  console.log("You are eligible to vote!");
} else if (age < 18 && Citizenship === "yes") {
    console.log("You are not up to age therefore, you are not eligible to vote");
  } 
else {
  console.log("You are not eligible to vote.");
}
