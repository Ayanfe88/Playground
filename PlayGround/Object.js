// Task: creating object of a person
// name, age, sex
// create a function that returns the year of birth
var Person = {
    Name : " Femi ",
    Age :  24, 
    Sex : " Male "};
//console.log(Person);
var year = 2020 - Age; // calculating the year of birth
function getBirthYear() 
{
 return year;
}
console.log(getBirthYear(year));
