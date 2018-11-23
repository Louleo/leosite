function tax_cal(l) {
  var income = document.getElementById("a1").value;
  var super_ = document.getElementById('a2').value;
  var ymw = document.getElementById('a3').value;
  var insert;
  income = parseFloat(income);
  super_ = parseInt(super_);
  ymw = parseInt(ymw);

  if (super_) {
    income = income*0.905;
  }

  if (ymw == 0) {
    income = income;
  }else if (ymw == 1) {
    income = income*12;
  }else if (ymw == 2){
    income = 52*income;
  }else {
    income = 52*38*income;
  }

  if(income <= 18200){
    income = income - (0.02*income)
  }else if (income <= 37000) {
    income = income - 0.19*(income - 18200)- (0.02*income)
  }else if (income <= 90000) {
    income = income - 3572 - (0.325*(income - 37000))- (0.02*income)
  }else if (income <= 180000) {
    income = income - 20979 - (0.37*(income - 90000))- (0.02*income)
  }else {
    income = income - 54097 - (0.45*(income - 180000))- (0.02*income)
  }
  if (l == 'c') {
    insert = "<h3 class='text-success'>完税后您的收入应为： "+ income.toFixed(2) +` $ 每年...</h3>
    <h4 class='text-info'>也就是说，您将得到： `+ (income/12).toFixed(2) +` $ 每月...</h4>
    <h5 class='text-warning'>也就是说，您将得到： `+ (income/52).toFixed(2)+` $ 每周...</h5>
    <h6 class='text-danger'>也就是说，您将得到： `+ (income/(38*52)).toFixed(2) +" $ 每小时...</h6>";
  }else {
    insert = "<h3 class='text-success'>Your income after tax would be "+ income.toFixed(2) +` $ per year...</h3>
    <h4 class='text-info'>Which means you could get `+ (income/12).toFixed(2) +` $ per month...</h4>
    <h5 class='text-warning'>Which means you could get `+ (income/52).toFixed(2)+` $ per week...</h5>
    <h6 class='text-danger'>Which means you could get `+ (income/(38*52)).toFixed(2) +" $ per hour...</h6>";
  }

  document.getElementById('display01').innerHTML = insert;

}

function salary_cal(l) {
  var income = document.getElementById("b1").value;
  var ymw = document.getElementById('b2').value;
  var insert;

  income = parseFloat(income);
  ymw = parseInt(ymw);

  if (ymw == 0) {
    income = income;
  }else if (ymw == 1) {
    income = income*12;
  }else if (ymw == 2){
    income = 52*income;
  }else {
    income = 52*38*income;
  }


  if(income <= 17836){
    income = income/0.98;
  }else if (income <= 32688) {
    income = (income - (0.19*18200))/0.79;
  }else if (income <= 67403) {
    income = (income + 3572 - (0.325*37000))/0.655;
  }else if (income <= 122121) {
    income = (income + 20979 - (0.37*90000))/0.61
  }else {
    income = (income + 54097 - (0.45*180000))/0.53;
  }

  if (l == 'c') {
    insert = "<h3 class='text-primary'>您的收入应为： "+ (income/0.905).toFixed(2) +` $ 含养老金，每年...</h3>
    <h3 class='text-success'>您的收入应为： `+ income.toFixed(2) +` $ 不含养老金，每年...</h3>
    <h4 class='text-info'>也就是说，您应得到： `+ (income/12).toFixed(2) +` $ 每月...</h4>
    <h5 class='text-warning'>也就是说，您应得到： `+ (income/52).toFixed(2)+` $ 每周...</h5>
    <h6 class='text-danger'>也就是说，您应得到： `+ (income/(38*52)).toFixed(2) +" $ 每小时...</h6>";
  }else {
    insert = "<h3 class='text-primary'>Your income before tax should be "+ (income/0.905).toFixed(2) +` $ with super per year...</h3>
    <h3 class='text-success'>Your income before tax should be `+ income.toFixed(2) +` $ without super per year...</h3>
    <h4 class='text-info'>Which means you need to get `+ (income/12).toFixed(2) +` $ per month...</h4>
    <h5 class='text-warning'>Which means you need to get `+ (income/52).toFixed(2)+` $ per week...</h5>
    <h6 class='text-danger'>Which means you need to get `+ (income/(38*52)).toFixed(2) +" $ per hour...</h6>";
  }

  document.getElementById('display02').innerHTML = insert;

}
