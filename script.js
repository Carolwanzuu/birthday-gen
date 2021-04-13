
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku" "Yaw", "Kofi", "Kwame"];
let female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let year_of_birth, YY, CC, MM, DD, day_of_week;
let gender;
let result_data = document.getElementById('result');



function getBirthday(){
    year_of_birth = document.getElementById("year").value;
    YY = year_of_birth.slice(0,2);
    CC = year_of_birth.slice(2, 4);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);


    console.log(YY);
    console.log(CC);
    console.log(MM);
    console.log(DD);

    if (DD <= 0 || DD > 31)
        alert("Enter a valid one")
    }else if(MM <O || MM > 12){
        alert("enter a valid month")
    }else{
       alert("confirm inputs");
    };

let day_of_the_week = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

function getAkanName(){
    getBirthday();
    day_of_week = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
    day_of_week = Math.ceil(day_of_week);
    console.log(`Day of the week: ${day_of_week}`);
    checkGender();
}

function checkGender(){
    let radios = document.getElementsByName("radio");
    if(radios[0].checked == true) {
        gender = "Male";
    }else if(radios[1].checked == true){
        gender = "Female";
    }else{
        alert("Any other?");
    }


    if(gender == "Male"){
        if(day_of_week == 0){
            result_data.innerHTML = `The day of the week is ${weekdays[0]} and your Akan name is ${male_names[0]}`;
        }else if(day_of_week == 1||day_of_week == -1){
            result_data.innerHTML = `The day of the week is ${weekdays[1]} and your Akan name is ${male_names[1]}`;
        }else if(day_of_week = 2 || day_of_week == -2){
            result_data.innerHTML = `The day of the week is ${weekdays[2]} and your Akan name is ${male_names[2]}`;
        }else if(day_of_week = 3 || day_of_week == -3){
            result_data.innerHTML = `The day of the week is ${weekdays[3]} and your Akan name is ${male_names[3]}`;
        }else if(day_of_week = 4 || day_of_week == -4){
            result_data.innerHTML = `The day of the week is ${weekdays[4]} and your Akan name is ${male_names[4]}`;
        }else if(day_of_week = 5 || day_of_week == -5){
            result_data.innerHTML = `The day of the week is ${weekdays[5]} and your Akan name is ${male_names[5]}`;
        }else if(day_of_week = 6 || day_of_week == -6){
            result_data.innerHTML = `The day of the week is ${weekdays[6]} and your Akan name is ${male_names[6]}`;
        }else if(day_of_week = 7 || day_of_week == -7){
            result_data.innerHTML = `The day of the week is ${weekdays[7]} and your Akan name is ${male_names[7]}`;
        }
    }else if(gender = "female"){
        if(day_of_week == 0){
            result_data.innerHTML = `The day of the week is ${weekdays[0]} and your Akan name is ${female_names[0]}`;
        }else if(day_of_week == 1 ||day_of_week == -1){
            result_data.innerHTML = `The day of the week is ${weekdays[1]} and your Akan name is ${female_names[1]}`;
        }else if(day_of_week = 2 || day_of_week == -2)
            result_data.innerHTML = `The day of the week is ${weekdays[2]} and your Akan name is ${female_names[2]}`;
        }else if(day_of_week = 3 || day_of_week == -3){
            result_data.innerHTML = `The day of the week is ${weekdays[3]} and your Akan name is ${female_names[3]}`;
        }else if(day_of_week = 4 || day_of_week == -4){
            result_data.innerHTML = `The day of the week is ${weekdays[4]} and your Akan name is ${female_names[4]}`;
        }else if(day_of_week = 5 || day_of_week == -5){
            result_data.innerHTML = `The day of the week is ${weekdays[5]} and your Akan name is ${female_names[5]}`;
        }else if(day_of_week = 6 || day_of_week == -6){
            result_data.innerHTML = `The day of the week is ${weekdays[6]} and your Akan name is ${female_names[6]}`;
        }else if(day_of_week = 7 || day_of_week == -7){
            result_data.innerHTML = `The day of the week is ${weekdays[7]} and your Akan name is ${female_names[7]}`;
        }
    }