/**
 * Google Maps JavaScript API のテストコード
 * 
 * 
 */


// 地図のインスタンスを作成する
var map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
    zoom: 15 ,	// ズーム値
	center: new google.maps.LatLng( 35.792621, 139.806513 ) ,	// 中心の位置座標
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#4b6528"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
} ) ;

// =============================================
// マーカーのインスタンスを作成する
var marker = new google.maps.Marker( {
    map: map ,	// 地図
	position: new google.maps.LatLng( 35.792621, 139.806513 ) ,	// 位置座標
} ) ;


// =============================================
// 情報ウィンドウのインスタンスを作成する
var infoWindow = new google.maps.InfoWindow( {
    content: "SYNCER" ,	// 内容
	// position: map.getCenter() ,	// 位置座標
    position: marker.getPosition(),
} ) ;

infoWindow.open( map ) ;



// =============================================
// ポリラインのインスタンスを作成する
var polyline = new google.maps.Polyline( {
    map: map ,
	path: [
		new google.maps.LatLng( -9.737363797981372, -54.62325150000004 ) ,
		new google.maps.LatLng( 21.671578686773664, 79.32206099999996 ) ,
	] ,
} ) ;

// =============================================
// 地図のビューポートを修正する
var latLngBounds = new google.maps.LatLngBounds() ;

polyline.getPath().forEach( function ( latLng ) {
	latLngBounds.extend( latLng ) ;
} ) ;

map.fitBounds( latLngBounds ) ;



// ポリゴンのインスタンスを作成する
var polygon = new google.maps.Polygon( {
    map: map ,
	paths: [
		new google.maps.LatLng( 32.3738255865663, 131.13505137238764 ) ,
		new google.maps.LatLng( 35.74061544252547, 139.92411387238764 ) ,
		new google.maps.LatLng( 43.04752474416507, 141.90165293488764 ) ,
		new google.maps.LatLng( 35.4547520334738, 133.37626230988764 ) ,
	] ,
} ) ;

// 地図のビューポートを修正する
var latLngBounds = new google.maps.LatLngBounds() ;

polygon.getPaths().forEach( function ( latLngs ) {
	latLngs.forEach( function ( latLng ) {
		latLngBounds.extend( latLng ) ;
	} ) ;
} ) ;

map.fitBounds( latLngBounds ) ;



// =============================================
// レクタングルのインスタンスを作成する
var rectangle = new google.maps.Rectangle( {
    bounds: new google.maps.LatLngBounds(	// 境界
		new google.maps.LatLng( 32.686876527300385, 132.2624296523437 ) ,
		new google.maps.LatLng( 34.43532937910868, 134.7123808242187 )
	)  ,
	map: map ,	// 地図
} ) ;

// 地図のビューポートを修正する
map.fitBounds( rectangle.getBounds() ) ;

// =============================================
// 円のインスタンスを作成する
var circle = new google.maps.Circle( {
    center: new google.maps.LatLng( 33.839947, 132.75110700000008 ) ,	// 中心の位置座標
	map: map ,	// 設置する地図
	radius: 10000 ,	// 半径
} ) ;

// 地図のビューポートを修正する
map.fitBounds( circle.getBounds() ) ;

// =============================================
// LatLngBoundsのインスタンスを作成する
var LatLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng( 35.708194 , 139.808565 ) ,
	new google.maps.LatLng( 35.712280 , 139.813619 )
) ;

// オーバーレイのインスタンスを作成する
var groundOverlay = new google.maps.GroundOverlay( "./overlay.png", LatLngBounds, {
	clickable: false ,	// クリックの有効、無効
	map: map ,	// 設置する地図
	opacity: 0.85 ,	// 不透明度
} ) ;

// 地図のビューポートを修正する
map.fitBounds( groundOverlay.getBounds() ) ;

// =============================================
// =============================================

