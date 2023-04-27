function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  if(eventId == 1)
  {
    return ticknum * 91.25;
  }
  else if(eventId == 2)
  {
    return ticknum * 79.88;
  }
  else if(eventId == 3)
  {
    return ticknum * 83.12;
  }
  else if(eventId == 4)
  {
    return ticknum * 100;
  }
}


