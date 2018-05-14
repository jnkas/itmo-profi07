			function f(x){
                
				if (x>=1)
					return 5/x;
                
				else if (x < 1)
					return  x*x-4*x;
		
			}
			
			var line1 = {
				x:[],
				y:[],
				type:'scatter'
			};
			for (var i = -5; i<=5; i+=0.01) {
				line1.x.push(i);
				line1.y.push(f(i));
			}
			var data = [line1];
			Plotly.newPlot('placeholder', data);
