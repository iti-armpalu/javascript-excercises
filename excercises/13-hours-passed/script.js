/*

 * --- Excercise ---
 *  Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.

 * --- Examples ---
 * hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"
 * hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"
 * hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"

 * --- Notes ---
 * - Time t1 will always be the starting time and t2, the ending time.
 * - Return the string "No time has passed." if t1 is equal to t2.

 */

function hoursPassed(t1, t2) {

  // Create a function that takes time string and checks wheteher the time is AM or PM, if PM add 12 to th hours
  const convertTime = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}`;
  };

  if (t1 === t2) {
    return "No time has passed."
  }

  // Check if end time (t2) is smaller than start time(t1), if true, that means that end time is the next day and firdst need to get the difference between day end (24) minus start time and then add the hours that are leftover of the end time
  if (convertTime(t2) < convertTime(t1)) {
    hourDifference = +((24 - convertTime(t1))) + +(convertTime(t2));
  } else {
    hourDifference = +(convertTime(t2)) - +(convertTime(t1))
  }

  return `${hourDifference} hours has passed` ;
}

console.log(hoursPassed("3:00 AM", "9:00 AM"));
console.log(hoursPassed("2:00 PM", "4:00 PM"));
console.log(hoursPassed("1:00 AM", "3:00 PM"));
console.log(hoursPassed("5:00 AM", "5:00 AM"));
console.log(hoursPassed("7:00 PM", "1:00 AM"));
