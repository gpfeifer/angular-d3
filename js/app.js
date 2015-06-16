'use strict';

var chartApp = angular.module('chartApp', []);
var color = d3.scale.ordinal()
	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

chartApp.controller('ChartCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
    $scope.title = "ChartCtrl";
    $scope.items = [
                    { id: '2014', name: 'Das Jahr 2014'},
                    { id: '2015', name: 'Year 2015'},
                    { id: 'donut', name: 'Donut'}
                   ];

    $scope.selectedItem = $scope.items[0];

	$scope.$watch('selectedItem', function(newVals, oldVals) {
		if (newVals == oldVals) {
			return;
		}
		$scope.updateChart($scope.selectedItem.id);

	}, false);

    $scope.click = function(year) {
		$scope.updateChart(year);
    };

    $scope.clickCool = function(year) {
    	// Change the selection (and the chart)
    	if (year == '2014') {
    		$scope.selectedItem= $scope.items[0];
    	} else {
    		$scope.selectedItem= $scope.items[1];    		
    	}
    };

    $scope.isDonut = function() {
    	return $scope.selectedItem.id == 'donut';
    }
    
    
    $scope.updateChart  = function (year) {
		var request = new Object();
    	request.year = year;
    	
    	$http.post('data/version1', request).
    	  success(function(data, status, headers, config) {
			  var dataTemp = d3.csv.parse(data.chartData);
			  $scope.d3Data = $scope.transform(dataTemp);  
    	  }).
    	  error(function(data, status, headers, config) {
    	  });
	};
	
	$scope.conv = function(data) {
		color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
		data.forEach(function(d) {
			var y0 = 0;
			d.product = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
			d.total = d.product[d.product.length - 1].y1;
		});
	};
	
	 $scope.transform = function(csvResult) {
    	var result = new Array();
    	csvResult.forEach(function(entry) {
    		var arrayElement = new Object();
    		var productArray = new Array();
    		var y0 = 0;
    		var total = 0;
    		for (var key in entry) {
    			if (entry.hasOwnProperty(key)) {
    				if (key == "date") {
    					arrayElement["date"] = entry[key];
    				} else {
    					var productObject = new Object();
    					productObject["name"] = key;
    					productObject["y0"] = y0;
    					var y = parseInt(entry[key]);
    					productObject["y1"] = y0 + y;
    					y0 = y0 + y;
    					total = total + y;
    					productArray.push(productObject);
    				}
    			}
    		}
    		arrayElement["product"] = productArray;
    		arrayElement["total"] = total;
    		result.push(arrayElement);
    		
    	})
    	return result;
	}
 
	$scope.updateChart('2014');
  }]);
  


chartApp.directive('wschart', function() {
	function link(scope, element, attr) {
		var margin = {top: 20, right: 100, bottom: 30, left: 40},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);
	
		var y = d3.scale.linear()
		    .rangeRound([height, 0]);
	
		var color = d3.scale.ordinal()
		    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);
	
		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");
	
		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");
	//	    .tickFormat(d3.format(".2s"));

		// GPF: changed from "body" to element[0]
		//	var svg = d3.select("body").append("svg")
		var svg = d3.select(element[0]).append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
		var csv = scope.csv;
		d3.csv(csv, function(error, data) {
		  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
	
		  data.forEach(function(d) {
		    var y0 = 0;
		    d.product = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
		    d.total = d.product[d.product.length - 1].y1;
		  });
	
		  // data.sort(function(a, b) { return b.total - a.total; });
	
		  x.domain(data.map(function(d) { return d.date; }));
		  y.domain([0, d3.max(data, function(d) { return d.total; })]);
	
		  svg.append("g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0," + height + ")")
		      .call(xAxis);
	
	
		  svg.append("g")
		      .attr("class", "y axis")
		      .call(yAxis)
		    .append("text")
		      .attr("transform", "rotate(-90)")
		      .attr("y", 6)
		      .attr("dy", ".71em")
		      .style("text-anchor", "end")
		      .text("Requests");
	
		
		  var date = svg.selectAll(".date")
		      .data(data)
		    .enter().append("g")
		      .attr("class", "g")
		      .attr("transform", function(d) { return "translate(" + x(d.date) + ",0)"; });
	
		  date.selectAll("rect")
		      .data(function(d) { return d.product; })
		    .enter().append("rect")
		      .attr("width", x.rangeBand())
		      .attr("y", function(d) { return y(d.y1); })
		      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
		      .style("fill", function(d) { return color(d.name); });
	
		  var legend = svg.selectAll(".legend")
		      .data(color.domain().slice().reverse())
		    .enter().append("g")
		      .attr("class", "legend")
		      .attr("transform", function(d, i) { return "translate(100," + i * 20 + ")"; });
	
		  legend.append("rect")
		      .attr("x", width - 18)
		      .attr("width", 18)
		      .attr("height", 18)
		      .style("fill", color);
	
		  legend.append("text")
		      .attr("x", width - 24)
		      .attr("y", 9)
		      .attr("dy", ".35em")
		      .style("text-anchor", "end")
		      .text(function(d) { return d; });
	
		});
	}
	return {
		link: link,
		restrict: 'E',
		scope: { csv: '@' }
			
	}

});



chartApp.directive('wsDynChart', function() {

	function link(scope, element, attr) {
		var svgRoot = d3.select(element[0]).append("svg");
		
		var margin = {top: 20, right: 100, bottom: 30, left: 50};
		var width = 960 - margin.left - margin.right;
		var height = 500 - margin.top - margin.bottom;
		
		svgRoot
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom);
			
		var content = svgRoot.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
		var div = d3.select("body").append("div")   
			.attr("class", "tooltip")               
			.style("opacity", 0);
		
		scope.render = function(data) {
			if (!data) {
				return;
			}
            content.selectAll("*").remove();
            
            var x = d3.scale.ordinal().rangeRoundBands([0, width], .1, .2);
            var y = d3.scale.linear().rangeRound([height, 0]);
            
            var xAxis = d3.svg.axis().scale(x).orient("bottom");
            var yAxis = d3.svg.axis().scale(y).orient("left");
            
            x.domain(data.map(function(d) { return d.date; }));
            y.domain([0, d3.max(data, function(d) { return d.total; })]);
		
			content.append("g")
				.attr("class", "x axis")
			    .attr("transform", "translate(0," + height + ")")
			    .call(xAxis);
		
			content.append("g")
				.attr("class", "y axis")
				.call(yAxis)
			    .append("text")
			    .attr("transform", "rotate(-90)")
			    .attr("y", 6)
			    .attr("dy", ".71em")
			    .style("text-anchor", "end")
			    .text("Aufrufe");
		
			var date = content.selectAll(".date")
				.data(data)
			    .enter().append("g")
			      .attr("class", "g")
				  .attr("name", "bars")
			      .attr("transform", function(d) {return "translate(" + x(d.date) + ",0)"; });
			
			
			var y0 = 0;
			date.selectAll("rect")
				.data(function(d) { return d.product })
				.enter().append("rect")
					.attr("width", x.rangeBand())
					.attr("y", function(d) {
						var yy = y(d.y1)
						return yy; 
					})
					.attr("height", function(d) { return y(d.y0) - y(d.y1); })
					.style("fill", function(d) { return color(d.name); });

					
			content.selectAll("rect")
					.on("mouseover", function(d) {   
						div.transition()        
							.duration(200)      
							.style("opacity", .9);      
						div.html(d.name + "<br/>" + (d.y1 - d.y0))  
							.style("left", (d3.event.pageX) + "px")     
							.style("top", (d3.event.pageY - 28) + "px");  
						})                  
					.on("mouseout", function(d) {       
						div.transition()        
							.duration(500)      
							.style("opacity", 0); 
					});


			content.selectAll("[name=bars]")
			.append("text")
				.attr("x", function(d) {return (33 - ((d.total + "").length * 4))})
				.attr("y", function(d) {return y(d.total) - 6})
				.attr("dy", ".35em")
				.attr("fill", "steelblue")
				.text(function(d){
					return d.total});
		
		
			var legend = content.selectAll(".legend")
				.data(color.domain().slice().reverse())
			    .enter().append("g")
			    	.attr("class", "legend")
			    	.attr("transform", function(d, i) { return "translate(100," + i * 20 + ")"; });
		
			legend.append("rect")
				.attr("x", width - 18)
				.attr("width", 18)
				.attr("height", 18)
				.style("fill", color);
		
			legend.append("text")
				.attr("x", width - 24)
				.attr("y", 9)
				.attr("dy", ".35em")
				.style("text-anchor", "end")
				.text(function(d) { return d; });
		
		};
		// watch for data changes and re-render
		scope.$watch('data', function(newVals, oldVals) {
			return scope.render(newVals);
		}, true);

// The DATA comming asynch from the server
// It is unlikly that they available NOW		
//		scope.render(scope.data)		
	}
	
	return {
		link: link,
		restrict: 'E',
		scope: { data : '=' }
			
	}
	
});
