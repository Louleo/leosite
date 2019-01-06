var last_name = ["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes"];

var first_name = ["James","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","George","Joshua","Kevin","Brian","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob","Gary","Nicholas","Eric","Stephen","Jonathan","Larry","Justin","Scott","Brandon","Frank","Benjamin","Gregory","Raymond","Samuel","Patrick","Alexander","Jack","Dennis","Jerry","Tyler","Aaron","Henry","Jose","Douglas","Peter","Adam","Nathan","Zachary","Walter","Kyle","Harold","Carl","Jeremy","Gerald","Keith","Roger","Arthur","Terry","Lawrence","Sean","Christian","Ethan","Austin","Joe","Albert","Jesse","Willie","Billy","Bryan","Bruce","Noah","Jordan","Dylan","Ralph","Roy","Alan","Wayne","Eugene","Juan","Gabriel","Louis","Russell","Randy","Vincent","Philip","Logan","Bobby","Harry","Johnny","Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Margaret","Karen","Nancy","Lisa","Betty","Dorothy","Sandra","Ashley","Kimberly","Donna","Emily","Carol","Michelle","Amanda","Melissa","Deborah","Stephanie","Rebecca","Laura","Helen","Sharon","Cynthia","Kathleen","Amy","Shirley","Angela","Anna","Ruth","Brenda","Pamela","Nicole","Katherine","Samantha","Christine","Catherine","Virginia","Debra","Rachel","Janet","Emma","Carolyn","Maria","Heather","Diane","Julie","Joyce","Evelyn","Joan","Victoria","Kelly","Christina","Lauren","Frances","Martha","Judith","Cheryl","Megan","Andrea","Olivia","Ann","Jean","Alice","Jacqueline","Hannah","Doris","Kathryn","Gloria","Teresa","Sara","Janice","Marie","Julia","Grace","Judy","Theresa","Madison","Beverly","Denise","Marilyn","Amber","Danielle","Rose","Brittany","Diana","Abigail","Natalie","Jane","Lori","Alexis","Tiffany","Kayla"];

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
