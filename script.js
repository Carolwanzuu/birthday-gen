
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let yearOfBirth, YY, CC, MM, DD, d;
//let gender;
//let result_data = document.getElementById('result');




function getBirthday(){
    year_of_birth = document.getElementById("year").value;
    YY = year_of_birth.slice(0,2);
    CC = year_of_birth.slice(2, 4);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    console.log(d);
    return Math.floor(d);
}
    // console.log(YY);
    // console.log(CC);
    // console.log(MM);
    // console.log(DD);
   

    if (DD <= 0 || DD > 31){
        alert("Enter a valid one");
    }else if(MM <=0 || MM > 12){
        alert("enter a valid month");
     }else{
    alert("confirm inputs");
    };

//let day_of_the_week(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

function getAkanName(Birthday){
    //getBirthday();
   // day_of_week = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
    //day_of_week = Math.floor(day_of_week);
    let genderRadio = document.getElementsByName("gender");
    //console.log("gender");
    for(i = 0; i<genderRadio.length; i++){
        if(genderRadio[i].checked)
            gender = genderRadio[i].value;
        }
    

if(gender == male){
    alert("You were born on " + weekdays[Birthday] + " you are " + gender + " and your Akan name is " + maleNames[Birthday] + "!" );
}else{
    alert("You were born on " + weekdays[Birthday] + " you are " + gender + " and your Akan name is " + femaleNames[Birthday] + "!" );
}
}
    function getName(){
     Birthday = getBirthday();
     getAkanName(Birthday);
 }


