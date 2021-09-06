function myFunction1() {
  var x = document.getElementById("pass_1");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("btn_show1").innerHTML = "Hide";
  } else {
    x.type = "password";
    document.getElementById("btn_show1").innerHTML = "Show";
  }
}

function myFunction2() {
  var x = document.getElementById("pass_2");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("btn_show2").innerHTML = "Hide";
  } else {
    x.type = "password";
    document.getElementById("btn_show2").innerHTML = "Show";
  }
}

//function myFunction2() {
//  var x = document.getElementById("pass_2");
//  if (x.type === "password") {
//    x.type = "text";
//  } else {
//    x.type = "password";
//  }
//}
