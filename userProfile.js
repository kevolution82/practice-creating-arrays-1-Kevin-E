// Task 1: Create the Profile
let userProfile = [
    "Jordan Blake",   // Name
    27,               // Age
    true,             // Subscription Status
    "Austin, TX",     // Location
    ["Photography", "Hiking"] // Hobbies (array)
];

// Task 2: Access and Log Profile Details
console.log("User's Name:", userProfile[0]);
console.log("Second Hobby:", userProfile[4][1]);

// Task 3: Modify the Profile
userProfile[1] = 28; // Update age
userProfile[4].push("Cooking"); // Add new hobby

// Task 4: Display the Updated Profile
console.log("Updated Profile:", userProfile);
