function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FPGRqqkZ2b":
        Script1();
        break;
      case "6RrnEbvrDol":
        Script2();
        break;
      case "6Z7g2TozqGZ":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyczR8meTloag8h0bkhOy205Pd2U6j__B9fJZVW_zTfRkItmrWELnOQMSfoMKJ2KpWM/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("NameCollect")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "name" : player.GetVar("NameCollect"),

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

