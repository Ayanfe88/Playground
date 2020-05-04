//Write a javascript program that sums an array of integers. 
//e.g when the function receives array [1, 5, 7, 2] it returns 15 (1 + 5+7+2) as the result

var inputArray = ["a",2,6,10];
function sumArray(){
             
    if (toString.call(inputArray) != "[object Array]")// checking for array inputs
       return false;

       for(var i=0;i<inputArray.length;i++)
                 {                  
                   if(isNaN(inputArray[i])){
                   continue;
                    }

       const Sum = inputArray => inputArray.reduce((a,b) => a + b, 0);
        return Total = Sum(inputArray);
       }
    }
    console.log(sumArray());