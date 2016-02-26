window.onload=initialize();
function initialize(){

// variables to keep track of which mode
	var modes = ["siteMode", "collaboratorMode"];
	var initialMode = "siteMode";
	var currentMode = initialMode;


$(document).ready(function(){
		$("#fieldsites-button").on('click',function(){
			$(".button").removeClass("active-button");
			$("#fieldsites-button").addClass("active-button");
			currentMode = "siteMode";
			//remove collaborators
			drawSites();
		});
		
		$("#collaborators-button").on('click',function(){
			$(".button").removeClass("active-button");
			$("#collaborators-button").addClass("active-button");
			currentMode = "collaboratorMode";
			removeSites();
			//draw collaborators
		});
	});



// site data

	var dataset =[
	{
	"locality_code":"S0008","adm_region":"Onna","locality_name":"OIST Forest S0008","site_id":"OISTFR","latitude":26.46509,"longitude":127.8419,"elevation":114},
	{
	"locality_code":"S0007","adm_region":"Onna","locality_name":"OIST Forest S0007","site_id":"OISTFR","latitude":26.46517,"longitude":127.8422,"elevation":115},
	{
	"locality_code":"S0009","adm_region":"Onna","locality_name":"OIST Forest S0009","site_id":"OISTFR","latitude":26.4648,"longitude":127.84209,"elevation":109},
	{
	"locality_code":"S0005","adm_region":"Onna","locality_name":"OIST Open S0005","site_id":"OISTOP","latitude":26.46294,"longitude":127.82893,"elevation":62},
	{
	"locality_code":"S0004","adm_region":"Onna","locality_name":"OIST Open S0004","site_id":"OISTOP","latitude":26.4631,"longitude":127.82857,"elevation":61},
	{
	"locality_code":"S0006","adm_region":"Onna","locality_name":"OIST Open S0006","site_id":"OISTOP","latitude":26.46351,"longitude":127.82809,"elevation":57},
	{
	"locality_code":"S0020","adm_region":"Nakagusuku","locality_name":"Nakagusuku Forest S0020","site_id":"NAKAGUSUKUFR","latitude":26.28557,"longitude":127.79491,"elevation":107},
	{
	"locality_code":"S0019","adm_region":"Nakagusuku","locality_name":"Nakagusuku Forest S0019","site_id":"NAKAGUSUKUFR","latitude":26.28571,"longitude":127.79523,"elevation":106},
	{
	"locality_code":"S0018","adm_region":"Nakagusuku","locality_name":"Nakagusuku Forest S0018","site_id":"NAKAGUSUKUFR","latitude":26.28498,"longitude":127.79572,"elevation":121},
	{
	"locality_code":"S0012","adm_region":"Okinawa","locality_name":"Takeyanbaru Forest S0012","site_id":"TAKEYANBARUFR","latitude":26.41375,"longitude":127.78918,"elevation":137},
	{
	"locality_code":"S0013","adm_region":"Okinawa","locality_name":"Takeyanbaru Forest S0013","site_id":"TAKEYANBARUFR","latitude":26.41363,"longitude":127.78934,"elevation":135},
	{
	"locality_code":"S0014","adm_region":"Okinawa","locality_name":"Takeyanbaru Forest S0014","site_id":"TAKEYANBARUFR","latitude":26.4131,"longitude":127.79021,"elevation":129},
	{
	"locality_code":"S0021","adm_region":"Nago","locality_name":"Genka Open S0021","site_id":"GENKAOP","latitude":26.63912,"longitude":128.06187,"elevation":6},
	{
	"locality_code":"S0010","adm_region":"Ogimi","locality_name":"Kitamura 04 S0010","site_id":"KITAMURA04","latitude":26.7056,"longitude":128.17001,"elevation":17},
	{
	"locality_code":"S0011","adm_region":"Ogimi","locality_name":"Kitamura 03 S0011","site_id":"KITAMURA03","latitude":26.69066,"longitude":128.17839,"elevation":155},
	{
	"locality_code":"S0024","adm_region":"Kunigami","locality_name":"Yona Forest S0024","site_id":"YONAFR","latitude":26.73974,"longitude":128.23598,"elevation":297},
	{
	"locality_code":"S0025","adm_region":"Kunigami","locality_name":"Yona Forest S0025","site_id":"YONAFR","latitude":26.73972,"longitude":128.2363,"elevation":300},
	{
	"locality_code":"S0026","adm_region":"Kunigami","locality_name":"Yona Forest S0026","site_id":"YONAFR","latitude":26.73894,"longitude":128.2372,"elevation":311},
	{
	"locality_code":"S0029","adm_region":"Okinawa","locality_name":"Kurashiki Open S0029","site_id":"KURASHIKIOP","latitude":26.39299,"longitude":127.80787,"elevation":80},
	{
	"locality_code":"S0030","adm_region":"Uruma","locality_name":"Kurashiki Open S0030","site_id":"KURASHIKIOP","latitude":26.39329,"longitude":127.8074,"elevation":78},
	{
	"locality_code":"S0031","adm_region":"Uruma","locality_name":"Kurashiki Open S0031","site_id":"KURASHIKIOP","latitude":26.39382,"longitude":127.80736,"elevation":77},
	{
	"locality_code":"S0015","adm_region":"Ogimi","locality_name":"Hentona Open S0015","site_id":"HENTONAOP","latitude":26.70314,"longitude":128.13156,"elevation":23},
	{
	"locality_code":"S0017","adm_region":"Ogimi","locality_name":"Hentona Open S0017","site_id":"HENTONAOP","latitude":26.70251,"longitude":128.13113,"elevation":11},
	{
	"locality_code":"S0016","adm_region":"Ogimi","locality_name":"Hentona Open S0016","site_id":"HENTONAOP","latitude":26.70286,"longitude":128.13,"elevation":6},
	{
	"locality_code":"S0022","adm_region":"Nago","locality_name":"Genka Open S0022","site_id":"GENKAOP","latitude":26.6396,"longitude":128.06212,"elevation":7},
	{
	"locality_code":"S0023","adm_region":"Nago","locality_name":"Genka Open S0023","site_id":"GENKAOP","latitude":26.63974,"longitude":128.06258,"elevation":5},
	{
	"locality_code":"S0032","adm_region":"Nishihara","locality_name":"University of Ryukyus Open S0032","site_id":"UNIVRYUKYUSOP","latitude":26.24818,"longitude":127.75763,"elevation":105},
	{
	"locality_code":"S0033","adm_region":"Nishihara","locality_name":"University of Ryukyus Open S0033","site_id":"UNIVRYUKYUSOP","latitude":26.24795,"longitude":127.75863,"elevation":105},
	{
	"locality_code":"S0034","adm_region":"Nishihara","locality_name":"University of Ryukyus Open S0034","site_id":"UNIVRYUKYUSOP","latitude":26.24921,"longitude":127.75906,"elevation":114},
	{
	"locality_code":"S0035","adm_region":"Nishihara","locality_name":"University of Ryukyus Forest S0035","site_id":"UNIVRYUKYUSFR","latitude":26.24528,"longitude":127.75887,"elevation":113},
	{
	"locality_code":"S0036","adm_region":"Nishihara","locality_name":"University of Ryukyus Forest S0036","site_id":"UNIVRYUKYUSFR","latitude":26.24548,"longitude":127.75863,"elevation":112},
	{
	"locality_code":"S0037","adm_region":"Nishihara","locality_name":"University of Ryukyus Forest S0037","site_id":"UNIVRYUKYUSFR","latitude":26.24407,"longitude":127.75877,"elevation":130},
	{
	"locality_code":"S0001","adm_region":"Onna","locality_name":"OIST Open S0001","site_id":"OISTOP","latitude":26.45944,"longitude":127.83583,"elevation":135},
	{
	"locality_code":"S0002","adm_region":"Onna","locality_name":"OIST Open S0002","site_id":"OISTOP","latitude":26.45944,"longitude":127.83583,"elevation":135},
	{
	"locality_code":"T0001","adm_region":"Onna","locality_name":"OIST Open T0001","site_id":"OISTOP","latitude":26.45944,"longitude":127.83583,"elevation":135},
	{
	"locality_code":"S0003","adm_region":"Onna","locality_name":"OIST Open S0003","site_id":"OISTOP","latitude":26.45944,"longitude":127.83583,"elevation":135}
	];					
	
//functions to draw certain widgets (dropdown, buttons) based on the selected mode


//function to hold sites view (site points)
	function sitesView(){

	}
	
//  collaborator points
	function collaboratorsView(){
	
	}


//functions to draw leaflet+D3 map

	var southWest = L.latLng(23, 122),
    northEast = L.latLng(29, 132),
    bounds = L.latLngBounds(southWest, northEast);

	var map = new L.Map("mapContainer", {
				center: [26.5, 128], 
				zoom: 9,
				minZoom:8,
				maxBounds: bounds,
				maxZoom:14
			});
		
	var tile1 = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						}),
		
		tile2 = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
						attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS'
						});
		
		tile1.addTo(map);
			
	var layerControlItems = {
			  "<div class='layer-titles'> OSM Landscape </div>": tile1,
			  "<div class='layer-titles'> Terrain </div>": tile2
			};
		
		 L.control.layers(layerControlItems).addTo(map);
	
	map.scrollWheelZoom.disable();
	map.touchZoom.disable();

	var svg = d3.select(map.getPanes().overlayPane).append("svg"),
		g = svg.append("g").attr("class", "leaflet-zoom-hide");

	function projectPoint(x, y) {
		var point = map.latLngToLayerPoint(new L.LatLng(y, x)); 
		this.stream.point(point.x, point.y); 

	}
	var transform = d3.geo.transform({point: projectPoint}),
		path = d3.geo.path().projection(transform);


	var okinawa;

	function loadPolygons(){

		 d3.json("data/okinawa_best.geojson", function(error,adm2){
			  console.log(adm2);

		  
		  	  adm2.features.forEach(function(d){
					d.properties['number']=0;
					//console.log(d.properties.number);
					console.log(d.properties.NAME_2);
		
					dataset.forEach(function(d2){
						if(d2.adm_region==d.properties.NAME_2){
							d.properties['number']=d.properties['number']+1;
						}
	
					});
		
	
				});
				
				 
		  
		  
		  	  okinawa = adm2;
		  	  
		  	  var recolorMap = colorScale(adm2);
		  
			  g.selectAll("path")
				   .data(adm2.features)
				   .enter()
				   .append("path")
				   .attr("d", path)
				   .attr("fill", function(d) { 
						return choropleth(d, recolorMap);
					})
					.on('mouseover',function(d){
					
						var finalId= "id"+d.properties.NAME_2;
						d3.select(this)//select the current county in the dome	
						.style("stroke-width", 2)
						.style("cursor","pointer");
				   })
				   .on('mouseout',function(d){
					
						var finalId= "id"+d.properties.NAME_2;
						d3.select(this)//select the current county in the dome	
						.style("stroke-width", 0.5);
				   })
				   .on("click", function(d){
						// console.log(d);
						
						$('html, body').animate({
							scrollTop: $("#table").offset().top
						}, 1000);
						
						var localDataset=[];
					
						var selected_adm=d.properties.NAME_2;
			
						dataset.forEach(function(a){
							if(a.adm_region==selected_adm){
								localDataset.push(a);
							}
						
						
			
						});
					
						drawTable(localDataset);
						
			

					})
				   .style("stroke","black")
				   .style("stroke-width",0.5)
				   .style("opacity",0.7)
				   .attr("id",function(d){
						return "id"+d.properties.NAME_2;
					});
				
				var bounds = path.bounds(adm2),
					topLeft = bounds[0],
					bottomRight = bounds[1];
				
				 svg.attr("width", bottomRight[0] - topLeft[0])
					.attr("height", bottomRight[1] - topLeft[1])
					.style("left", topLeft[0] + "px")
					.style("top", topLeft[1] + "px");

				 g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
		
		});
	
	}

	
	loadPolygons();
	map.on("viewreset", resetView);
	
	
	function getOverlayG() {
		return g;
	}
	
	function getProjection() {
		return function(xy){ return map.latLngToLayerPoint(new L.LatLng(xy[1], xy[0])) };
	}
	
	function drawSites(){
	
		console.log("drawSites()");
		sites = g.append("g");
	
	
		sites.selectAll("circle")
	        .data(dataset)
	        .enter()
	        .append("circle")
	        .attr("r", 5)
			.attr("fill", "white")
	        .style("stroke", "black")
	        .classed("point", true)
	        .attr('cx',function(d){
					return getProjection()([d.longitude,d.latitude]).x;
				})
			.attr('cy',function(d){
					return getProjection()([d.longitude,d.latitude]).y;
				})
			.on("mouseover.border",function(){
				d3.select(this)
				.transition()
				.duration(1000)
				.style({
					'stroke-width':10,
					'stroke-opacity':0.3,
					'fill-opacity':1,
					'stroke':'#A7C9AE',
					'cursor':'pointer'
					});
			})
			.on("mouseout.border",function(){
				d3.select(this)
				.transition()
				.duration(2000)
				.style({
					'stroke-width':0.3,
					'stroke-opacity':1,
					'fill-opacity':1,
					'stroke':'black'
					});
			});
	
	}
	
	
	function removeSites(){
		sites.selectAll("circle").remove();
	}


	function resetView() {
			if (okinawa) {
				var bounds = path.bounds(okinawa),
					topLeft = bounds[0],
					bottomRight = bounds[1];
				

				svg.attr("width", bottomRight[0] - topLeft[0] + 1000)
						.attr("height", bottomRight[1] - topLeft[1])
						.style("left", topLeft[0] + "px")
						.style("top", topLeft[1] + "px");

				g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

				g.selectAll('path').attr("d", path);		
			}
			
// 			g.selectAll("circle")
// 			.each(function(d) {	
// 				var point = map.latLngToLayerPoint(new L.LatLng(d.longitude, d.latitude));
// 				
// 				d3.select(this)
// 					.attr("cx", point.x)
// 					.attr("cy", point.y);
// 
// 			});		

		//if fieldsites view is selected
		
		if(currentMode == "siteMode"){
				removeSites();
				drawSites();
		}
	}

	function colorClass(){
		//<-colorScale
		return [
				"#7fcdbb",
				"#41b6c4",
				"#2c7fb8",
				"#253494"
		];
	
	};

	function colorScale(jsonData){

		//create quantile classes with color scale
		var colors = colorClass();
		var color = d3.scale.linear() //designate quantile scale generator
			.range(colors);
		//set min and max data values as domain
		color.domain([0,6]);//currently hard-coded
	
		//return the color scale generator
		return color;	

	};

	function choropleth(d, recolorMap){
		//Get data value
		var value = d.properties.number;
		//If value exists, assign it a color; otherwise assign gray
		if (value) {
			return recolorMap(value);
		} else {
			return "#c7e9b4";
	};
};


	function drawTable(data){
	
		console.log("drawTable");
		console.log(data);
	
		var tr = d3.select("tbody").selectAll("tr").remove();

		var td = tr.selectAll("td").remove();

		var thead = d3.select("thead").selectAll("th").remove();

		var tr = d3.select("tbody").selectAll("tr")
		.data(data).enter().append("tr");


		var thead = d3.select("thead").selectAll("th")
			.data(d3.keys(data[0]))
			.enter().append("th").text(function(d){return d});
		
		var td = tr.selectAll("td")
		 .data(function(d){return d3.values(d)})
		 .enter().append("td")
		 .text(function(d) {return d}); //THIS PART NOT WORKING!
	 
	
	}
	
	
}//end initialize