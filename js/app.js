'use strict';

var jensApp = angular.module('jensApp', []);

jensApp.controller('DemoCtrl', ['$scope', function($scope){
    $scope.title = "DemoCtrl";
    $scope.d3Data = 
    	[
    	 {"date":"Jan","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"4000"},
    	 {"date":"Feb","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000"},
    	 {"date":"Mar","CompactS":"2573","HSNTSN":"2232","KEinzel":"778","MGPS_V_7.25.0":"2666","Regio":"2233","Risikofragen":"2223"},
    	 {"date":"Apr","CompactS":"2923","HSNTSN":"2472","KEinzel":"838","MGPS_V_7.25.0":"2886","Regio":"2383","Risikofragen":"2223"},
    	 {"date":"Mai","CompactS":"2263","HSNTSN":"2952","KEinzel":"948","MGPS_V_7.25.0":"2996","Regio":"2883","Risikofragen":"2423"},
    	 {"date":"Jun","CompactS":"2343","HSNTSN":"2332","KEinzel":"748","MGPS_V_7.25.0":"2446","Regio":"2483","Risikofragen":"2023"},
    	 {"date":"Jul","CompactS":"2673","HSNTSN":"2992","KEinzel":"2338","MGPS_V_7.25.0":"2536","Regio":"2283","Risikofragen":"2203"},
    	 {"date":"Aug","CompactS":"2783","HSNTSN":"2222","KEinzel":"338","MGPS_V_7.25.0":"2776","Regio":"2283","Risikofragen":"2323"},
    	 {"date":"Sep","CompactS":"2893","HSNTSN":"2002","KEinzel":"688","MGPS_V_7.25.0":"2356","Regio":"2383","Risikofragen":"2523"},
    	 {"date":"Okt","CompactS":"2363","HSNTSN":"2882","KEinzel":"778","MGPS_V_7.25.0":"2646","Regio":"2783","Risikofragen":"2723"},
    	 {"date":"Nov","CompactS":"2473","HSNTSN":"2362","KEinzel":"888","MGPS_V_7.25.0":"2246","Regio":"2483","Risikofragen":"2823"},
    	 {"date":"Dez","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000"}
    	];
   
  }]);



jensApp.directive('donutChart', function(){
    function link(scope, el, attr){
      var color = d3.scale.category10();
      var data = [10, 20, 30];
      var width = 300;
      var height = 300;
      var min = Math.min(width, height);
      var svg = d3.select(el[0]).append('svg');
      var pie = d3.layout.pie().sort(null);
      var arc = d3.svg.arc()
        .outerRadius(min / 2 * 0.9)
        .innerRadius(min / 2 * 0.5);
  
      svg.attr({width: width, height: height});
      var g = svg.append('g')
        // center the donut chart
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
      
      // add the <path>s for each arc slice
      g.selectAll('path').data(pie(data))
        .enter().append('path')
          .style('stroke', 'white')
          .attr('d', arc)
          .attr('fill', function(d, i){ return color(i) });
    }
    return {
      link: link,
      restrict: 'E'
    };
  });

jensApp.directive('jensChart', function() {
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



jensApp.directive('jensDynChart', function() {

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
		
		// 
		var createChart = function(data) {
			if (!data) {
				return;
			}
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
			
				};
//		var csv = scope.csv;
//		d3.csv(csv, function(error, data) { createChart(error, data) } );
		createChart(scope.data)		
	}
	return {
		link: link,
		restrict: 'E',
		scope: { data : '=' }
			
	}

});
