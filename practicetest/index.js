 /*
 //object
 const product ={
    productName :"ball pen",
    rating : 4,
    offer : 5,
    price : 270,
    color : "blue",
    deal : true,
}
console.log(product)

//if else conditional
let age =13

 if (age < 18) {
    console.log(age, "is not adult")
 }
 else {
    console.log(age, "is adult")
 }

 //ternary operator
let yourage =16

 let result =  yourage > 18 ? "adult" : "not adult"
console.log("you are ", result)


//if else if conditional
let num = prompt("Enter an Number to check if it is multiple of 2,3 ,5")

if (num%2 === 0) {
    console.log(num, "is  multiple of 2")
}
else if  (num%3 === 0) {
    console.log(num, "is multiple of 3")
}
else if (num%5 === 0) {
    console.log(num, "is  multiple of 5")
}
else {
    console.log(num, "is not multiple of 3 , 2 ,5")
}



let marks = prompt("enter your marks to find your grade")
let grades ;

if (marks <= 100 && marks >= 90) {
    grades = "A"
}
else if(marks <= 89 && marks >= 70) {
    grades = "B"
}
else if(marks <= 79 && marks >= 60) {
    grades = "C"
}
else if(marks <= 59 && marks >= 50) {
    grades = "D"
}
else if(marks <= 49 && marks >=0) {
   grades = "F"
}

console.log("Your Grade is", grades) 


//for loop
for (i=1; i<=7 ; i++){
    console.log(i)
}

let myname = "hadia batool"
for (i = 1 ; i <= 5 ; i++ ) {
    console.log(myname);
}
  //sum of n terms
let sum = 0;
let n = 6
for (i=1; i<=n; i++) {                //0+1=1    1+2=3    3+3=6     6+4=10     10+5=15     15+6=21
   sum = sum + i;
}
  console.log("sum is", sum)
 

//while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++ ;
}


//do while loop
let i = 1;
do {
    console.log(i)
    i++
}
while( i <= 5)


//for of loop            //used for strings and arrays
let str = "hadia batool";

for (let val of str) {
    console.log(val)                    
}
console.log(str)

//for in loop           //used for objects

 let student ={
    name : "hadia batool",       //object
    age : 16,
    marks : 93 ,
    isPass : true,
};
for (let key in student) {                                           //key are (name,age ,marks,is pass)
    console.log("key :",key, "" ,"value :" ,student[key])             //values are hadia, 16, 93, true      denoted by student[key]
}




// print all even no. between 0 and 100
for (let num = 0 ; num <= 100 ; num++){
    if (num%2 === 0)
    console.log(num);
}


//create a game where yu start with any random number .ask the user to keep guessing the correct number.
let num = 2;
let userNum= prompt("guess a random number");

while (userNum != num){
   userNum =  prompt("you guessed the wrong number , guess again");
}

console.log ("congratulations! you have guessed the right number");

*/

//strings
let str = "hadia batool"
console.log(str)
console.log(str.length)                                         //string
console.log(str[4])
console.log(str.charAt(7))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log (str.indexOf("h"))
console.log(str.slice(1, 3))
console.log(str.replace("batool", ""))

/*
//template literals 
let sentence = `my name is hadia batool  ${1+4}`        //basiclly it is also a string but is used to embed expressions in strings easily 
console.log(sentence)

let obj = {
    item : "pen" ,
    price : 50 ,
}

let templateliteral = `the price of ${obj.item} is ${obj.price} rupees`              //as there is no need to enter qoutes or commas
console.log(templateliteral)

let name = "hadia\nbatool"                                           // \n is used to move text on next line
console.log(name)                                                    // \t is used to give tab space 



// prompt the user to enter their full name. generate their usernme consisting of @ their name and length of their name
let fullName =prompt("enter your fullname (without spaces)")
let userName ="@" + fullName + fullName.length 

console.log(userName)



//arrays
let marks =[85, 97 ,44,37,76 ,60]
console.log(marks)
console.log(marks.length)                           //property

let friends = ["hadia" ,"hijab" ,"aqsa", "husna","raina" ]
console.log(friends)
console.log(friends[1])                              //array indices
friends[3]  = "amina"                                //to change value of array indice         it doesnot work for strins
console.log(friends[3])     
                                                      //strings are imutable while arrays are mutable
//for loop in array
 for(let friend=0; friend<=friends.length ; friend++)           //friend = i
 {
     console.log(friends[friend])
 }

// for of loop in array
for (let friend of friends){
    console.log(friend)
}

//finding average
let marks =[85, 97 ,44,37,76 ,60]
let sum =0
for (i = 0; i<marks.length ; i++){                         //or for(let val of marks){sum += val}

    sum += marks[i] 
}
let average =sum/marks.length
console.log (average)
*/

let price = [250, 645, 300, 900, 50]   
//console.log(price);

let discount= 0
for (let i= 0 ; i<=price.length ; i++ ){
   discount = price [i] / 10 
//console.log (discount)
   
}

