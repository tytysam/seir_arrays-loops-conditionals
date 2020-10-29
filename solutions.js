// ////////////////////////////////
// // Easy Going
// ////////////////////////////////
for (i = 1; i < 21; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (i = 0; i <= 200; i += 2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";

console.log(dart);

//////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (each of ninjaTurtles) {
  console.log(each.toUpperCase());
}

//////////////////////////////
// Where is Waldo
//////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
// Excited Kitten
////////////////////////////////
for (i = 1; i < 21; i++) {
  let randomNum = () => {
    return Math.random() * 3;
  };

  if (i % 2 === 0) {
    if (randomNum() <= 1) {
      console.log("...human...why you taking pictures of me?...");
    } else if (randomNum() > 1 && randomNum() <= 2) {
      console.log("...the catnip made me do it...");
    } else if (randomNum() > 2) {
      console.log("...why does the red dot always get away...");
    } else {
      console.log("Love me, pet me! HSSSSSS!");
    }
  }
}

////////////////////////////////
// Find the Median
////////////////////////////////
const nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12,
];

//#Resource for arr.sort()
// https://techformist.com/average-median-javascript/

//If array length is even, then median is average of two numbers...
//If array length is odd, then pick the middle number as median.

const len = nums.length;
const arrSort = nums.sort();
const middle = Math.floor(nums.length / 2);

const median = () => {
  if (len % 2 === 0) {
    return arrSort[middle] + arrSort[middle - 1] / 2;
  } else {
    return arrSort[middle - 1];
  }
};

////////////////////////////////
// Practice with Objects
////////////////////////////////
