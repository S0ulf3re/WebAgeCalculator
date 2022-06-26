function getAgeAndYearValues() {
  var currentAge = document.getElementById("current-age").value;
  if (currentAge == "") {
    return;
  } else {
    currentAge = parseInt(currentAge);
  }
  var yearsToAdd = document.getElementById("years-to-add").value;
  if (yearsToAdd == "") {
    return;
  } else {
    yearsToAdd = parseInt(yearsToAdd);
  }
  if (!currentAge == "" && !yearsToAdd == "") {
    console.log(currentAge + yearsToAdd);    
}
}
