

function toggleContent(id) {
  var e = document.getElementById(id);
  
  if (e.style.visibility == "hidden") {
    e.style.visibility = "visible";
  } else {
    e.style.visibility = "hidden";
  }
}

