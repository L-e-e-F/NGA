var error = document.getElementsByClassName("error");
function checkUser() {
  if (user.value == 18001010821) {
    error[0].style.display = "none";
    return 1;
  } else {
    error[0].style.display = "block";
    return 0;
  }
}
function checkPw() {
  if (pwd.value == 123456) {
    error[1].style.display = "none";
    return 1;
  } else {
    error[1].style.display = "block";
    return 0;
  }
}
function checkForm() {
  var rs = checkUser() * checkPw();
  if (rs == 0) {
    return false;
  } else {
    return true;
  }
}
var wangji = document.getElementsByTagName("a");
wangji[1].onclick = function () {
  error[0].style.display = "block";
};
wangji[2].onclick = function () {
  error[1].style.display = "block";
};
var refresh = document.getElementsByClassName("refresh")[0];
refresh.onclick = function () {
  location.reload();
};
