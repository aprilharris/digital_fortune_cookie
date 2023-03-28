let request = new XMLHttpRequest();

let url = "https://api.adviceslip.com/advice";

request.open('GET', url, true);

request.onload = function() {

  let data=JSON.parse(this.response);
  // confirm API server is okay
   if(request.status >=200 && request.status < 400 ) {
   
 $('#advice').text(data["slip"].advice);
}

};

request.send();


document.getElementById("fortunecookie").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
