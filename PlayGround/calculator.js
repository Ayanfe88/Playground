var x = 6;
var remainder = x % 2;

function RemNum(NumX)
{
    return(remainder != 0);
}

if (RemNum)
{
    console.log(" Number " + x + " is Odd ");
}
else
{
    console.log(" Number " + x + " is Even ");
}