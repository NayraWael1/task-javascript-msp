
//  لديك المتغير التالي والمطلوب 
//  Numberفي السطر الأول نريد طباعة الرقم 100 فقط من المتغير والتأكد من أن نوعه هو 
// Numberفي السطر الثاني نريد طباعة الرقم 100.57 فقط من المتغير والتأكد من أن نوعه هو 

let num= "100.56789 Views";
// write the code here

let num1 = parseInt(num);
console.log(num1); 
console.log(typeof num1); 

// ------------------------------------------------------------------------





// قم بإستخدام المتغير التالي لتخرج بالنتيجة 10
// يجب استخدام ال Number Methods
let flt = 10.4;
// write the code here

console.log(parseInt(flt)); // 10


// ---------------------------------------------------------------------------





let chorus = 'Ja ';
console.log(chorus.repeat(3)); 
// what is the output?? Ja Ja Ja




// ---------------------------------------------------------------------------------------




//  لديك المتغير التالي والمطلوب 
//Output: 'Hei'  طباعه
let phrase = 'Hei, verden';
console.log(phrase.substring(0,3)); 


// ---------------------------------------------------------------------------

//  لديك المتغير التالي والمطلوب 
//  Output: 'norge'
let uppercaseText = 'NORGE';
console.log(uppercaseText.toLocaleLowerCase())

// ---------------------------------------------------------------------------



// //  لديك المتغير التالي والمطلوب 
// المطلوب ازاله المسافات قبل وبعد الكلمه
let paddedText = '  Norge  ';
console.log(paddedText.trim()); // Output: 'Norge'

// --------------------------------------------------------------------------



let pi = 3.14159;
// write code here
console.log(pi.toFixed(2)); // Output: '3.14'


// ------------------------------------------------------------------------------




console.log(isFinite(2 / 0)); 
// what is the output?? false


// -----------------------------------------------------------------------------

// لديك متغير يحتوي على String
// المطلوب جلب أول حرف من ال String
// يجب طباعه الحرف صغير Small Letter
// يجب تنفيذ الحل ب 3 طرق مختلفة
let userName = "Ahmed";
console.log(userName.charAt(0).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName[0].toLocaleLowerCase());

 





