'use strict';

var chartApp = angular.module('chartApp', []);
var color = d3.scale.ordinal()
	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

chartApp.controller('ChartCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
    $scope.title = "ChartCtrl";

    $scope.click = function(year) {
		updateChart(year);
    };
	
	function updateChart(year) {
		var request = new Object();
    	request.year = year;
    	
    	$http.post('data/version1', request).
    	  success(function(data, status, headers, config) {
			  var dataTemp = d3.csv.parse(data);
			  $scope.d3Data = dataTemp;  
			  data = conv(dataTemp);
    	  }).
    	  error(function(data, status, headers, config) {
    	  });
	};
	
	function conv(data) {
		color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
		data.forEach(function(d) {
			var y0 = 0;
			d.product = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
			d.total = d.product[d.product.length - 1].y1;
		});
	};
	
	updateChart('');
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
		scope.render(scope.data)		
	}
	
	return {
		link: link,
		restrict: 'E',
		scope: { data : '=' }
			
	}
});
