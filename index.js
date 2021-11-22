console.log("Working...");

function setCookiess() {
  document.cookie = "name=" + document.formCookies.name.value;
  document.cookie = "gmail=" + document.formCookies.email.value;
  document.cookie = "age=" + document.formCookies.age.value;
  //clg
  console.log(document.cookie);
}
function getCookiess() {
  let cookiesArray = document.cookie.split(";");
  //clg
  console.log(cookiesArray);
  for (let i = 0; i < cookiesArray.length; i++) {
    let valueArray = cookiesArray[i].split("=");
    //clg
    console.log(valueArray);
    if (valueArray[0].trim() == "name") {
      document.formCookies.name.value = valueArray[1];
    } else if (valueArray[0].trim() == "gmail") {
      document.formCookies.email.value = valueArray[1];
    } else if (valueArray[0].trim() == "age") {
      document.formCookies.age.value = valueArray[1];
    }
  }
}
