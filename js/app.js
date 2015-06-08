'use strict';

var jensApp = angular.module('jensApp', []);

jensApp.controller('DemoCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
    $scope.title = "DemoCtrl";
//    $scope.d3Data = 
//    	[
//    	 {"date":"Jan","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"4000"},
//    	 {"date":"Feb","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000"},
//    	 {"date":"Mar","CompactS":"2573","HSNTSN":"2232","KEinzel":"778","MGPS_V_7.25.0":"2666","Regio":"2233","Risikofragen":"2223"},
//    	 {"date":"Apr","CompactS":"2923","HSNTSN":"2472","KEinzel":"838","MGPS_V_7.25.0":"2886","Regio":"2383","Risikofragen":"2223"},
//    	 {"date":"Mai","CompactS":"2263","HSNTSN":"2952","KEinzel":"948","MGPS_V_7.25.0":"2996","Regio":"2883","Risikofragen":"2423"},
//    	 {"date":"Jun","CompactS":"2343","HSNTSN":"2332","KEinzel":"748","MGPS_V_7.25.0":"2446","Regio":"2483","Risikofragen":"2023"},
//    	 {"date":"Jul","CompactS":"2673","HSNTSN":"2992","KEinzel":"2338","MGPS_V_7.25.0":"2536","Regio":"2283","Risikofragen":"2203"},
//    	 {"date":"Aug","CompactS":"2783","HSNTSN":"2222","KEinzel":"338","MGPS_V_7.25.0":"2776","Regio":"2283","Risikofragen":"2323"},
//    	 {"date":"Sep","CompactS":"2893","HSNTSN":"2002","KEinzel":"688","MGPS_V_7.25.0":"2356","Regio":"2383","Risikofragen":"2523"},
//    	 {"date":"Okt","CompactS":"2363","HSNTSN":"2882","KEinzel":"778","MGPS_V_7.25.0":"2646","Regio":"2783","Risikofragen":"2723"},
//    	 {"date":"Nov","CompactS":"2473","HSNTSN":"2362","KEinzel":"888","MGPS_V_7.25.0":"2246","Regio":"2483","Risikofragen":"2823"},
//    	 {"date":"Dez","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000"}
//    	];
    
    $scope.d3DataY = [{"date":"Jan","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"4000","product":[{"name":"CompactS","y0":0,"y1":2000},{"name":"HSNTSN","y0":2000,"y1":4000},{"name":"KEinzel","y0":4000,"y1":6000},{"name":"MGPS_V_7.25.0","y0":6000,"y1":8000},{"name":"Regio","y0":8000,"y1":10000},{"name":"Risikofragen","y0":10000,"y1":14000}],"total":14000},{"date":"Feb","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000","product":[{"name":"CompactS","y0":0,"y1":2000},{"name":"HSNTSN","y0":2000,"y1":4000},{"name":"KEinzel","y0":4000,"y1":6000},{"name":"MGPS_V_7.25.0","y0":6000,"y1":8000},{"name":"Regio","y0":8000,"y1":10000},{"name":"Risikofragen","y0":10000,"y1":12000}],"total":12000},{"date":"Mar","CompactS":"2573","HSNTSN":"2232","KEinzel":"778","MGPS_V_7.25.0":"2666","Regio":"2233","Risikofragen":"2223","product":[{"name":"CompactS","y0":0,"y1":2573},{"name":"HSNTSN","y0":2573,"y1":4805},{"name":"KEinzel","y0":4805,"y1":5583},{"name":"MGPS_V_7.25.0","y0":5583,"y1":8249},{"name":"Regio","y0":8249,"y1":10482},{"name":"Risikofragen","y0":10482,"y1":12705}],"total":12705},{"date":"Apr","CompactS":"2923","HSNTSN":"2472","KEinzel":"838","MGPS_V_7.25.0":"2886","Regio":"2383","Risikofragen":"2223","product":[{"name":"CompactS","y0":0,"y1":2923},{"name":"HSNTSN","y0":2923,"y1":5395},{"name":"KEinzel","y0":5395,"y1":6233},{"name":"MGPS_V_7.25.0","y0":6233,"y1":9119},{"name":"Regio","y0":9119,"y1":11502},{"name":"Risikofragen","y0":11502,"y1":13725}],"total":13725},{"date":"Mai","CompactS":"2263","HSNTSN":"2952","KEinzel":"948","MGPS_V_7.25.0":"2996","Regio":"2883","Risikofragen":"2423","product":[{"name":"CompactS","y0":0,"y1":2263},{"name":"HSNTSN","y0":2263,"y1":5215},{"name":"KEinzel","y0":5215,"y1":6163},{"name":"MGPS_V_7.25.0","y0":6163,"y1":9159},{"name":"Regio","y0":9159,"y1":12042},{"name":"Risikofragen","y0":12042,"y1":14465}],"total":14465},{"date":"Jun","CompactS":"2343","HSNTSN":"2332","KEinzel":"748","MGPS_V_7.25.0":"2446","Regio":"2483","Risikofragen":"2023","product":[{"name":"CompactS","y0":0,"y1":2343},{"name":"HSNTSN","y0":2343,"y1":4675},{"name":"KEinzel","y0":4675,"y1":5423},{"name":"MGPS_V_7.25.0","y0":5423,"y1":7869},{"name":"Regio","y0":7869,"y1":10352},{"name":"Risikofragen","y0":10352,"y1":12375}],"total":12375},{"date":"Jul","CompactS":"2673","HSNTSN":"2992","KEinzel":"2338","MGPS_V_7.25.0":"2536","Regio":"2283","Risikofragen":"2203","product":[{"name":"CompactS","y0":0,"y1":2673},{"name":"HSNTSN","y0":2673,"y1":5665},{"name":"KEinzel","y0":5665,"y1":8003},{"name":"MGPS_V_7.25.0","y0":8003,"y1":10539},{"name":"Regio","y0":10539,"y1":12822},{"name":"Risikofragen","y0":12822,"y1":15025}],"total":15025},{"date":"Aug","CompactS":"2783","HSNTSN":"2222","KEinzel":"338","MGPS_V_7.25.0":"2776","Regio":"2283","Risikofragen":"2323","product":[{"name":"CompactS","y0":0,"y1":2783},{"name":"HSNTSN","y0":2783,"y1":5005},{"name":"KEinzel","y0":5005,"y1":5343},{"name":"MGPS_V_7.25.0","y0":5343,"y1":8119},{"name":"Regio","y0":8119,"y1":10402},{"name":"Risikofragen","y0":10402,"y1":12725}],"total":12725},{"date":"Sep","CompactS":"2893","HSNTSN":"2002","KEinzel":"688","MGPS_V_7.25.0":"2356","Regio":"2383","Risikofragen":"2523","product":[{"name":"CompactS","y0":0,"y1":2893},{"name":"HSNTSN","y0":2893,"y1":4895},{"name":"KEinzel","y0":4895,"y1":5583},{"name":"MGPS_V_7.25.0","y0":5583,"y1":7939},{"name":"Regio","y0":7939,"y1":10322},{"name":"Risikofragen","y0":10322,"y1":12845}],"total":12845},{"date":"Okt","CompactS":"2363","HSNTSN":"2882","KEinzel":"778","MGPS_V_7.25.0":"2646","Regio":"2783","Risikofragen":"2723","product":[{"name":"CompactS","y0":0,"y1":2363},{"name":"HSNTSN","y0":2363,"y1":5245},{"name":"KEinzel","y0":5245,"y1":6023},{"name":"MGPS_V_7.25.0","y0":6023,"y1":8669},{"name":"Regio","y0":8669,"y1":11452},{"name":"Risikofragen","y0":11452,"y1":14175}],"total":14175},{"date":"Nov","CompactS":"2473","HSNTSN":"2362","KEinzel":"888","MGPS_V_7.25.0":"2246","Regio":"2483","Risikofragen":"2823","product":[{"name":"CompactS","y0":0,"y1":2473},{"name":"HSNTSN","y0":2473,"y1":4835},{"name":"KEinzel","y0":4835,"y1":5723},{"name":"MGPS_V_7.25.0","y0":5723,"y1":7969},{"name":"Regio","y0":7969,"y1":10452},{"name":"Risikofragen","y0":10452,"y1":13275}],"total":13275},{"date":"Dez","CompactS":"2000","HSNTSN":"2000","KEinzel":"2000","MGPS_V_7.25.0":"2000","Regio":"2000","Risikofragen":"2000","product":[{"name":"CompactS","y0":0,"y1":2000},{"name":"HSNTSN","y0":2000,"y1":4000},{"name":"KEinzel","y0":4000,"y1":6000},{"name":"MGPS_V_7.25.0","y0":6000,"y1":8000},{"name":"Regio","y0":8000,"y1":10000},{"name":"Risikofragen","y0":10000,"y1":12000}],"total":12000}];
    
    $scope.d3DataX = [{"date":"Jan","CompactS":"1233","HSNTSN":"2342","KEinzel":"988","MGPS_V_7.16.0":"1236","Regio":"1433","Risikofragen":"1423","product":[{"name":"CompactS","y0":0,"y1":1233},{"name":"HSNTSN","y0":1233,"y1":3575},{"name":"KEinzel","y0":3575,"y1":4563},{"name":"MGPS_V_7.16.0","y0":4563,"y1":5799},{"name":"Regio","y0":5799,"y1":7232},{"name":"Risikofragen","y0":7232,"y1":8655}],"total":8655},{"date":"Feb","CompactS":"1293","HSNTSN":"1342","KEinzel":"1588","MGPS_V_7.16.0":"1556","Regio":"1763","Risikofragen":"1223","product":[{"name":"CompactS","y0":0,"y1":1293},{"name":"HSNTSN","y0":1293,"y1":2635},{"name":"KEinzel","y0":2635,"y1":4223},{"name":"MGPS_V_7.16.0","y0":4223,"y1":5779},{"name":"Regio","y0":5779,"y1":7542},{"name":"Risikofragen","y0":7542,"y1":8765}],"total":8765},{"date":"Mar","CompactS":"1573","HSNTSN":"2232","KEinzel":"778","MGPS_V_7.16.0":"1666","Regio":"1233","Risikofragen":"1223","product":[{"name":"CompactS","y0":0,"y1":1573},{"name":"HSNTSN","y0":1573,"y1":3805},{"name":"KEinzel","y0":3805,"y1":4583},{"name":"MGPS_V_7.16.0","y0":4583,"y1":6249},{"name":"Regio","y0":6249,"y1":7482},{"name":"Risikofragen","y0":7482,"y1":8705}],"total":8705},{"date":"Apr","CompactS":"1913","HSNTSN":"2472","KEinzel":"838","MGPS_V_7.16.0":"1886","Regio":"1383","Risikofragen":"1123","product":[{"name":"CompactS","y0":0,"y1":1913},{"name":"HSNTSN","y0":1913,"y1":4385},{"name":"KEinzel","y0":4385,"y1":5223},{"name":"MGPS_V_7.16.0","y0":5223,"y1":7109},{"name":"Regio","y0":7109,"y1":8492},{"name":"Risikofragen","y0":8492,"y1":9615}],"total":9615},{"date":"Mai","CompactS":"1163","HSNTSN":"2952","KEinzel":"948","MGPS_V_7.16.0":"1996","Regio":"1883","Risikofragen":"1423","product":[{"name":"CompactS","y0":0,"y1":1163},{"name":"HSNTSN","y0":1163,"y1":4115},{"name":"KEinzel","y0":4115,"y1":5063},{"name":"MGPS_V_7.16.0","y0":5063,"y1":7059},{"name":"Regio","y0":7059,"y1":8942},{"name":"Risikofragen","y0":8942,"y1":10365}],"total":10365},{"date":"Jun","CompactS":"1343","HSNTSN":"2332","KEinzel":"748","MGPS_V_7.16.0":"1446","Regio":"1483","Risikofragen":"1023","product":[{"name":"CompactS","y0":0,"y1":1343},{"name":"HSNTSN","y0":1343,"y1":3675},{"name":"KEinzel","y0":3675,"y1":4423},{"name":"MGPS_V_7.16.0","y0":4423,"y1":5869},{"name":"Regio","y0":5869,"y1":7352},{"name":"Risikofragen","y0":7352,"y1":8375}],"total":8375},{"date":"Jul","CompactS":"1673","HSNTSN":"2992","KEinzel":"1338","MGPS_V_7.16.0":"1536","Regio":"1183","Risikofragen":"1203","product":[{"name":"CompactS","y0":0,"y1":1673},{"name":"HSNTSN","y0":1673,"y1":4665},{"name":"KEinzel","y0":4665,"y1":6003},{"name":"MGPS_V_7.16.0","y0":6003,"y1":7539},{"name":"Regio","y0":7539,"y1":8722},{"name":"Risikofragen","y0":8722,"y1":9925}],"total":9925},{"date":"Aug","CompactS":"1783","HSNTSN":"2112","KEinzel":"338","MGPS_V_7.16.0":"1776","Regio":"1283","Risikofragen":"1323","product":[{"name":"CompactS","y0":0,"y1":1783},{"name":"HSNTSN","y0":1783,"y1":3895},{"name":"KEinzel","y0":3895,"y1":4233},{"name":"MGPS_V_7.16.0","y0":4233,"y1":6009},{"name":"Regio","y0":6009,"y1":7292},{"name":"Risikofragen","y0":7292,"y1":8615}],"total":8615},{"date":"Sep","CompactS":"1893","HSNTSN":"2002","KEinzel":"688","MGPS_V_7.16.0":"1356","Regio":"1383","Risikofragen":"1523","product":[{"name":"CompactS","y0":0,"y1":1893},{"name":"HSNTSN","y0":1893,"y1":3895},{"name":"KEinzel","y0":3895,"y1":4583},{"name":"MGPS_V_7.16.0","y0":4583,"y1":5939},{"name":"Regio","y0":5939,"y1":7322},{"name":"Risikofragen","y0":7322,"y1":8845}],"total":8845},{"date":"Okt","CompactS":"1363","HSNTSN":"2882","KEinzel":"778","MGPS_V_7.16.0":"1646","Regio":"1783","Risikofragen":"1723","product":[{"name":"CompactS","y0":0,"y1":1363},{"name":"HSNTSN","y0":1363,"y1":4245},{"name":"KEinzel","y0":4245,"y1":5023},{"name":"MGPS_V_7.16.0","y0":5023,"y1":6669},{"name":"Regio","y0":6669,"y1":8452},{"name":"Risikofragen","y0":8452,"y1":10175}],"total":10175},{"date":"Nov","CompactS":"1473","HSNTSN":"2362","KEinzel":"888","MGPS_V_7.16.0":"1246","Regio":"1483","Risikofragen":"1823","product":[{"name":"CompactS","y0":0,"y1":1473},{"name":"HSNTSN","y0":1473,"y1":3835},{"name":"KEinzel","y0":3835,"y1":4723},{"name":"MGPS_V_7.16.0","y0":4723,"y1":5969},{"name":"Regio","y0":5969,"y1":7452},{"name":"Risikofragen","y0":7452,"y1":9275}],"total":9275},{"date":"Dez","CompactS":"1553","HSNTSN":"2862","KEinzel":"948","MGPS_V_7.16.0":"1876","Regio":"1683","Risikofragen":"1923","product":[{"name":"CompactS","y0":0,"y1":1553},{"name":"HSNTSN","y0":1553,"y1":4415},{"name":"KEinzel","y0":4415,"y1":5363},{"name":"MGPS_V_7.16.0","y0":5363,"y1":7239},{"name":"Regio","y0":7239,"y1":8922},{"name":"Risikofragen","y0":8922,"y1":10845}],"total":10845}];
    $scope.d3Data = $scope.d3DataX;
    $scope.click = function(year) {
    	if (year == "2014") {
    		$scope.d3Data = $scope.d3DataY; 
    	} else {
    		$scope.d3Data = $scope.d3DataX;    		
    	}
    	/*    	
    	var request = new Object();
    	request.year = year;
    	
    	
    	$http.post('data/version1', request).
    	  success(function(data, status, headers, config) {
    		  $timeout(function(){
    			  
    			  $scope.d3Data = data;  
    		  });
    	  }).
    	  error(function(data, status, headers, config) {
    	  });
    	 */    	
    };
    
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

	
	return {
		link: function (scope, element, attr) {
			//	    .tickFormat(d3.format(".2s"));

				// GPF: changed from "body" to element[0]
				//	var svg = d3.select("body").append("svg")
				var svg = d3.select(element[0]).append("svg");

				
				var margin = {top: 20, right: 100, bottom: 30, left: 40};
				var width = 960 - margin.left - margin.right;
				var height = 500 - margin.top - margin.bottom;
				
				
				scope.render = function(data) {
					if (!data) {
						return;
					}
		            svg.selectAll("*").remove();
		            
		            
		            var color = d3.scale.ordinal()
		            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);
		            color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
		            
		            // It is not a good idea to change the data in a function which is called by a watch
		            
//		            data.forEach(function(d) {
//		            	var y0 = 0;
//		            	d.product = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
//		            	d.total = d.product[d.product.length - 1].y1;
//		            });
		            
		            var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
		            x.domain(data.map(function(d) { return d.date; }));
		            
		            var y = d3.scale.linear().rangeRound([height, 0]);
		            
		            y.domain([0, d3.max(data, function(d) { return d.total; })]);
		            
		            var xAxis = d3.svg.axis().scale(x).orient("bottom");
		            
		            var yAxis = d3.svg.axis().scale(y).orient("left");
		            
		            svg
		            	.attr("width", width + margin.left + margin.right)
		            	.attr("height", height + margin.top + margin.bottom);
		            
		            svg.append("g")
		            	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		            
				
					// data.sort(function(a, b) { return b.total - a.total; });
				
				
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
				// watch for data changes and re-render
				scope.$watch('data', function(newVals, oldVals) {
					return scope.render(newVals);
				}, true);
//				scope.render(data)		
			}
			
			,
		restrict: 'E',
		scope: { data : '=' }
			
	}

});
