let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let age = 20

if (registeredEarly && age > 18){
  raceNumber += 1000;
}

if (registeredEarly && age > 18){
  console.log(`You registered for the early race. The It start at 9:30 am and your race number is ${raceNumber}`);
} 
else if (!registeredEarly && age > 18){
  console.log(`You register for the later race. It will start at 11:00 am and your race number is ${raceNumber}.`);
}
 else if(age < 18){
  console.log(`You're registered for the youth race. The race will start at 12:30 pm and your race number is ${raceNumber}.`);
} 

else {(age = 18)
  console.log(`Please see the registration desk before the races start`);
  }
