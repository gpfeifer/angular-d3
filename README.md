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

# git checkout gpf002
Hier habe ich ein attribute cvs definiert, so dass man bei der Directive den Dateinamen 
angeben kann. Um das zu demonstriene gibt es nun eine zweite CSV Datei und in index.html 
steht nun:

	<div>
	   <jens-chart csv="dataProduct2014.csv"></jens-chart>
	</div>
	<div>
   		<jens-chart csv="dataProduct2015.csv"></jens-chart>
	</div>


# git checkout gpf003
Ein Beispiel wie die Daten von einem Servlet geliefert werden können.

	<div>
   		<jens-chart csv="data/data-from-Servlet"></jens-chart>
	</div>


# git checkout gpf004
Ein neue directive 'jens-dyn-chart', die die Daten nicht mit d3.csv bekommt, sondern über den Angular Scope. Dies als Vorbereitung um das Ganze etwas dynamischer zu machen.

#git checkout gpf005
Um hierin zu kommen hat es etwas Zeit gedauert. Ein Problem war, dass dein d3 Javascript Code an data noch was
drangeflanscht hat - nämlich data.total und data.product.
Das habe ich geändert. QuickHack: Im scope ist nun schon das aufgeblähte Object.
Aber watch funktioniert nicht.....  
