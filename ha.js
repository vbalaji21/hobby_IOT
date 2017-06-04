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
	handler(JSON.parse(xmlHttp.responseText));
      }
    }
  }
  xmlHttp.send();
}

//document.write("Sending HTTP Request")
setInterval(function(){
	httpGet("https://api.thingspeak.com/channels/275846/fields/1.json?api_key='DMM55Y8IBQRWNVIK'")
}, 1000)

function handler(resp) {
  resp.feeds.forEach(function(value) {
	// document.write("Response : " + value.field1)
	if (value.field1 == 1) {
	  flag = "free";
	} else {
	  flag = "occupied";
	}

  	document.querySelector("#sensor").innerHTML = "Room 1 status : " + flag
  })
}
