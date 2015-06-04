# git checkout jens
Die zwei Dateien von Jens unverändert in ein plugin gepackt. Das kann einfach im XE Server deployed werden 
oder aber als WAR eingepackt und z.B. in Tomcat deployed werden.
Der Eintrag in der web.xml sorgt dafür, dass man den XE Server/Jetty nicht jedesmal neu starten muss
wenn man was ändert.

# git checkout gpf001
Hier habe ich angular und d3 mit bower installiert:

bower install angular

bower install d3

In stackedChart.html ist weiterhin der Code von Jens. In index.html ist der JavaScript d3 Code in eine angular directive gewandert. Außerdem habe ich das css nach jens.css ausgelagert.


    <!DOCTYPE html>
	<html>
	<head>

	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/d3/d3.js" charset="utf-8"></script>
	<script src="js/app.js"></script>
	</head>
	<link rel="stylesheet" href="jens.css" type="text/css" media="screen" />

	<body ng-app="jensApp">
		<h1>Hallo jens-chart</h1>
		<div>
  			<jens-chart></jens-chart>
		</div>
	</body>
	</html>

Das sieht schon ein wenig aufgeräumter aus :-P
