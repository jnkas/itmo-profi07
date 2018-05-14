
window.onload = function () {
var dps = [];
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
    zoomEnabled: true,
	theme: "light2",
	title:{
		text: "график функции y = f(x)",
        fontSize: 30
	},
    	subtitles:[{
		text: "y = 5/x, при x>=1; y = x*x – 4*x, при x<1",
		fontSize: 14
	}],
    	axisX: {
		title: "x",
        stripLines: [{
			value: 0,
            color: "#000000",
			//label: "y",
			labelFontColor: "#808080",
			//labelAlign: "near",
            labelFontSize: 20
		}]
	},
	axisY:{
        title: "y",
		includeZero: false
	},
	data: [{        
		type: "line", 
        //markerSize: 5,
     
        dataPoints: dps 
	}]
});
			function f(x){
                
				if (x>=1)
					return 5/x;
                
				else if (x < 1)
					return  x*x-4*x;
		
			}//
    
    function dr(){
    for (var i = -5; i<=5; i+=0.01) {
    
   
            dps.push({
			x: i,
			y: f(i)
         
		});      
     
 
        

			}
        chart.render();
    }//
    

dr();
}



