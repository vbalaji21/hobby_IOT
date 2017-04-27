var flag = 0;

function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
//  xmlHttp.withCredentials = true;
  xmlHttp.send();
  return JSON.parse(xmlHttp.responseText);
}

document.write("Sending HTTP Request")
while(1)
{
	var resp = httpGet("https://api.thingspeak.com/channels/239335/fields/1.json?api_key='Q3R57JDMK9XLYR74'")
	resp.feeds.forEach(function(value) {
	//	document.write("Response : " + value.field1)
  if (value.field1 == 21) {
		flag = "occupied";
  } else {
    flag = "free";
  }

   document.querySelector("#sensor").innerHTML = "Room 1 status : " + flag
  // document.write("Room 2 status : " + value.field1)
 //  document.write("Room 3 status : " + value.field1)

	})

}
