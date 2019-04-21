function onclick(SectionName) {
  var i;
  var x = document.getElementsByClassName("bodySection");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  document.getElementById(SectionName).style.display = "block"; 
}