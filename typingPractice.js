
var end =  true;
var nameInput, dobInput = " ";
var name1, name2, fullname;
getName();
document.getElementById("name_input").addEventListener('keypress',nameInputCheck);
var dob, year, month, day;
getDob();
document.getElementById("dob_input").addEventListener('keypress',dobInputCheck);




function nameInputCheck(){
  nameInput = document.getElementById("name_input").value;
  if (nameInput == fullname) {
    getName();
  }
}

function dobInputCheck(){
  dobInput = document.getElementById("dob_input").value;
  if (dobInput == dob) {
    getDob();
  }
}


function randomInt(num){
  var return_num = Math.floor(Math.random()*num);
  while (return_num == num) {
    return_num = Math.floor(Math.random()*num);
  }
  return return_num;
}


function getName(){
  name1 = randomInt(first_name.length);
  name2 = randomInt(last_name.length);
  fullname = first_name[name1]+" "+last_name[name2];
  document.getElementById("name").innerHTML = fullname;
  document.getElementById("name_input").maxLength = fullname.length;
  document.getElementById("name_input").value = "";
}

function getDob(){
  day = randomInt(31) + 1;
  month = randomInt(12) + 1;
  year = 2020 - randomInt(101);
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  dob = day + "/" + month + "/" + year;
  document.getElementById("dob").innerHTML = day +" "+ monthToMonth(parseInt(month))+ " " + year;
  document.getElementById("dob_input").value = "";
}

function monthToMonth(num){
  var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return month[num-1];
}
