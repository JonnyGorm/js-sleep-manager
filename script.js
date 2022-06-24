var hoursOfSleep = prompt(
  "How many hours of sleep did you get last night? (Enter hours between 0-12)"
);

if (hoursOfSleep >= 13) {
  console.log(prompt("Please enter a number between 0-12."));
} else if (hoursOfSleep >= 8) {
  console.log("Well done on getting the required rest hours your body needs!");
} else if (hoursOfSleep >= 6) {
  console.log(
    "Not bad, but you should consider getting an extra one or two hours rest at night."
  );
} else {
  console.log("You need more sleep, your body and mind will thank you for it!");
}
