#Google Maps API

For this session, we are going to play with the Google Maps API. You can either follow along, or put your headphones on and work through the [official documentation](https://developers.google.com/maps/documentation/javascript/reference) and this markdown on your own. 

First, let's check out a quick example of some cool stuff you can do with Google Maps. This is an example taken from a former WDI student's Project 4. It's a very cool use of Google Maps overlays. 

[Heatmaps](http://heat-maps.herokuapp.com/) by [Justin Curatolo](https://github.com/jcuratolo):



1. Create a Basic Map
2. Overlays (Markers, Zones, etc...)
3. Map Events
4. Map Controls
5. Map Types


---
####Google Developers API Key

You may want to [register](https://console.developers.google.com) for an API key with Google.

Google will allow you to make many requests per day. If you plan for heavy traffic, or using other Google APIs, you should get a free API key from Google.

Go to [https://console.developers.google.com](https://console.developers.google.com) to register.


---



##Step 1: Create a Basic Google Map

######A - Load the Google API

Google Maps is a JavaScript library; it can be loaded using the script tags.
	
```
without API key

< script src="http://maps.googleapis.com/maps/api/js"> </script>

or with API key

< script src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY"></script>


```

######B - Set Map Properties

Create a function to initialize the map:

```
function initialize() {
}

```

In the initialize function, create an object (mapProperties) to define (some default) properties for the map. When you get rocking, you can set your own properties:

```
var mapProperties = {
  center:new google.maps.LatLng(34.0129821,-118.495196),
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

```

######C - Create a Map Container

Create a 'div' element to hold the map.

```
< div id="googleMap" "style="width:500px;height:380px;"></div>

```

Don't forget to give it a height and width. (You can use inline style just this once!)


######D - Create a Map Object

``` 
var map=new google.maps.Map(document.getElementById("googleMap"), mapProperties);

```

The code above creates a new map inside the < div > element with id="googleMap", using the parameters that are passed (mapProperties).



######E - Add an Event Listener to Load the Map

Add a DOM listener that will execute the initialize() function on window load (when the page is loaded):

```
google.maps.event.addDomListener(window, 'load', initialize);

```

##Step 2: Overlays

<br/>

Overlays are objects on the map that are bound to latitude/longitude coordinates. Google Maps has several types of overlays:

**Marker** - Single locations on a map. Markers can also display custom icon images.

```

//adds a marker
var marker=new google.maps.Marker({
  position:myCenter, 
  animation:google.maps.Animation.BOUNCE, //animates the marker
  icon:'pinkball.png' // replace default marker with custom icon
  });
marker.setMap(map);

```


**Info Windows** - Displays content within a pop-up balloon on top of a map.

```
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });

infowindow.open(map,marker);

```

**Polyline** - Series of straight lines on a map. Supports the following properties:

* path - Specifies several latitude/longitude coordinates for the line.
* strokeColor - Specifies a hexadecimal color for the line (format: "#FFFFFF").
* strokeOpacity - Specifies the opacity of the line (a value between 0.0 and 1.0).
* strokeWeight - Specifies the weight of the line's stroke in pixels.
* editable - Defines whether the line is editable by users (true/false).

```
var myTrip = [stavanger,amsterdam,london];
var flightPath = new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
});
```

**Polygon** - Series of straight lines on a map, and the shape is "closed." Supports the following properties:

* path - Specifies several LatLng coordinates for the line (first and last coordinate are equal).
* strokeColor - Specifies a hexadecimal color for the line (format: "#FFFFFF").
* strokeOpacity - Specifies the opacity of the line (a value between 0.0 and 1.0).
* strokeWeight - Specifies the weight of the line's stroke in pixels.
* fillColor - Specifies a hexadecimal color for the area within the enclosed region (format: "#FFFFFF").
* fillOpacity - Specifies the opacity of the fill color (a value between 0.0 and 1.0).
* editable - Defines whether the line is editable by users (true/false).

```
var myTrip = [paris,chicago,london,paris];
var flightPath = new google.maps.Polygon({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0000FF",
  fillOpacity:0.4
});

```

##Step 3: Map Events
<br/>
Click The Marker to Zoom

```

// Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });

```

Open an InfoWindow when clicking on the marker.


```
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
```


Set markers and open InfoWindow for each marker.

```
google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(event.latLng);
  });

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}
```
##Step 4: Map Controls

There are many controls (see documentation), but here are a few to get you started. 

* Zoom - Displays a slider or "+/-" buttons to control the zoom level of the map.
* Pan - Displays a pan control for panning the map.
* MapType - Lets the user toggle between map types (roadmap and satellite).
* Street View - Displays a Pegman icon that can be dragged to the map to enable Street View.
* Scale - Displays a map-scale element.
* Rotate - Displays a small circular icon that allows you to rotate maps.
* Overview Map - Displays a thumbnail overview map reflecting the current map viewport within a wider area.

##Step 5: Map Types



* ROADMAP (normal, default 2D map)
* SATELLITE (photographic map)
* HYBRID (photographic map + roads and city names)
* TERRAIN (map with mountains, rivers, etc.)
