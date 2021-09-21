function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qHac0NIh5n":
        Script1();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
const TextEntry = player.GetVar("TextEntry");
console.log(TextEntry);
var params = {
           "range":"Sheet1!"+A+":"+C,
           "majorDimension": "ROWS",
           "values": [
           [TextEntry,"",""]
          ],
         }
         var xhr = new XMLHttpRequest();
         xhr.open('PUT', 'https://sheets.googleapis.com/v4/spreadsheets/'+"1W2e8PTlT9fVKMWewKKk19t-zlCj7foir3V7RemPuS2U"+'/'+"values/"+"Sheet1!"+A+":"+C+"?"+'valueInputOption=USER_ENTERED');
         xhr.setRequestHeader('Authorization', 'Bearer ' + "AIzaSyBFEwybAV0rOgM1MDDvAYAegEJa5MCrm74");
        xhr.onReadyStateChange=function(){
          console.log(this.status)
        }
        xhr.send(JSON.stringify(params));


      }
}

