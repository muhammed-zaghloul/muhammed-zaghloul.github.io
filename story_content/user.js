function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kbAvoYAmON":
        Script1();
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

