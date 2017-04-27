var flag = 0;

function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
  xmlHttp.onload = function () {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        console.log(xmlHttp.response);
        console.log(xmlHttp.responseXML);
	handler(xmlHttp.responseText);
      }
    }
  }
  xmlHttp.send();
}

document.write("Sending HTTP Request")
while(1)
{
	httpGet("https://api.thingspeak.com/channels/239335/fields/1.json?api_key='Q3R57JDMK9XLYR74'")
}

function handler(resp) {
  resp.feeds.forEach(function(value) {
	// document.write("Response : " + value.field1)
	if (value.field1 == 21) {
	  flag = "occupied";
	} else {
	  flag = "free";
	}

  	document.querySelector("#sensor").innerHTML = "Room 1 status : " + flag
  })
}
