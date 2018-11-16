function cal_cmax(l){
  var one=parseInt(document.getElementById("1").value);
  var two=parseInt(document.getElementById("2").value);
  var three=parseInt(document.getElementById("3").value);
  var four = parseInt(document.getElementById("4").value);
  var five=parseInt(document.getElementById("5").value);
  var six=parseInt(document.getElementById("6").value);
  var seven=parseInt(document.getElementById("7").value);
  var eight=parseInt(document.getElementById("8").value);
  var nine=parseInt(document.getElementById("9").value);
  var ten=parseInt(document.getElementById("10").value);
  var eleven=parseInt(document.getElementById("11").value);
  var twelf=parseInt(document.getElementById("12").value);

  if (l == "c") {
    alert("您的分数为： "+(one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelf));
  }else {
    alert("Your score is "+(one+two+three+four+five+six+seven+eight+nine+ten+eleven+twelf));
  }

}

function cal_point(l){
  var one=parseInt(document.getElementById("1").value);
  var two=parseInt(document.getElementById("2").value);
  var three=parseInt(document.getElementById("3").value);
  var four = parseInt(document.getElementById("4").value);
  var five=parseInt(document.getElementById("5").value);
  var six=parseInt(document.getElementById("6").value);
  var seven=parseInt(document.getElementById("7").value);
  var eight=parseInt(document.getElementById("8").value);
  var nine=parseInt(document.getElementById("9").value);
  var ten=parseInt(document.getElementById("10").value);
  var eleven=parseInt(document.getElementById("11").value);

  if (l == "c") {
    alert("您的分数为： "+(one+two+three+four+five+six+seven+eight+nine+ten+eleven));
  }else {
    alert("Your score is "+(one+two+three+four+five+six+seven+eight+nine+ten+eleven));
  }

}
