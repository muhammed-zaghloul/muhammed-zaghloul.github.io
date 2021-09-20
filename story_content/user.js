function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JFQtktpad0":
        Script1();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
const datacollect = player.GetVar("datacollect");
console.log(datacollect);
}

