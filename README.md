[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

#  Arrays, Loops, Objects, and Conditional Reps

#### Learning Objectives

- Practice with Arrays
- Practice with Loops
- Practice with Conditionals
- Practive with Objects

#### Prerequisites

- An introduction to JavaScript

#### Recommendations

- If homework is taking you more than 4 hours to complete:
    - Get on zoom with a classmate
    - Go to TA hours
    - Reach out to the instructional team during class time to schedule a 1:1 meeting
    - Don't stress about the Hungry For More section
- If home work is taking you less than 4 hours to complete
    - Work on the Hungry For More section - make the most of your time here and find challenges
    - Help someone who is stuck, teaching is a great way to learn something more in depth
    - Reach out to the instructional team for more challenges/ways to keep growing with your abilities

---

## **Getting Started**

1) In your terminal, navigate into `SEIR-Margaret/w01d03` (if that directory doesn't exist, create it!)

2) Fork this repository ([read the docs if you forget how](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo))

2) Clone down your forked repository ([read the docs if you forget how](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository))

3) Inside the `homework-w01d03` directory, create a file named `solutions.js` (this is where you will store your solutions to the JavaScript Exercises)

4) **Do** the JavaScript Exercises below (read the instructions completely)

5) **Submit** your work by following the Submition Guidelines at the bottom of this markdown

6) **Review** HTML & CSS (scroll way down)

---

# **Do: JavaScript Exercises**

## **Instructions:**

* All of your solutions should be written in the `solutions.js` file that you create.

* Keep your solutions organized! Use the following header structure to organize your code. Each solution should be written under the corresponding header.
```js
////////////////////////////////
// Easy Going
////////////////////////////////


////////////////////////////////
// Get Even
////////////////////////////////


////////////////////////////////
// Fizz Buzz
////////////////////////////////


////////////////////////////////
// Wild Wild Life
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
// Excited Kitten
////////////////////////////////


////////////////////////////////
// Find the Median
////////////////////////////////
```

* Test all of your code using this command: `node file_name.js`

* After each section (even if you're not fully done with it), *add* and *commit* your work. ([read the docs if you forget how](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line))

  * Please use the commit messages that you see at the end of each section (modify it if you need to ie `checkers almost solved`). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.

* When you are done with your homework, push it to your `origin` (your forked repository on GitHub), and follow the Submission Guidelines above.

## **Tips:**

* If you're stuck on something for "too long" or get overly frustrated, make a comment for yourself and move on. Return to it later. You may find some later problems easier. Sometimes taking a break and coming back later with fresh eyes is all you need.

* **You are not alone!** Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.

---

## **Exercises:**

---

## 1) Easy Going
* Write a for loop that will log the numbers 1 through 20.

---
#### &#x1F534; The commit message should read: <br> "Easy Going answered"
---

## 2) Get Even
* Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

---
#### &#x1F534; The commit message should read: <br> "Get Even answered"
---


## 3) Fizz Buzz

This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

---
#### &#x1F534; The commit message should read: <br> "Fizz Buzz answered"
---

## 4) Wild Wild Life
Use the following arrays to answer the questions below (name,species ,age, hometown):
You should be modifying the elements by accessing them. It is up to you which methods to use.

```js
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
```
1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

3. Give D'Art a second hometown by adding "Hawkins"

4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".

---
#### &#x1F534; The commit message should read: <br> "Wild Wild Life answered"
---

## 5) Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for of loop` (not a typo - try it out! Try a `for of` loop) to call `toUpperCase()` on each of them and print out the result.

> As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

---
#### &#x1F534; The commit message should read: <br> "Yell at the Ninja Turtles answered"
---

## 6) Where is Waldo

* With the following multi-dimensional array

```js
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
```
* Remove Eggbert (hint look at the slice/splice method(s))
* Change "Neff" to "No One"
* Access and console.log "Waldo"

---
#### &#x1F534; The commit message should read: <br> "Where is Waldo answered"
---

## 7) Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

<details><summary>Hint 1</summary>

 Make an array of the kitten's talking points

</details>

<details><summary>Hint 2</summary>

 Use bracket notation to access each talking point
  `kittyTalk[1];`

</details>

<details><summary>Hint 3</summary>
 Rather than hard-coding the array position number set a variable

  ```
    let meow = 0;
    kittyTalk[meow]
  ```

</details>

<details><summary>Hint 4</summary>

You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

</details>

<details><summary>Hint 5</summary>

 Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the    Math.random() number so that the range is between 0 and the length of the array

</details>

<details><summary>Hint 6</summary>

 Then round the number by using another Math method like `Math.floor()` or `Math.ceil()` or `Math.round()`

</details>

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

---
#### &#x1F534; The commit message should read: <br> "Excited Kittens answered"
---

## 8) Find the Median
- Find the median number in the following `nums` array, then console.log that number.
-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```

---
#### &#x1F534; The commit message should read: <br> "Find the Median answered"
---

## 9) Practice with Objects
- Copy and paste this object into your JS file.
- Follow the instructions below to practice working with Objects.

```js
let ship = {
  name: 'Millennium Falcon',
  speed: 11,
  crew: ['Han Solo', 'Chewbacca'],
  passengers: [],
  famous: true,
  heardOfIt: function() {
    console.log("You've never heard of the millennium falcon!?");
    this.famous = false;
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  removePassenger: function(passenger) {
    let index = this.passengers.indexOf(passenger);
    this.passengers.splice(index, 1);
  }
};
```


- Console log the name
- Change the speed to 13
- Add 2 passengers, "Leia" and "Luke"
- console log whether it's famous or not
- Ask if you've heard of the millenium falcon
- console log if it's still famous
- Remove Leia as a passengers
- Add a new property called "color" and set it equal to "beige"
- Add a new property called "missions" and set it equal to an empty object
- Add 3 properties to "missions"
     - kashyyk: true
     - "escape-from-asteroid" : "scary"
     -"smuggled cargo": ['prisoners', 'stolen goods', 'unobtanium']

---
#### &#x1F534; The commit message should read: <br> "My ship object is looking awesome!"
---

## **Hungry for More?**

---

## Lab Time Revisited

Choose one (or more) that you didn't get to solve in lab:

* Fibonnacci (morning lab)
* Checkerboard (morning lab)
* TwoDArray (afternoon lab)

---

## Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

#### Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

#### Dress Us Up
1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

---
#### &#x1F534; The commit message should read: <br> "Kristyn and Thom have their outfits ready for class - array practice"
---

## Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

#### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

---
#### &#x1F534; The commit message should read: <br> "Hungry for More: I tackled..."

---

## Technical Requirements
- A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
- At least one commit message per problem

---

## Deliverables
- Show you attempted each of the JavaScript Exercises in `solutions.js`.

---

## **Submission Guidelines**

- Must be submitted no later than before the start of next class
- Create an issue on the class repo. Click the issues tab:
![issues tab](https://i.imgur.com/9IuxV5N.png) - there is a link that will pop up in the issues template to the class wiki called Homework-Submission that you can go to to see a detailed walkthrough with images

---

# **Review: HTML & CSS**

Prepare yourself for tomorrow's morning exercise! Tomorrow we're going to be learning how to use Flexbox. If you don't know what that is right now, that's okay. The most important thing right now is that you feel comfortable with the basics of HTML and CSS.

You may watch these videos to refresh your knowlege. They are between 5 - 15 minutes long

[HTML Intro (tags, content, attributes, semantic HTML)](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Intro (including css files in HTML, elements)](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

[CSS Basics (colors, background, font properties)](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

---

Creator: WDI-Funke<br>
    Modified by: Kristyn Bryan, Karolin Rafalski, Kay Vail<br>
---