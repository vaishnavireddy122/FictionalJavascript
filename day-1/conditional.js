//1. if Statement:
let age = 18;
if (age >= 18) {
console.log("You are an adult.");
}

//2. if...else Statement
   let age1 = 16;
   if (age1 >= 18) {
    console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }

//3. if...else Statement: 
    let score = 75;
   if (score >= 90) {
     console.log("Grade: A");
   } else if (score >= 80) { 
     console.log("Grade: B");
   } else if (score >= 70) {
     console.log("Grade: C");
   } else {
     console.log("Grade: F");
   }

//4.switch Statement
   let day = "Tuesday";
  switch (day) {
    case "Monday":
      console.log("Start of the week.");
      break;
    case "Tuesday":
      console.log("Second day of the week.");
      break;
    case "Friday":
      console.log("Weekend is near!");
      break;
    default:
      console.log("Just another day.");
}
