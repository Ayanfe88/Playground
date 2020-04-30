// Task1: creating object of a person
// name, age, sex
// Task2: create a function that returns the year of birth

var Person = {
    Name : " Femi ",
    Age : 18 , 
    Sex : " Male ",
};
console.log( " Your name is " +Person.Name);
 var Year = new Date().getFullYear() - Person.Age;  // calculating the year of birth
function getBirthYear() //function that returns the year of birth
{
   console.log(" Year of birth is " + Year);}

getBirthYear();
 
// Homework
function personClassifier()
{ if (2000 <= Year)
    {
    console.log(" Millennial ");}
else{
    console.log( " Not Millennial ");
}}
personClassifier();