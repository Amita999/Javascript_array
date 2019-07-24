var myArray =  ["Prajwal",19];
console.log(myArray);//simple array
// Nested array or Multidimensional Array
var myArray2 = [
    ["Amita",23],
    ["Neha",18],
    ["Prajwal",19]
];
console.log(myArray2);
//Accessing multi-dimensional array
var dataOfArray = myArray2[0][0];
//first bracket = getting the element by index
//second bracket = index of element within the array of array
console.log(dataOfArray);//Amita
var dataOfArray1 = myArray2[0][1];
console.log(dataOfArray1);//23

//Accessing the elements of an array(Bracket Notation)
 var ourArray =[10,20,30,40,50];
 console.log(ourArray);
 var displData = ourArray[0];// 10
 console.log(displData);
 var displData1 = ourArray[1];//20
 console.log(displData1);
 var displData2 = ourArray[2];//30
 console.log(displData2);
 var displData3 = ourArray[3];//40
 console.log(displData3);
 var displData4 = ourArray[4];//50
 console.log(displData4);
 //Modify array using Array 
 ourArray[4]=80;
 console.log(ourArray);

