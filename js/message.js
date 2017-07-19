var message = document.getElementById("message");
var countdown = 7;

setInterval(updateMessage, 2000);

function updateMessage()
{
  if(countdown > 0)
  {
    countdown--;
    message.innerHTML = messages[countdown];
  }
}

var messages = 
[
  "iyi ki var olmuşsun, iyi ki...",
  "",
  "",
  "",
  "biiieeeeeerrrrr",
  "ikiiiieeeeeeeeeeee",
  "üüüüüüeeeeççççççççç"
];