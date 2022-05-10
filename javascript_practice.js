// alert("emmanuel")


// variable

// alert(name);

console.log(name);

var age=12

console.log("my name is " +name+" and i am "+age+" years old")

var car="volkswagen";
var city="Berlin";
var country="Germany";

console.log(car+" vehicles are made in "+city+" "+country)

// mathematical operators in JS

// ADDITION(+),SUBTRACTION(-),MULTIPLICATION(*),DIVISION(/),MODULO(%)

var num1=9;
var num2=3;

var sumResult =num1 + num2;
var divResult = num1 / num2;
var minusResult = num1 - num2;
var multiplyResult = num1 * num2;
var modulResult = num1 % num2;

console.log("the sum of "+num1+" and " +num2 +" is :" +sumResult);
console.log("the division of "+num1+" and " +num2 +" is :" +divResult);
console.log("the difference of "+num1+" and " +num2 +" is :" +minusResult);
console.log("the multiplication of "+num1+" and " +num2 +" is :" +multiplyResult);
console.log("the multiplication of "+num1+" and " +num2 +" is :" +modulResult);

// COMPARATION OPERATORS IN JS
// GREATERT THAN(>)
// LESS THAN(<)
// GREATERT THAN OR EQUAL TO(>=)
// LESS THAN OR EQUAL TO(<=)
// EQUAL TO(==)
// NOT EQUAL TO(!=)
// IDENTICALLY EQUAL TO(===)
// NOT IDENTICALLY EQUAL TO(!==)

// IF STATEMENT

if(3>2){
    console.log("you are right");
}

// IF-ELSE STATEMENT

if(3>2){
    console.log("you are CORRECT");
}else{
    console.log("you are WRONG")
}


if(3<2){
    console.log("you are CORRECT");
}else{
    console.log("you are WRONG")
}

// IF-ELSE-IF STATEMENT

if(3>5){
    console.log("A")
}else if(7>12){
    console.log("B")
}else if(8>8){
    console.log("C")
}else if(7==5){
    console.log("D")
}else{
    console.log("E")
}


var num = 32

if(num%2==0){
    console.log(num+" is an odd number");

}else{
    console.log(num+ " is an even number")
}

var num = 989

if(num%2==0){
    console.log(num+" is an odd number");

}else{
    console.log(num+ " is an even number")
}

// PROMPT

// var name1 = prompt("what is your NAME")

// console.log("my name is" + name1)

// CONCATINATING A STRING TO INTEGAR
// var age2 = parseInt(prompt("what is your age?"))

// console.log("my age multiply by 5 is:" +age2*5)
 

// var num10 = parseInt(prompt("enter a number and i will detect for you if it's even or odd"))

// if(num10%2 ==0){
//     console.log(num10 + " is an even number")
// }else{
//     console.log(num10 + " is an odd number")
// }
 
// TO DETECT THE YEAR A USER WAS BORN FROM THE AGE HE INPUT

// var name11 = prompt("what is your name")
// var age11 = parseInt(prompt("what is your age?"))

// var dob = 2021 -age11;

// console.log(name11+ " you were born in the year " +dob);

// var name2 = prompt("Please Enter your Nmae: ")
// var score = parseInt(prompt("what is your age?"))

// var dob =2021-score;

// console.log(name2 +" you were born in the year " + dob)

// var amount =500;
// var amt1 = 100;
// var amt2 = 200;
// var amt3 = 500;
// var amt4 = 1000;
// var amt5 = 1500;
// var dataPlan = alert("select a data plan:")
// var data1 = prompt("\n 1.10mb for:" +amt1+ " \n 2. 50mb for: " +amt2+ " \n 3. 100mb is for:" +amt3+ " \n 4. 500mb for: "+amt4+  " \n 5. 1GB for:" +amt5);

// if(amt1 < amount == data1){
//     console.log("you have successfully purchaed " +amt1+ " worth of Data and you have N400 balance")
// }else if(amt2 < amount == data1){
//     console.log("you have successfully purchaed " +amt2+ " worth of Data and you have N300 balance")
// }else if(amt3 < amount == data1){
//     console.log("you have successfully purchaed " +amt3+ " worth of Data and you have no balance")
// }else if(amt4 < data1){
//     console.log("you don not have sufficient fund")
// }else if(amt5 < data1){
//     console.log("you don not have sufficient fund")
// }

// var dataplan = parseInt(prompt("selecet a data plan\n\n 1. 10MB for N100 \n 2.50MB for N200 \n 3. 100MB for N500 \n 4.500MB for N1000 \n 5. 1GB for N1,500")) 

// var balance =500;
// var plan1 =100;
// var plan2 =200;
// var plan3 =500;
// var plan4 =1000;
// var plan5 =4500;

// if(dataplan ==1){
//     var newBalance = balance-plan1;
//     console.log("you have successfuly purchased the 10mb plan. your balance is " +newBalance)
// }else if(dataplan ==2){
//     var newBalance = balance-plan2;
//     console.log("you have successfuly purchased the 50mb plan. your balance is " +newBalance)
// }else if(dataplan ==3){
//     var newBalance = balance-plan3;
//     console.log("you have successfuly purchased the 100mb plan. your balance is " +newBalance)
// }else if(dataplan ==4){
//     var balanceLeft = plan4-balance;
//     console.log("you do not have sufficient fund to perform this transaction. you will need " +balanceLeft+ " more to buy this plan")
// }else if(dataplan ==5){
//     var balanceLeft = plan5 - balance;
//     console.log("you do not have sufficient fund to perform this transaction. you will need " +balanceLeft+ " more to buy this plan")
// }else{
//     console.log("please select any of the numbers above")
// }

// TESTING THE MULTIPLE SET OF CONDITION
// AND(&&),OR(||)

// var churchName = prompt("what is your Name?")
// var churchAge = prompt("what is your Age?")

// if(churchAge>= 0 && churchAge <= 4){
//     console.log(churchName+ " you belong to the babies church")
// }else if(churchAge>= 5 && churchAge <= 12){
//     console.log(churchName+ " you belong to the Children's church")
// }
// else if(churchAge>= 13 && churchAge <= 19){
//     console.log(churchName+ " you belong to the Teenager's church")
// }
// else if(churchAge>= 20 && churchAge <= 29){
//     console.log(churchName+ " you belong to the Youth's church")
// }
// else if(churchAge>= 30 && churchAge <= 59){
//     console.log(churchName+ " you belong to the Adult church")
// }
// else if(churchAge>= 60 && churchAge <= 79){
//     console.log(churchName+ " you belong to the Elder's church")
// }
// else if(churchAge>= 80){
//     console.log(churchName+ " you belong to the online church THANK YOU")
// }
// else if(churchAge <0){
//     console.log(churchName+ " your age cannot be negative")
// }
// else if(churchAge>150){
//     console.log(churchName+ " please put a real age! THANK YOU")
// }else{
//     console.log(churchName+ " your age must be a number! THANK YOU")
// }


// var clientName = prompt("please enter your name");
// var clientAge = prompt("please enter your age")

// var eligibleAge = 18;

// if(clientAge>=0 && clientAge<=9){
//     var newAge = eligibleAge - clientAge
//     console.log( clientName+ " please calmdown you still have " +newAge+ " more years to go")
// }else if(clientAge >= 10 && clientAge <= 15){
//     var newAge = eligibleAge - clientAge
//     console.log( clientName+ " please calmdown you still have " +newAge+ " more years to go")
// }else if(clientAge >=16 && clientAge <= 17){
//     var newAge = eligibleAge - clientAge
//     console.log( clientName+ " You are almost there,you only need " +newAge+ " more years")
// }else if(clientAge >= 18 && clientAge<=150){
//     console.log( clientName+ " congratulations you are elegible to vote")
// }else if(clientAge > 150){
//     console.log( clientName+ " please put a real age")
// }else if(clientAge < 0){
//     console.log( clientName+ " your age cannot be negative")
// }else{
//     console.log(clientName+ " your age must be a number")
// }


// var studName = prompt("please put your name");
// var testScore = parseInt(prompt("put your test score"));
// var examScore = parseInt(prompt("put your exam score"));

// var totalScore = (testScore + examScore )
// var newScore1 =totalScore/2

// if(newScore1>=0  && newScore1 <= 39){
//     console.log(studName+" your score is " +newScore1+" and your Grade is F")
// }else if(newScore1>=40  && newScore1 <= 44){
//     console.log(studName+" your score is " +newScore1+" and your Grade is E")
// }else if(newScore1>=45  && newScore1 <= 49){
//     console.log(studName+" your score is " +newScore1+" and your Grade is D")
// }else if(newScore1>=50  && newScore1 <= 59){
//     console.log(studName+" your score is " +newScore1+" and your Grade is C")
// }else if(newScore1>=60  && newScore1 <= 69){
//     console.log(studName+" your score is " +newScore1+" and your Grade is B")
// }else if(newScore1>=70  && newScore1 <= 100){
//     console.log(studName+" your score is " +newScore1+" and your Grade is A")
// }else{
//     console.log("please put your scores correctly")
// }





// var govName = "babajide";

// var que1 = prompt("are you a resident of Lagos state? | Enter yes or no")

// if(que1 =="yes"){
//     que2 = prompt("who is the governor of lagos state").toLowerCase();
//     if(que2 == govName){
//         console.log(que2+" is correct. you are right")
//     }else{
//         console.log(que2+ " is not the governor of lagos state. how can you live in lagos and dont know the governor of lagos state")
//     }

// }else{
//     console.log("Sorry,you must be a resident of lagos state to partake in this quiz")
// }




// var enterCode = prompt("Enter your CODE HERE!");


// if(enterCode == "*131#"){
//      var dataplan = prompt("selecet a data plan\n\n 1. Data Plans \n 2. XtraValue(Data+Voice) \n 3. Social Bundles \n 4. Balance Check \n 5. Roaming/Int'l \n 6. Borrow Credit/Recharge \n 7. Gift Data \n 8. Video packs \n 9. Hot Deals \n 99. Next");

//      if(dataplan == 1){
//         var sub1 = prompt("selecet a data plan\n\n 1. 10MB for N100 \n 2. 50MB for N200 \n 3. 100MB for N500 \n 4. 500MB for N1000 \n 5. 1GB for N1,500")
//      }
//      if(sub1 == 1){
//          alert("you have successfully subscribe to 10MB for N100 and your Balance is N400")
//      }
//      if(sub1 == 2){
//          alert("you have successfully subscribe to 50MB for N200 and your Balance is N300")
//      }
//      if(sub1 == 3){
//          alert("you have successfully subscribe to 100MB for N500 and your balance is N0")
//      }
//      if(sub1 == 4){
//          alert("sorry you dont have sufficient fund to buy this Data you need N500 more")
//      }
//      if(sub1 == 5){
//          alert("sorry you dont have sufficient fund to buy this Data you need N1000 more")
//      }
//      if(dataplan == 2){
//         prompt("Welcome to XtraValue\n\n 1. 10MB and freeCalls for N100  \n 2. 50MB and freeCalls for N200 \n 3. 100MB and freeCalls for N500 \n 4. 500MB and freeCalls for N1000 \n 5. 1GB and freeCalls for N1,500")
//      }
//      if(dataplan == 3){
//         prompt("selecet a data plan\n\n 1. 10MB for N100 \n 2. 50MB for N200 \n 3. 100MB for N500 \n 4. 500MB for N1000 \n 5. 1GB for N1,500")
//      }
//      if(dataplan == 4){
//         prompt("To check your balane dial 1")
//      }
//      if(dataplan == 5){
//         prompt("For international calls dial *111#")
//      }
//      if(dataplan == 6){
//         prompt("Borrow Credit/Card\n\n 1. N85 for N100 \n 2. N150 for N200 \n 3. N450 for N500 \n 4. N900 for N1000 \n 5. N1400 for N1,500")
//      }
//      if(dataplan == 7){
//         prompt("Get a free Gift if you Load up to N1500 in a week")
//      }
//      if(dataplan == 8){
//         prompt("make video calls for as cheap as N10 per second")
//      }
//      if(dataplan == 9){
//         prompt("Our Hot Deals Package starts next week")
//      }
//      if(dataplan == 99){
//         prompt("Go TO NXT PAGE")
//      }
// }else{
//        alert("you entered the wrong code")
// }

// var balance = 500;


// var dataplan1 = 50;
// var dataplan2 = 100;
// var dataplan3 = 500;
// var dataplan4 = 1000;
// var dataplan5 = 1500;

// var dataCode = "*131#";

// var ussdCode = prompt("dial the code for Data Plan");

// if(ussdCode == dataCode){


// }else{
//     alert("you entered the wrong code")
// }


// ARRAYS

var students =["williams","Favour","Uche","Timi","eMMANUEL"];
console.log(students[1]);

console.log(students[2]+" is a Developer");
students[2] = "eugene"
console.log(students)


// SOME ARRAY METHOD
// TO REMOVE THE LAST ITEM IN AN ARRAY,YOU USE THE POP METHOD

students.pop();
console.log(students);

// TO ADD ONE OR MORE IN AN ARRAY,YOU USE THE PUSH METHOD

students.push("Etinosa","David","Bukola")
console.log(students)

// TO REMOVE THE FIRST ITEM IN AN ARRAY,USE SHIFT METHOD

students.shift();
console.log(students);

// TO ADD ONE OR MORE ITEMS TO THE BEGINING OF AN ARRAY,USE THE UNSHIFT METHOD

students.unshift("micheal","success","priscillia");
console.log(students);


// if(ready == "yes"){
//     var answer1 = prompt("What is the capital of Nigeria \n\n A. lagos \n B. Abuja \n C. Abeokuta \n D. Oyo")
//          var answer2 = prompt("who is the president of Nigeria? \n\n A. GOODLUCK JONATHAN \n B. DINO MELAYE \n C. MOHAMEED BUHARI \n D. TINUBU")
//              var answer3 = prompt("How many States are in Nigeria? \n\n A. 25 \n B. 15 \n C. 79 \n D. 36")
//                  var answer4 = prompt("Who is the Vice President of Nigeria? \n\n A. Yemi Osinbanjo \n B. Namadi Sambo \n C. Atiku Abubaka \n D. Uche Eugene")
//                      var answer5 = prompt("How many colours are there in the Nigeria Flag? \n\n A. 7 \n B. 3 \n C. 6 \n D. 2")
//                          alert("YOU HAVE FINISHED YOUR EXAMS")
 
//  }else{
//      console.log("OKAY GOODBYE")
//  }

// if(ready == "yes"){
//     var answer1 = prompt("What is the capital of Nigeria \n\n A. lagos \n B. Abuja \n C. Abeokuta \n D. Oyo")
//         if(answer1 =="b",score0+=1){
//             var answer2 = prompt("who is the president of Nigeria? \n\n A. GOODLUCK JONATHAN \n B. DINO MELAYE \n C. MOHAMEED BUHARI \n D. TINUBU")
//             if(answer2 =="c",score0+=1){
//                 var answer3 = prompt("How many States are in Nigeria? \n\n A. 25 \n B. 15 \n C. 79 \n D. 36")
//                 if(answer3 =="d",score0 +=1){
//                     var answer4 = prompt("Who is the Vice President of Nigeria? \n\n A. Yemi Osinbanjo \n B. Namadi Sambo \n C. Atiku Abubaka \n D. Uche Eugene")
//                     if(answer4 =="a",score0 +=1){
//                         var answer5 = prompt("How many colours are there in the Nigeria Flag? \n\n A. 7 \n B. 3 \n C. 6 \n D. 2")
//                          if(answer5 =="d",score0 +=1){
//                             alert("YOU HAVE FINISHED YOUR EXAMS")
//                          }

//                     }
//                 }
//             }
//         }
//  }else{
//      console.log("OKAY GOODBYE")
//  }


// var score0 = 0;

// var contName = prompt("please enter your name first");

// var ready = prompt("please indicate if you are ready for your EXAMS | YES OR NO");

// if(ready == "yes"){

//     var answer1 = prompt("What is the capital of Nigeria \n\n A. lagos \n B. Abuja \n C. Abeokuta \n D. Oyo")

//     if(answer1 =="b"){
//         score0 += 1;
//     }

//     var answer2 = prompt("who is the president of Nigeria? \n\n A. GOODLUCK JONATHAN \n B. DINO MELAYE \n C. MOHAMEED BUHARI \n D. TINUBU")

//     if(answer2 =="c"){
//         score0 += 1;
//     }

//     var answer3 = prompt("How many States are in Nigeria? \n\n A. 25 \n B. 15 \n C. 79 \n D. 36")
//     if(answer3 =="d"){
//         score0 += 1;
//     }
//     var answer4 = prompt("Who is the Vice President of Nigeria? \n\n A. Yemi Osinbanjo \n B. Namadi Sambo \n C. Atiku Abubaka \n D. Uche Eugene")
                    
//     if(answer4 =="a"){
//         score0 += 1;
//     }
    
//     var answer5 = prompt("How many colours are there in the Nigeria Flag? \n\n A. 7 \n B. 3 \n C. 6 \n D. 2")
    
//     if(answer5 =="d"){
//         score0 += 1;
//     }
    
//     alert("YOU HAVE FINISHED YOUR EXAMS")
                         
//  }else{
//      alert("OKAY GOODBYE")
//  }


// var regNumber = ["reg00001","reg00002","reg00003"];

// var regPin = ["1234","0000","1111"];

// var url = "www.ucheresultchecker.com"

// var urlChecker = prompt("Enter the Result URL Checker \n\n")

// if(urlChecker === url){

//      var enterReg = prompt("Please Enter Your Jamb Registration Number");
//      if(enterReg ==""){

//         alert("Your Jamb Registration Number is Required");
        
//      }else{
//         var pinEnter = prompt("please enter your pin number");

//         if(pinEnter ==""){

//            alert("YOUR PIN NUMBER IS REQUIRED"); 

//         }else{
//             if((enterReg == regNumber[0] || enterReg == regNumber[1] || enterReg == regNumber[2])&&(regPin[0] == pinEnter || regPin[1] == pinEnter || regPin[2] == pinEnter)){
//                 if(score0 <= 2){
        
//                     alert("you failed,your score is:\n\n" +score0+"/5 \n\n Please try again next year")
//                 }else{
        
//                     alert("you passed the exam and your score is:\n\n" +score0+"/5 \n\n You will be notify for admission soon")
//                 }
             
        
//              }else{
//                  alert("your Reg Number or your Pin Number is wrong")
//              }
        
            
//             }

//         }

//     }else{
//         alert("please enter a valid url")
//     }


// var userEmail ="text@text.com"
// var pass ="password12345"
// var secQuest ="what is your pet name:"
// var secAnswer ="dog"

// alert("WELCOME TO YOUR HOMEPAGE")
// var emailAddress = prompt("ENTER YOUR EMAIL ADDRESS:")

// if(emailAddress == userEmail){

//     var secQuest =prompt("what is your PET name?");

//     if(secAnswer == secQuest){

//        var newPass1 = prompt("enter new password:");
//        var newPass2 = prompt("confirm password:");

//        if(newPass1 == newPass2){

//            var newPass3 = prompt("Login with new password:")

//            if(newPass3 == newPass1 || newPass3 == newPass2){
//                pass = newPass3

//                alert("your new password is: " +pass)

//            }else{
//                alert("your password is wrong")
//            }

//        }else{
//            alert("new and confirm password do not match")
//        }

//     }else{
//         alert("your security answer is wrong")
//     }

// }else{
//     alert("sorry this email address does not exist")
// }
   

// LOOP

// FOR LOOP,WHILE LOOP,DO WHILE LOOP,FOREACH LOOP

// FOR LOOP

// SYNTAX OF A FOR LOOP
// for(initialization;condition;increment){
    // execute statement()}

    // TO COUNT FROM 1-10

for(i=1;i<=30;i++){
    console.log(i)
};

var animals = ["dog","cat","fish","rat"]


// var promptUser = prompt("are you ready to take this quiz?").toLowerCase()

// if(promptUser =="yes"){
//     var quest1 = prompt("What is 5 * 5 \n\n a. 25 \n b. 20 \n c. 26 \n d. 29").toLowerCase()

//     if(quest1 =="a"){
//         console.log("you are correct. Wonderfull")

//     }else{
//         console.log("you picked the wrong option.please try again later")
//     }

// }else{
//     console.log("Thank you,ypu may try again later")
// }


// var regNo = "reg0000"
// var pinNo = 0000
// var urlChecker = "www.uche.com"
// var personWin = 0
// var score = 0

// var namePerson = prompt("Please enter your name to start the Quiz");

// var quest1 = prompt("what is 2 * 2 \n\n a. 25 \n b .4 \n c. 16 \n d. 9")

// if(quest1 == "b"){
//     personWin += 100000
//     score += 1
// }

// var quest2 = prompt("what is 3 * 3 \n\n a. 25 \n b .4 \n c. 16 \n d. 9")

// if(quest2 == "d"){
//     personWin += 200000
//     score += 1
// }

// var quest3 = prompt("what is 4 * 4 \n\n a. 25 \n b .4 \n c. 16 \n d. 9")

// if(quest3 == "c"){
//     personWin += 300000
//     score += 1
// }

// var quest4 = prompt("what is 5 * 5 \n\n a. 25 \n b .4 \n c. 16 \n d. 9")

// if(quest4 == "a"){
//     personWin += 400000
//     score += 1
// }

// var quest5= prompt("what is 6 * 6 \n\n a. 25 \n b .4 \n c. 16 \n d. 36")

// if(quest5 == "d"){
//     personWin += 500000
//     score += 1
// }

// alert("you have finished your Exams")
// var url = prompt("please enter the result url checker to check your result")

// if(url == urlChecker){
//     var regnos = prompt("please enter your reg No here")

//     if(regnos == ""){
//         alert("registration NO is required")
        
//     }else{
//         var pinNum =prompt("please enter your pin number here")

//         if(pinNum ==""){
//             alert("pin number is required")
//         }else{

//             if(regNo==regnos && pinNo ==pinNum){
//                 alert(namePerson+ " your score is" +score+ "/5.\n your price is " +personWin)
//             }else{
//                 alert("registration number or pin number is invalid")
//             }
//         }
        
//     }

// }else{
//     alert("the url you entered is invalid")
// }

var reverseNumbers =[];


for(i=1;i<=20;i++){
    console.log(i)
}

for(i=20;i>0;i--){
    reverseNumbers.push(i)
}

console.log(reverseNumbers)

// CLASS WORK.

//1. PRINT OUT ALL THE NEGATIVE VALUE
//2. PRINT OUT THE COUNT OF ALL NEGATIVE NUMBERS IN THE ARRAY
//3. SUM ALL THE NUMBERS IN THE ARRAY
//4. PRINT OUT ALL NUMBERS DIVISION BY 5 AND 2
//5. PRINT THE ARRAY BACKWARD

var multipleNos = [18,19,-21,-92,90,100,79,-3,-4,0,5,37,35,-24,-15];

// SOLUTION TO QUEST 1

for(i=0; i<multipleNos.length; i++){
     if(multipleNos[i]<0){
         console.log(multipleNos[i])
     }
}
// SOLUTION TO QUEST 2

var negativeCount =0;

for(i=0; i<multipleNos.length;i++){
    if(multipleNos[i]<0){
        negativeCount +=1
    }
}

console.log("the count of negavtive number in the array " +negativeCount)

// SOLUTION TO QUEST 3
var sumNumbers = 0;

for(i=0; i<multipleNos.length;i++){
    sumNumbers += multipleNos[i];   
    }

console.log("the sum of all the numbers in the array is: " +sumNumbers)

// SOLUTION TO QUEST 4

for(i=0; i<multipleNos.length;i++){
    if(multipleNos[i]% 2==0 && multipleNos[i]% 5==0){
        if(multipleNos[i] > 0){
            console.log(multipleNos[i])
        }

    }
}
console.log(multipleNos[i])

// SOLUTION TO QUEST 5

for(i=multipleNos.length-1;i>=0;i--){
    
        console.log(multipleNos[i])
    
}

// NESTED FOR LOOP

var array1 = ["Mohammed","Sadio","Roberto","Diogo"];
var array2 =["Salah","Mane","Firmino","Jota"];

for(i=0; i<array1.length; i++){
    for(k=0; k<array2.length; k++){
        console.log(array1[i] +" "+ array2[k]);
    }

}

// to do a simple multiplication table

// for(i=1;i<13;i++){
//     console.log("\n\n")
//     for(j=1;j<13;j++){
//         if(i == j){
//             console.log(+i+ " X " +j +" = "+(i*j)+ " we are thesame " )
//         }else{
//             console.log(i+ " X " +j +" = "+(i*j))
//         }
        
//     }
// }


// var numberStart = Number(prompt("please input your multiplication number"))
// var NumberStop = Number(prompt("please input your multiplication number"))

// for(i=1;i<100;i++){
//     console.log("\n\n")
//     for(j=1;j<100;j++){
//         if(numberStart ==i && NumberStop ==j){
//             console.log(+numberStart+ " X " +NumberStop +" = "+(numberStart*NumberStop))
//         }
        
        
//     }
// }

// collect input and increase the price in array by the input

// var price=[30,45,90,91,42,88,100]

// var inputPrice =Number(prompt("please input your Price"));

// for(i=0;i<price.length;i++){

//     price[i] +=inputPrice

// }
// console.log(price)



// FUNCTION TO GREET TWO PEOPLE

function greet(){
    console.log("\n\n")
    console.log("HELLO EMMA");
    console.log("HELLO KELVIN");
}

greet();


// FUNCTION WITH PARAMETER

function add(x,y,z){
    var result =x + y+ z;
    console.log("the sum of:" + x +" ," + y + " and " + z + " is: " +result)
}

add(23,24,26);
add(100,200,500);



// function studentGrade(studentName,testScore,examScore){

//     var examTest = testScore + examScore;
//     var averageScore = examTest/2

    
//     if(testScore > 100){
        
//         console.log ("test score must not be Greater than 100")
//     }else{
        

//         if(examScore >100){
//             console.log("Exam score must not be Greater than 100")
//         }else{
           
//             if(averageScore <=39){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is F" )
//             }

//             if(averageScore >=40 && averageScore <=44 ){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is E" )
//             }

//             if(averageScore >=45 && averageScore <=49){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is D" )
//             }

//             if(averageScore >=50 && averageScore <=59 ){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is C" )
//             }

//             if(averageScore >=60 && averageScore <=69 ){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is B" )
//             }

//             if(averageScore >=70 && averageScore <=100 ){
//                 console.log(studentName+ " your average score is " +averageScore+ " and your Grade is A" )
//             }

//         }
//     }
// }

// studentGrade("emma",6,78)
// studentGrade("victor",120,78)
// studentGrade("uche",15,178)
// studentGrade("willy",15,18)

// var myGrade = Number(prompt("please enter your number"))

// var grades = [10 , 20 ,30,3,5,7,9, 40, 50, 60];
// console.log("\n\n")

// for(i=0;i<grades.length;i++){
//     if(grades[i] % myGrade == 0){
//         console.log(grades[i])
//     }
// }


// FUNCTION WITH RETURN STATEMENT

function taxcalc(salary){
    var tax;
    if(salary > 0 && salary < 100000){
        tax = (2/100)*salary
    }else if(salary >= 100000 && salary < 500000){
        tax = (4/100)*salary
    }else if(salary >= 500000 && salary < 1000000){
        tax = (5/100)*salary
    }else if(salary >= 1000000 && salary < 10000000){
        tax = (7/100)*salary
    }else if(salary >= 10000000){
        tax = (10/100)*salary
    }
    return tax
}

console.log("Emmanuel,your tax is: " +taxcalc(1000000)+" Naira");
console.log("Chris,your tax is: " +taxcalc(100000000)+" Naira");

// EVENTS


function greetme(){
    alert("ouch,you clicked me!")
}

// MANIPULATING THE HTML DOCUMENT(USING NATIVE JAVASCRIPT)

// GETTING VALUE FROM INPUT BOXES


function getValue(){
    var getVal = document.getElementById("name").value;
    alert(getVal)
}

// PUT VALUE INTO AN INPUT BOXES

function putValue(){
    var getPass = document.getElementById("surname").value;
    document.getElementById("email").value = getPass;
    document.getElementById("surname").value = "";
}

// GET VALUES FROM DOCUMENT OR ELEMENT

function getFact(){
    alert(document.getElementById("codeFact").innerHTML)
}

// PUT VALUE ON HTML ELEMENT

function typer(){
    document.getElementById("showmessage").innerHTML =
    "<i><b>user is typing something</b></i>"
}

function clearTyper(){
    document.getElementById("showmessage").innerHTML;
}
 



// function getTax(){
   
//     var nameGetter = document.getElementById("name&salary").value;
//     document.getElementById("nameInput").innerHTML = nameGetter;

//     var sala = document.getElementById("salary").value;

//     var tax;
//     if(sala > 0 && sala < 100000){
//         tax = (2/100)*sala
//     }else if(sala >= 100000 && sala < 500000){
//         tax = (4/100)*sala
//     }else if(sala >= 500000 && sala < 1000000){
//         tax = (5/100)*sala
//     }else if(sala >= 1000000 && sala < 10000000){
//         tax = (7/100)*sala
//     }else if(sala >= 10000000){
//         tax = (10/100)*sala
//     }

//     document.getElementById("paraName").innerHTML =(nameGetter+" if your salary is: " +sala+" then your tax is: " +tax+" Naira" )
// }

// JQUERY BEGINS


$(document).ready(function(){
    
$("#_span").click(function(){
    var myName = $("#_fullname").val();
    alert(myName)
})

$("#_span1").click(function(){
    var emailgetter = $("#_fullname").val();
    $("#_email").val(emailgetter +"@gmail.com")

})

$("#_myStud h1").click(function(){
    alert($("#_span1").html());
    $("#_myStud h1").addClass("addstudent")
})

$("#_button").click(function(){
    var getContent = $("#_button").val();
    $("#_parahun").html("<h1 style='color:red'><u>"+ getContent +"</u> </h1>" )
    $("#_myStud h1").removeClass("addstudent")
})

$("#_state").change(function(){
    var state =alert($(this).val())

    if(state ==""){
        $("#_error").html("<b>this field is required</b>");
        $("#_button").prop("disabled",true)
    }else{
        $("#_error").html("");
        $("#_button").prop("disabled",false)

    }
})

$("input[name='_gender']").change(function(){
    alert($(this).val())
})


$("#sender_").click(function(){
   var chatbox = $("#input_textarea").val();
   $("#_textme").append(chatbox + "<br>")
   $("#input_textarea").val("")
})

// $("#change_bg").click(function(){
//     $("body").toggleClass("body_ch")
//     if($("body").hasClass("body_ch")){
//         $("#change_bg").html("<b>REVERT BACK</b>")
//     }else{
//         $("#change_bg").html("<b>BACKGROUND COLOR CHANGER</b>")
//     }  
// })

$("#change_bg").click(function(){
    $("body").addClass("body_ch")
    $("change_bg").hide();
    $("revert_bg").show();

})

$("#revert_bg").click(function(){
    $("body").removeClass("body_ch")
    $("revert_bg").hide();
    $("change_bg").show();

})

$("#currencyAmount").change(function(){
    var rate;
    var currencySymbol;
    var currency = $(this).val();

    var nairaAmt = $("#nairaAmount").val();

    if(currency =="US DOLLAR"){
        rate = 411.14
        currencySymbol = "$"
    }else if(currency =="BRITISH POUND"){
        rate = 552.20
        currencySymbol = "&#163"
    }else if(currency =="EURO"){
        rate = 474.40
        currencySymbol = "&euro"
    }else if(currency =="JAPANESE YEN"){
        rate = 3.61
        currencySymbol = "&#165"
    }else if(currency =="SOUTH AFRICAN RAND"){
        rate = 26.88
        currencySymbol = "R"
    }else if(currency =="GHANIAN CEDIS"){
        rate = 67.27
        currencySymbol = "&#8373"
    }

    var convertedAmount = Math.round(nairaAmt/rate);

    if(currency ==""){
        $("#showConvert").html("<b><i>please select a currency from the drop down</i></b> &#128545")
    }else{
        $("#showConvert").html("&#8358; "+ nairaAmt.toLocaleString()+" to "+currency+" is "+currencySymbol+" "+ convertedAmount+ "&#128512;")
    }
})



$("#countButton_").click(function(){
    var countNumber=Array.from(Array(5000).keys());
    var startCount_= $("#startCount_").val()
    var endCount_= $("#endCount_").val()

    for(i = 0;i <= 5000+1;i++){

           $("#paragraph_count").html(countNumber.slice(startCount_,endCount_)+","+endCount_)
    } 
})



$("#multiplierButton").click(function(){
        var numMul = $("#numMultiplier").val()
        var numMulBy = $("#MultiplierbY").val()

        for(i=1;i<=numMul.length;i++){
        
            for(j=1;j<=numMulBy.length;j++){
               $("#multiplierParagraph").html(numMul+ " X " +numMulBy+ " = "+(numMul*numMulBy))
            }
        }
})

$("#divisionButton").click(function(){
        var numMul = $("#numMultiplier").val()
        var numMulBy = $("#MultiplierbY").val()

        for(i=1;i<=numMul.length;i++){
        
            for(j=1;j<=numMulBy.length;j++){
               $("#multiplierParagraph").html(numMul+ " / " +numMulBy+ " = "+(numMul/numMulBy))
            }
        }
})

$("#additionButton").click(function(){
        var numMul = $("#numMultiplier").val()
        var numMulBy = $("#MultiplierbY").val()
        
        var sum = Number(numMul) + Number(numMulBy)
        for(i=1;i<=numMul.length;i++){
           
            for(j=1;j<=numMulBy.length;j++){
                
               $("#multiplierParagraph").html(numMul+ " + " +numMulBy+ " = "+(sum))
            }
        }
})

$("#moduloButton").click(function(){
        var numMul = $("#numMultiplier").val()
        var numMulBy = $("#MultiplierbY").val()

        for(i=1;i<=numMul.length;i++){
        
            for(j=1;j<=numMulBy.length;j++){
               $("#multiplierParagraph").html(numMul+ " % " +numMulBy+ " = "+(numMul%numMulBy))
            }
        }
})

$("#subtractButton").click(function(){
        var numMul = $("#numMultiplier").val()
        var numMulBy = $("#MultiplierbY").val()

        for(i=1;i<=numMul.length;i++){
        
            for(j=1;j<=numMulBy.length;j++){
               $("#multiplierParagraph").html(numMul+ " - " +numMulBy+ " = "+(numMul-numMulBy))
            }
        }
})

$("#clear").click(function(){

    $("#numMultiplier").val("")
    $("#MultiplierbY").val("")
    $("#multiplierParagraph").html("")

})


$("#currencyH1").hide();

$("#currencyH1").click(function(){
    $("#currencyH2").show();
    $("#_converter").slideToggle(3000)
    $("#currencyH1").hide(); 
})

$("#currencyH2").click(function(){
    $("#currencyH1").show();
    $("#_converter").slideToggle(3000)
    $("#currencyH2").hide();
})
































































})


    
    





