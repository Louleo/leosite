var travel_times = 0;
var travels = [];


function add_travel(l){

      travel_times += 1;
      if (travel_times > 1) {
          var i = travel_times - 1;
          var id1 = i.toString() + "s";
          var id2 = i.toString() + "e";
          var start_date = document.getElementById(id1).value;
          $("#"+id1).datepicker("destroy");
          $("#"+id1).removeClass("hasDatepicker");
          var end_date = document.getElementById(id2).value;
          $("#"+id2).datepicker("destroy");
          $("#"+id2).removeClass("hasDatepicker");
          document.getElementById(id1).setAttribute("value",start_date);
          document.getElementById(id2).setAttribute("value",end_date);
          start_date = start_date.substring(0,2)+start_date.substring(3,5)+start_date.substring(6,10);
          end_date = end_date.substring(0,2)+end_date.substring(3,5)+end_date.substring(6,10);
          travels.push(start_date+"-"+end_date);
      }
      if (l == "c") {
        document.getElementById('3').innerHTML += "离境日期:<input type='text' id="+travel_times.toString()+"s"+"></input>   入境日期:<input type='text' id="+ travel_times.toString()+"e" +" ></input><br><br>";
      }else {
        document.getElementById('3').innerHTML += "Start Date:<input type='text' id="+travel_times.toString()+"s"+"></input>   End Date:<input type='text' id="+ travel_times.toString()+"e" +" ></input><br><br>";
      }
      var id1 = "#"+travel_times.toString()+"s";
      var id2 = "#"+travel_times.toString()+"e";
      $(id1).datepicker({dateFormat: "dd/mm/yy"});
      $(id2).datepicker({dateFormat: "dd/mm/yy"});
}


function y366_or_not(year){
  if((year%4 == 0)&&(year%100 != 0)){
      return true;
  }
  else{
      return false;
  }
}




function days_of_month(m,y){
  if (m == 2) {
    if (y366_or_not(y)) {
      return  29;
    }else {
      return 28;
    }
  }else if (m in [1,3,5,7,8,10,12]) {
    return 31;
  }else {
    return 30;
  }
}

function days_to_date(start_date,days){
  var start_date_d = parseInt(start_date.substring(0,2));
  var end_date_m = parseInt(start_date.substring(2,4));
  var end_date_y = parseInt(start_date.substring(4,));
  var end_date_d =  start_date_d + days;
  while (end_date_d > days_of_month(end_date_m,end_date_y)) {
    end_date_d = end_date_d - days_of_month(end_date_m,end_date_y);
    end_date_m += 1;
    if (end_date_m>12) {
      end_date_m = end_date_m -12;
      end_date_y += 1;
    }
  }
  if (end_date_d < 10) {
    end_date_d = '0'+ end_date_d.toString();
  }
  return(end_date_d.toString()+end_date_m.toString()+end_date_y.toString());
}


function date_to_days(start_date, end_date){
  var start_date_d = parseInt(start_date.substring(0,2));
  var start_date_m = parseInt(start_date.substring(2,4));
  var start_date_y = parseInt(start_date.substring(4,));
  var end_date_d = parseInt(end_date.substring(0,2));
  var end_date_m = parseInt(end_date.substring(2,4));
  var end_date_y = parseInt(end_date.substring(4,));
  var y, year,days;
  if (start_date_d > end_date_d) {
    end_date_d += days_of_month(end_date_m,end_date_y);
    end_date_m -= 1;
    if (end_date_m == 0) {
      end_date_m = 12;
      end_date_y -= 1;
    }
  }
    days = end_date_d - start_date_d;
    if (start_date_m > end_date_m) {
      end_date_m += 12;
      end_date_y -= 1;
    }
    for (var i = start_date_m; i < end_date_m; i++) {
        if (i>12) {
          y = i -12;
          year = start_date_y +1 ;
        }else{
          y = i;
          year = start_date_y;
        }
        days += days_of_month(y,year);
    }

    if (start_date_y < end_date_y) {
      for (var i = start_date_y; i < end_date_y; i++) {
        if (y366_or_not(i)) {
          days += 366;
        }else {
          days += 365;
        }
      }
    }
    return days;
}

function date1_bigger_date2(date1,date2){
  var date1_d = parseInt(date1.substring(0,2));
  var date1_m = parseInt(date1.substring(2,4));
  var date1_y = parseInt(date1.substring(4,));
  var date2_d = parseInt(date2.substring(0,2));
  var date2_m = parseInt(date2.substring(2,4));
  var date2_y = parseInt(date2.substring(4,));
  if (date1_y > date2_y) {
    return true;
  }else if (date1_y == date2_y) {
    if (date1_m > date2_m) {
      return true;
    }else if (date1_m == date2_m) {
      if (date1_d > date2_d) {
        return true;
      }else {
        return false;
      }
    }else {
      return false;
    }
  }else {
    return false;
  }
}

function cal(f_a,p_g,ts){
  var f_a_y = parseInt(f_a.substring(4,));
  f_a_y += 4;
  var new_f_a = f_a.substring(0,4)+f_a_y.toString();
  var p_g_y = parseInt(p_g.substring(4,));
  p_g_y += 1;
  var new_p_g = p_g.substring(0,4)+p_g_y.toString();
  var date,four_start_date,nine_start_date;

  if (date1_bigger_date2(new_f_a,new_p_g)) {
    date = new_f_a;
  }else {
    date = new_p_g;
  }


  if (ts.length != 0) {
    for (var i = ts.length-1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
          if (date1_bigger_date2(ts[j+1].substring(0,8),ts[j].substring(0,8))) {
            var temp = ts[j];
            ts[j] = ts[j+1];
            ts[j+1] = temp;
          }
        }
    }

    var four_total_days = 0;
    for (var i = 0; i < ts.length; i++) {
       four_total_days += date_to_days(ts[i].substring(0,8),ts[i].substring(9,));
       if (four_total_days > 365) {
         var i_y = parseInt(ts[i].substring(13,)) + 4;
         four_start_date = ts[i].substring(9,13) + i_y.toString();
         break;
       }else {
         four_start_date = ts[0].substring(0,8);
       }
    }
    if (date1_bigger_date2(four_start_date,date)) {
      date = four_start_date;
    }
    var nine_total_days = 0;
    for (var i = 0; i < ts.length; i++) {
       nine_total_days += date_to_days(ts[i].substring(0,8),ts[i].substring(9,));
       alert(nine_total_days);
       if (nine_total_days > 90) {
         var i_y = parseInt(ts[i].substring(13,)) + 4;
         nine_start_date = ts[i].substring(9,13) + i_y.toString();
         break;
       }else {
         nine_start_date = ts[0].substring(0,8);
       }
    }
    if (date1_bigger_date2(nine_start_date,date)) {
      date = nine_start_date;
    }
  }

  return date;

}

function number_to_text(m){
  var m = parseInt(m)-1;
  var t = ["January","Feburary","March","April","May","June","July","Augest","September","October","November","December"];
  return t[m];
}




function main(f_a,p_g,ts,l){
  var c = cal(f_a, p_g, ts);
  if (l == "c") {
    alert("自 "+c.substring(4,)+" 年 "+number_to_text(c.substring(2,4))+" 月 "+c.substring(0,2)+" 日后，您或许可以申请澳大利亚国籍.");
  }else {
    alert("You may apply for your citizenship since "+c.substring(4,)+" "+number_to_text(c.substring(2,4))+" "+c.substring(0,2)+" .");
  }
}

function cal_citi(l){

  if (travel_times != 0) {
    for (var i = 1; i <= travel_times; i++) {
      var id1 = i.toString() + "s";
      var id2 = i.toString() + "e";
      var start_date = document.getElementById(id1).value;
      var end_date = document.getElementById(id2).value;
      start_date = start_date.substring(0,2)+start_date.substring(3,5)+start_date.substring(6,);
      end_date = end_date.substring(0,2)+end_date.substring(3,5)+end_date.substring(6,);
      travels.push(start_date+"-"+end_date);
    }
  }

  f_a = document.getElementById("1").value;
  p_g = document.getElementById("2").value;

  f_a = f_a.substring(0,2)+f_a.substring(3,5)+f_a.substring(6,);
  p_g = p_g.substring(0,2)+p_g.substring(3,5)+p_g.substring(6,);

  main(f_a,p_g,travels,l);

  travels = [];
  travel_times = 0;
  document.getElementById("3").innerHTML = "";

}
