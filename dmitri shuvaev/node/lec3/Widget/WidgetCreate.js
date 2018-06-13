function WidgetCallback(JSONobject,r) {
    var o = JSONobject;
   var wHTML = "";
    var tempMax=o.Temperature.Maximum.Value;
	var icon=o.Day.Icon;
    var wind=o.Day.Wind.Speed.Value;
      wHTML += ('<div class="location Main" >');
	    wHTML += ('<p class="Main" id="rf">RealFeel '+Math.round(o.RealFeelTemperature.Maximum.Value)+'°'+'</p>');
	
		wHTML += '<p class="Main" id="city">Komsomolsk-on-amure</p>';
		 	wHTML += '</div>';
   wHTML += '<p class="temperature Main" id="temp">'+Math.round(tempMax)+'°'+'</p>';
  
	  
 	wHTML += '<div class="climate_bg Main" id="cl"><img src="WeatherIcons/'+r+'.png"></div>';
    	wHTML += '<div class="info_bg">';
  	wHTML += '<div class="windspeed" id="wind">Wind '+wind+o.Day.Wind.Speed.Unit+'</div>';
		wHTML += '</div>';
     document.getElementById("container").innerHTML= wHTML;
	 
}

