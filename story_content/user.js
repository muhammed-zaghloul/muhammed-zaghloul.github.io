function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66cJJxQH4th":
        Script1();
        break;
      case "6TdxI4TFh6g":
        Script2();
        break;
      case "6LbmU7XeYsx":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycby7rgcDIFctJ7El9a-5iOYDKBdox5DRQZA4_9CM6fHnKiZN1MmuCulBEfoSnGI097OL/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "name" : player.GetVar("name"),
 "email" : player.GetVar("email"),
 "message" : player.GetVar("message")
}
}

function Script2()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script3()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

