/*

 * --- Excercise ---
 * Tower of Hanoi, is a mathematical puzzle which consists of three towers (pegs) and more than one rings is as depicted. These rings are of different sizes and stacked upon in an ascending order, i.e. the smaller one sits over the larger one. There are other variations of the puzzle where the number of disks increase, but the tower count remains the same. Create a function that takes a number disks as an argument and returns the minimum amount of steps needed to complete the game.

 * --- Examples ---
 * towerHanoi(3) ➞ 7
 * towerHanoi(5) ➞ 31
 * towerHanoi(0) ➞ 0


 * --- Notes ---
 * - The amount of disks is always a positive integer.
 * - 1 disk can be changed per move.

 */

function towerHanoi(disks) {
  // https://www.tutorialspoint.com/data_structures_algorithms/tower_of_hanoi.htm
  //Tower of Hanoi puzzle with n disks can be solved in minimum 2^n−1 steps.
  let numberOfMoves = Math.pow(2, disks) - 1;
  return numberOfMoves;
}

// The 2^n−1 steps in recursive
// But how to return count?
function towerOfHanoi(disk, from_rod, to_rod, aux_rod) {
  if (disk === 1) {
    console.log(`Move disk 1 from rod ${from_rod} to rod ${to_rod}`);
    return;
  }
  towerOfHanoi(disk - 1, from_rod, aux_rod, to_rod); // Step 1
  console.log(`Move disk ${disk} from rod ${from_rod} to rod ${to_rod}`); // Step 2
  towerOfHanoi(disk - 1, aux_rod, to_rod, from_rod); // Step 3
}

console.log(towerHanoi(3));
console.log(towerHanoi(0));
console.log(towerOfHanoi(3, "A", "C", "B"));
