// task 1
let stringvariable = 'Sherzod';
let boolvariable =true;
let numbervariable = 20;

StringplusBoolean = stringvariable + boolvariable; //(string plus boolean)
StringplusNumber = stringvariable + numbervariable; //(string plus number)
NumberplusBoolean = numbervariable + boolvariable; //(number plus boolean)

console.log(StringplusBoolean); //on the console result: Sherzodtrue
console.log(StringplusNumber); //on the console result: Sherzod20
console.log(NumberplusBoolean); //on the console result: 21 because true returned 1

// task 2
StringmultiplyBoolean = stringvariable * boolvariable; //(string multiply boolean)
StringmultiplyNumber = stringvariable * numbervariable; //(string multiply number)
NumbermultiplyBoolean = numbervariable * boolvariable;//(number multiply boolean)

console.log(StringmultiplyBoolean); //on the console result: NaN
console.log(StringmultiplyNumber); //on the console result: NaN
console.log(NumbermultiplyBoolean); //on the console result: 20 because true returns 1 

// task 3

StringdivideBoolean = stringvariable / boolvariable; //(string divide boolean)
StringdivideNumber = stringvariable / numbervariable; //(string divide number)
NumberdivideBoolean = numbervariable / boolvariable;//(number divide boolean)

console.log(StringdivideBoolean); //on the console result: NaN
console.log(StringdivideNumber); //on the console result: NaN
console.log(NumberdivideBoolean); //on the console result: 20 because true returns 1 


// task 4

// boolean to string
let booltostr=String(boolvariable);
console.log(typeof strtobool);

// number to string
let numtostr=String(numbervariable);
console.log(typeof numtostr);

// string to number 
let strtonum=Number(stringvariable);
console.log(typeof strtonum);

// boolean to number
let booltonum=Number(boolvariable);
console.log(typeof booltonum);

// string to boolean
let str1tobool=Boolean(stringvariable);
console.log(typeof str1tobool);

// number to boolean
let numtobool=Boolean(numbervariable);
console.log(typeof numtobool);