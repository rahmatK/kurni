<?php include 'checksession_user.php'?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>BoatFlow</title>
    <link data-turbolinks-track="true" href="css/application.css" media="all" rel="stylesheet" />
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&amp;amp;sensor=false"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/tags/markerclustererplus/2.0.14/src/markerclusterer_packed.js"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
    <script data-turbolinks-track="true" src="js/application.js"></script>
    <meta content="authenticity_token" name="csrf-param" />
    <meta content="pJXe1rfZacDpw9yIQMn8d+IRG+yHR+Pr2WqkYue4I/o=" name="csrf-token" />
    <script type="text/javascript">
        $(document).ready(function () {
            var search = JSON.parse("[{\"id\":1,\"label\":\"SANO\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"?????\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"11M CLASSIC BOAT\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":\"11M????????\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":1938,\"value\":1938},{\"id\":1,\"label\":\"Ethanol\",\"value\":\"Ethanol\"},{\"id\":1,\"label\":\"Hokkaido Prefecture, Japan\",\"value\":\"Hokkaido Prefecture, Japan\"},{\"id\":2,\"label\":\"SUGAR RAY\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"??????\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"123 TOMBOY\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":\"123??????\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":1951,\"value\":1951},{\"id\":2,\"label\":\"Gasoline\",\"value\":\"Gasoline\"},{\"id\":2,\"label\":\"Tohoku, Kamikita District, Aomori, Japan\",\"value\":\"Tohoku, Kamikita District, Aomori, Japan\"},{\"id\":3,\"label\":\"OKAMOTO\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"????\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"14\",\"value\":\"14\"},{\"id\":3,\"label\":1941,\"value\":1941},{\"id\":3,\"label\":\"Tohoku, Niiza, Saitama, Japan\",\"value\":\"Tohoku, Niiza, Saitama, Japan\"},{\"id\":4,\"label\":\"140 HAMMER HEAD E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":\"140????????E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":1927,\"value\":1927},{\"id\":4,\"label\":\"Diesel\",\"value\":\"Diesel\"},{\"id\":4,\"label\":\"Misaki, Funabashi, Chiba, Japan\",\"value\":\"Misaki, Funabashi, Chiba, Japan\"},{\"id\":5,\"label\":\"140 HAMMER HEAD E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":\"140????????E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":1995,\"value\":1995},{\"id\":5,\"label\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\",\"value\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\"},{\"id\":6,\"label\":\"140 HAMMER HEAD E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":\"140????????E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":1905,\"value\":1905},{\"id\":6,\"label\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\",\"value\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\"},{\"id\":7,\"label\":\"140 HAMMER HEAD E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":\"140????????E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":1944,\"value\":1944},{\"id\":7,\"label\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\",\"value\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\"},{\"id\":8,\"label\":\"140 HAMMER HEAD T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":\"140????????T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":1900,\"value\":1900},{\"id\":8,\"label\":\"Aibara Iwamuracho, Ena, Gifu, Japan\",\"value\":\"Aibara Iwamuracho, Ena, Gifu, Japan\"},{\"id\":9,\"label\":\"YAMAHA\",\"value\":\"YAMAHA\"},{\"id\":9,\"label\":\"???\",\"value\":\"YAMAHA\"},{\"id\":9,\"label\":\"15FT\",\"value\":\"15FT\"},{\"id\":9,\"label\":1929,\"value\":1929},{\"id\":9,\"label\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\",\"value\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\"},{\"id\":10,\"label\":\"SUNAGA\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"???\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"16F-5\",\"value\":\"16F-5\"},{\"id\":10,\"label\":1971,\"value\":1971},{\"id\":10,\"label\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\",\"value\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\"},{\"id\":11,\"label\":\"TOHATSU\",\"value\":\"TOHATSU\"},{\"id\":11,\"label\":\"????\",\"value\":\"TOHATSU\"},{\"id\":11,\"label\":\"17F\",\"value\":\"17F\"},{\"id\":11,\"label\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\",\"value\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\"},{\"id\":12,\"label\":\"NISSAN\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"????\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"18\",\"value\":\"18\"},{\"id\":12,\"label\":1973,\"value\":1973},{\"id\":12,\"label\":\"Hiroo, Shibuya, Tokyo, Japan\",\"value\":\"Hiroo, Shibuya, Tokyo, Japan\"},{\"id\":13,\"label\":\"18M CUSTOM\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":\"18M????\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":1946,\"value\":1946},{\"id\":13,\"label\":\"Shibushi, Kagoshima, Japan\",\"value\":\"Shibushi, Kagoshima, Japan\"},{\"id\":14,\"label\":\"AKIPURA\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"????\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"19CD\",\"value\":\"19CD\"},{\"id\":14,\"label\":1953,\"value\":1953},{\"id\":14,\"label\":\"Shibuya, Tokyo, Japan\",\"value\":\"Shibuya, Tokyo, Japan\"},{\"id\":15,\"label\":\"ALLEX\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"?????\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"20SP\",\"value\":\"20SP\"},{\"id\":15,\"label\":2009,\"value\":2009},{\"id\":16,\"label\":\"21 C\",\"value\":\"21 C\"},{\"id\":16,\"label\":\"Iga, Mie, Japan\",\"value\":\"Iga, Mie, Japan\"},{\"id\":17,\"label\":\"212SS\",\"value\":\"212SS\"},{\"id\":17,\"label\":1968,\"value\":1968},{\"id\":17,\"label\":\"Koga, Ibaraki, Japan\",\"value\":\"Koga, Ibaraki, Japan\"},{\"id\":18,\"label\":\"212X\",\"value\":\"212X\"},{\"id\":18,\"label\":1994,\"value\":1994},{\"id\":18,\"label\":\"Koga, Fukuoka, Japan\",\"value\":\"Koga, Fukuoka, Japan\"},{\"id\":19,\"label\":\"21R\\u0026C\",\"value\":\"21R\\u0026C\"},{\"id\":19,\"label\":1977,\"value\":1977},{\"id\":19,\"label\":\"Koga, Yanagawa, Fukuoka, Japan\",\"value\":\"Koga, Yanagawa, Fukuoka, Japan\"},{\"id\":20,\"label\":\"22 RUNABOUT\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":\"22??????\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":1999,\"value\":1999},{\"id\":20,\"label\":\"Itsukushima, Japan\",\"value\":\"Itsukushima, Japan\"},{\"id\":21,\"label\":\"23\",\"value\":\"23\"},{\"id\":21,\"label\":1902,\"value\":1902},{\"id\":21,\"label\":\"Miyamoto, Mimasaka, Okayama, Japan\",\"value\":\"Miyamoto, Mimasaka, Okayama, Japan\"},{\"id\":22,\"label\":\"23 RENAISSA\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":\"23????\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":1966,\"value\":1966},{\"id\":22,\"label\":\"Miyamoto, Funabashi, Chiba, Japan\",\"value\":\"Miyamoto, Funabashi, Chiba, Japan\"},{\"id\":23,\"label\":\"230SX\",\"value\":\"230SX\"},{\"id\":23,\"label\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\",\"value\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\"},{\"id\":24,\"label\":\"232 LIMITED\",\"value\":\"232 LIMITED\"},{\"id\":24,\"label\":1923,\"value\":1923},{\"id\":24,\"label\":\"Miyamotocho, Koshigaya, Saitama, Japan\",\"value\":\"Miyamotocho, Koshigaya, Saitama, Japan\"},{\"id\":25,\"label\":\"23FT\",\"value\":\"23FT\"},{\"id\":25,\"label\":1916,\"value\":1916},{\"id\":25,\"label\":\"Kagawa-gun, Kagawa, Japan\",\"value\":\"Kagawa-gun, Kagawa, Japan\"},{\"id\":26,\"label\":\"23II\",\"value\":\"23II\"},{\"id\":26,\"label\":1933,\"value\":1933},{\"id\":26,\"label\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\",\"value\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\"},{\"id\":27,\"label\":\"MIYAMA\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"???\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"24\",\"value\":\"24\"},{\"id\":27,\"label\":1957,\"value\":1957},{\"id\":27,\"label\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\",\"value\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\"},{\"id\":28,\"label\":\"SUZUKI\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":\"???\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":1924,\"value\":1924},{\"id\":28,\"label\":\"Nagoya, Aichi, Japan\",\"value\":\"Nagoya, Aichi, Japan\"},{\"id\":29,\"label\":1988,\"value\":1988},{\"id\":29,\"label\":\"Tokoname, Aichi, Japan\",\"value\":\"Tokoname, Aichi, Japan\"},{\"id\":30,\"label\":\"AOKI YACHT\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"?????\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"24 ALBATROSS GAFUKATTA\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":\"???24??????\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":\"Shogunnohigashi, Akita, Japan\",\"value\":\"Shogunnohigashi, Akita, Japan\"}]");
            $("#search").click(function () {
                $(this).select();
            });

            $("#search").autocomplete({
                    minLength: 0,
                    source: search,
                    focus: function (event, ui) {
                        $("#search").val(ui.item.value);
                        return false;
                    },
                    select: function (event, ui) {
                        $("#search").val(ui.item.value);
                        return false;
                    }
                })
                .data("ui-autocomplete")._renderItem = function (ul, item) {
                    return $("<li>")
                        .append("<a>" + item.value + "</a>")
                        .appendTo(ul);
                };
        });
    </script>
</head>

<body>
    <main id="content" role="main">
        <script type="text/javascript">
            var latLngArray = [{
                "lat": 43.230922,
                "lng": 141.549883,
                "id": 1
            }, {
                "lat": 40.7278764,
                "lng": 141.2578824,
                "id": 2
            }, {
                "lat": 35.8211686,
                "lng": 139.5718512,
                "id": 3
            }, {
                "lat": 35.7519615,
                "lng": 140.0298218,
                "id": 4
            }, {
                "lat": 34.1604332,
                "lng": 134.4570627,
                "id": 5
            }, {
                "lat": 37.9898035,
                "lng": 140.7960797,
                "id": 6
            }, {
                "lat": 35.0326388,
                "lng": 137.077516,
                "id": 7
            }, {
                "lat": 35.3645565,
                "lng": 137.4407448,
                "id": 8
            }, {
                "lat": 40.5255926,
                "lng": 141.4511664,
                "id": 9
            }, {
                "lat": 34.432002,
                "lng": 135.230394,
                "id": 10
            }, {
                "lat": 34.2448475,
                "lng": 132.626461,
                "id": 11
            }, {
                "lat": 35.6501959,
                "lng": 139.7210272,
                "id": 12
            }, {
                "lat": 31.495442,
                "lng": 131.045336,
                "id": 13
            }, {
                "lat": 35.6640352,
                "lng": 139.6982122,
                "id": 14
            }, {
                "lat": 35.6640352,
                "lng": 139.6982122,
                "id": 15
            }, {
                "lat": 34.7685953,
                "lng": 136.1299103,
                "id": 16
            }, {
                "lat": 36.1846451,
                "lng": 139.7025248,
                "id": 17
            }, {
                "lat": 33.7287865,
                "lng": 130.4699872,
                "id": 18
            }, {
                "lat": 33.1611636,
                "lng": 130.3893883,
                "id": 19
            }, {
                "lat": 34.2796599,
                "lng": 132.3114041,
                "id": 20
            }, {
                "lat": 35.0956884,
                "lng": 134.3267593,
                "id": 21
            }, {
                "lat": 35.6985274,
                "lng": 139.9927116,
                "id": 22
            }, {
                "lat": 35.4294208,
                "lng": 139.6095422,
                "id": 23
            }, {
                "lat": 35.8884644,
                "lng": 139.7749697,
                "id": 24
            }, {
                "lat": 34.4574202,
                "lng": 133.9865766,
                "id": 25
            }, {
                "lat": 30.4147165,
                "lng": 130.5013824,
                "id": 26
            }, {
                "lat": 35.0724257,
                "lng": 136.8507555,
                "id": 27
            }, {
                "lat": 35.1814464,
                "lng": 136.906398,
                "id": 28
            }, {
                "lat": 34.8867002,
                "lng": 136.8323973,
                "id": 29
            }, {
                "lat": 39.7588668,
                "lng": 140.0847808,
                "id": 30
            }];
            var map;
            var markers = [];
            var markerCluster;

            function setMapFitBounds(map, latLngArray) {
                var bounds = new google.maps.LatLngBounds();
                for (i in latLngArray) {
                    var latlng = latLngArray[i];
                    bounds.extend(new google.maps.LatLng(latlng['lat'], latlng['lng']));
                }
                map.fitBounds(bounds);
            }

            function setMarkers(map, latLngArray) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                if (markerCluster) {
                    markerCluster.clearMarkers();
                }

                markers.length = 0;
                for (var i = 0; i < latLngArray.length; i++) {
                    var latlng = latLngArray[i];
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latlng['lat'], latlng['lng']),
                        map: map,
                        boat_id: latlng['id']
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        var boat_id = this.boat_id;
                        $.ajax({
                            type: 'get',
                            url: '/boats?' + 'filterrific[id_in]=' + boat_id,
                            dataType: 'script',
                            success: function (response) {
                                console.log(response);
                            }
                        });
                        //$('#filterrific_id_in').val(boat_id);

                    });
                    markers.push(marker);
                }
                setMapFitBounds(map, latLngArray);
                /* Clustering markers into number */
                //var mcOptions = {gridSize: 50, maxZoom: 15};
                markerCluster = new MarkerClusterer(map, markers);
            }
            $(document).ready(function () {

                //$('#autocomplete').geocomplete();
                var mapOptions = {
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN],
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);

                var bounds = new google.maps.LatLngBounds();
                var input = /** @type {HTMLInputElement} */ (
                    document.getElementById('autocomplete'));
                var options = {
                    types: ['(cities)'],
                    componentRestrictions: {
                        country: "jp"
                    }
                };
                $('#autocomplete').keypress(function (e) {
                    if (e.which == 13) {
                        e.preventDefault();
                        google.maps.event.trigger(autocomplete, 'place_changed');
                    }
                });
                var autocomplete = new google.maps.places.Autocomplete(input, options);
                autocomplete.bindTo('bounds', map);
                var infowindow = new google.maps.InfoWindow();

                /* get markers from boat's model */
                setMarkers(map, latLngArray);
                var resetMap = document.getElementById('reset-map')
                google.maps.event.addDomListener(resetMap, 'click', function () {
                    setMarkers(map, latLngArray);
                });

                /* Add event on autocomplete */
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    infowindow.close();
                    marker.setVisible(false);
                    var place = autocomplete.getPlace();
                    if (!place || !place.geometry) {
                        return;
                    }

                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(7);
                    }
                    var address = '';
                    if (place.address_components) {
                        address = [
                            (place.address_components[0] && place.address_components[0].short_name || ''), (place.address_components[1] && place.address_components[1].short_name || ''), (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }

                });
                google.maps.event.addListener(map, 'bounds_changed', function () {
                    console.log($('#filterrific_id_in').val());
                    var bounds = map.getBounds();
                    var boat_ids = [];
                    for (var i in markers) {
                        if (bounds.contains(markers[i].getPosition())) {
                            var boat_id = markers[i].boat_id;
                            if (boat_id) {
                                boat_ids.push(boat_id);
                            }
                        }
                        //$('#filterrific_id_in').val(boat_ids.join());
                    }
                    //console.log(boat_ids.join());
                    //$.ajax({
                    //type: 'get',
                    //url: '/boats?' + 'filterrific[id_in]=' + boat_ids.join(),
                    //dataType: 'script'
                    //});
                });
            });
            $(document).ready(function () {
                $("#price-range-filter").slider({
                    range: true,
                    min: 11157.0,
                    max: 48739.0,
                    values: [11157.0, 48739.0],
                    change: function (event, ui) {
                        $("#filterrific_price_range_start").val(ui.values[0]);
                        $("#filterrific_price_range_stop").val(ui.values[1]);

                    },
                    slide: function (event, ui) {
                        $("#price_range").text("$" + ui.values[0] + " - $" + ui.values[1]);
                        var min = $("#price-range-filter").slider('option', 'min');
                        var max = $("#price-range-filter").slider('option', 'max');
                        if ($(ui.values).not([min, max]).length == 0 && $([min, max]).not(ui.values).length == 0) {
                            $("#price_range").text("Any");
                        }
                    }
                });
                $("#price_range").text("Any");

                $("#size-range-filter").slider({
                    range: true,
                    min: 20,
                    max: 40,
                    values: [20, 40],
                    change: function (event, ui) {
                        $("#filterrific_size_range_start").val(ui.values[0]);
                        $("#filterrific_size_range_stop").val(ui.values[1]);

                    },
                    slide: function (event, ui) {
                        $("#size_range").text(ui.values[0] + " - " + ui.values[1]);
                        var min = $("#size-range-filter").slider('option', 'min');
                        var max = $("#size-range-filter").slider('option', 'max');
                        if ($(ui.values).not([min, max]).length == 0 && $([min, max]).not(ui.values).length == 0) {
                            $("#size_range").text("Any");
                        }
                    }
                });
                $("#size_range").text("Any");

                $("#year-range-filter").slider({
                    range: true,
                    min: 1900,
                    max: 2009,
                    values: [1900, 2009],
                    change: function (event, ui) {
                        $("#filterrific_year_range_start").val(ui.values[0]);
                        $("#filterrific_year_range_stop").val(ui.values[1]);

                    },
                    slide: function (event, ui) {
                        $("#year_range").text(ui.values[0] + " - " + ui.values[1]);
                        var min = $("#year-range-filter").slider('option', 'min');
                        var max = $("#year-range-filter").slider('option', 'max');
                        if ($(ui.values).not([min, max]).length == 0 && $([min, max]).not(ui.values).length == 0) {
                            $("#year_range").text("Any");
                        }
                    }
                });


                $("#year_range").text("Any");
            });
            $(document).ready(function () {
                $('.sorts a').click(function (event) {
                    $.get(this.href, null, null, 'script');
                    return false;
                });
            });
        </script>
        <header>
            <div class="container-fluid"><a class="" href="index.php">Home</a> &raquo; <a class="" href="boats.php">Boats</a><a class="pull-right" data-no-turbolink="true" href="">Reset filters</a>
            </div>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    <form accept-charset="UTF-8" action="" class="new_filterrific" id="filterrific_filter" method="get">
                        <div style="display:none">
                            <input name="utf8" type="hidden" value="&#x2713;" />
                        </div>
                        <div id="filter-by-map">
                            <div class="input-group col-sm-12">
                                <input autocomplete="off" class="form-control" id="autocomplete" placeholder="Enter location" type="text" />
                            </div>
                            <div style="width: inherit;">
                                <div id="map" style="width: inherit; height: 300px;"></div>
                            </div><a id="reset-map">reset map</a>
                            <input class="filterrific-periodically-observed" id="filterrific_id_in" name="filterrific[id_in]" type="hidden" />
                        </div>
                        <div id="range-filters">
                            <div class="range-filter">
                                <label for="price_range">Price</label><span id="price_range"></span>
                                <div id="price-range-filter">
                                    <input class="filterrific-periodically-observed" id="filterrific_price_range_start" name="filterrific[price_range][start]" type="hidden" value="11157.0" />
                                    <input class="filterrific-periodically-observed" id="filterrific_price_range_stop" name="filterrific[price_range][stop]" type="hidden" value="48739.0" />
                                </div>
                            </div>
                            <div class="range-filter">
                                <label for="size_range">Size</label><span id="size_range"></span>
                                <div id="size-range-filter">
                                    <input class="filterrific-periodically-observed" id="filterrific_size_range_start" name="filterrific[size_range][start]" type="hidden" value="20" />
                                    <input class="filterrific-periodically-observed" id="filterrific_size_range_stop" name="filterrific[size_range][stop]" type="hidden" value="40" />
                                </div>
                            </div>
                            <div class="range-filter">
                                <label for="year_range">Year</label><span id="year_range"></span>
                                <div id="year-range-filter">
                                    <input class="filterrific-periodically-observed" id="filterrific_year_range_start" name="filterrific[year_range][start]" type="hidden" value="1900" />
                                    <input class="filterrific-periodically-observed" id="filterrific_year_range_stop" name="filterrific[year_range][stop]" type="hidden" value="2009" />
                                </div>
                            </div>
                            <div id="filters">
                                <script type="text/javascript"></script>
                                <div id="filter-by-category">
                                    <li class="checkbox">
                                        <label for="filterrific_category_in_motoryachts">
                                            <input id="filterrific_category_in_motoryachts" multiple="multiple" name="filterrific[category_in][]" type="checkbox" value="MOTORYACHTS" />MOTORYACHTS (9)</label>
                                    </li>
                                    <li class="checkbox">
                                        <label for="filterrific_category_in_powerboats">
                                            <input id="filterrific_category_in_powerboats" multiple="multiple" name="filterrific[category_in][]" type="checkbox" value="Powerboats" />Powerboats (13)</label>
                                    </li>
                                    <li class="checkbox">
                                        <label for="filterrific_category_in_sailing_yachts">
                                            <input id="filterrific_category_in_sailing_yachts" multiple="multiple" name="filterrific[category_in][]" type="checkbox" value="SAILING YACHTS" />SAILING YACHTS (8)</label>
                                    </li>
                                </div>
                                <div id="filter-by-makes"><span>Filter By Make</span>
                                    <ul class="list-unstyled">
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_akipura">
                                                <input id="filterrific_make_in_akipura" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="AKIPURA" />AKIPURA (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_allex">
                                                <input id="filterrific_make_in_allex" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="ALLEX" />ALLEX (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_aoki_yacht">
                                                <input id="filterrific_make_in_aoki_yacht" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="AOKI YACHT" />AOKI YACHT (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_miyama">
                                                <input id="filterrific_make_in_miyama" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="MIYAMA" />MIYAMA (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_nissan">
                                                <input id="filterrific_make_in_nissan" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="NISSAN" />NISSAN (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_okamoto">
                                                <input id="filterrific_make_in_okamoto" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="OKAMOTO" />OKAMOTO (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_sano">
                                                <input id="filterrific_make_in_sano" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="SANO" />SANO (2)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_sugar_ray">
                                                <input id="filterrific_make_in_sugar_ray" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="SUGAR RAY" />SUGAR RAY (6)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_sunaga">
                                                <input id="filterrific_make_in_sunaga" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="SUNAGA" />SUNAGA (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_suzuki">
                                                <input id="filterrific_make_in_suzuki" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="SUZUKI" />SUZUKI (1)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_tohatsu">
                                                <input id="filterrific_make_in_tohatsu" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="TOHATSU" />TOHATSU (2)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_make_in_yamaha">
                                                <input id="filterrific_make_in_yamaha" multiple="multiple" name="filterrific[make_in][]" type="checkbox" value="YAMAHA" />YAMAHA (12)</label>
                                        </li>
                                    </ul>
                                </div>
                                <div id="filter-by-engine-types"><span>Filter By Engine Type</span>
                                    <ul class="list-unstyled">
                                        <li class="checkbox">
                                            <label for="filterrific_engine_type_in_inboards">
                                                <input id="filterrific_engine_type_in_inboards" multiple="multiple" name="filterrific[engine_type_in][]" type="checkbox" value="Inboards" />Inboards (7)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_engine_type_in_jet_boat_engine">
                                                <input id="filterrific_engine_type_in_jet_boat_engine" multiple="multiple" name="filterrific[engine_type_in][]" type="checkbox" value="Jet Boat Engine" />Jet Boat Engine (9)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_engine_type_in_outboard">
                                                <input id="filterrific_engine_type_in_outboard" multiple="multiple" name="filterrific[engine_type_in][]" type="checkbox" value="Outboard" />Outboard (8)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_engine_type_in_stern_drives">
                                                <input id="filterrific_engine_type_in_stern_drives" multiple="multiple" name="filterrific[engine_type_in][]" type="checkbox" value="Stern Drives" />Stern Drives (6)</label>
                                        </li>
                                    </ul>
                                </div>
                                <div id="filter-by-fuel-types"><span>Filter By Fuel Type</span>
                                    <ul class="list-unstyled">
                                        <li class="checkbox">
                                            <label for="filterrific_fuel_type_in_diesel">
                                                <input id="filterrific_fuel_type_in_diesel" multiple="multiple" name="filterrific[fuel_type_in][]" type="checkbox" value="Diesel" />Diesel (8)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_fuel_type_in_ethanol">
                                                <input id="filterrific_fuel_type_in_ethanol" multiple="multiple" name="filterrific[fuel_type_in][]" type="checkbox" value="Ethanol" />Ethanol (8)</label>
                                        </li>
                                        <li class="checkbox">
                                            <label for="filterrific_fuel_type_in_gasoline">
                                                <input id="filterrific_fuel_type_in_gasoline" multiple="multiple" name="filterrific[fuel_type_in][]" type="checkbox" value="Gasoline" />Gasoline (14)</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-sm-8">
                    <section id="filter_results">
                        <script type="text/javascript">
                            $(document).ready(function () {
                                $('.pagination a').click(function (event) {
                                    $('.pagination').html('Page is loading...');
                                    $.get(this.href, null, null, 'script');
                                    return false;
                                });
                                $('.sorts a').click(function (event) {
                                    $.get(this.href, null, null, 'script');
                                    return false;
                                });
                            })
                        </script>
                        <section id="filter_results">
                            <div class="pull-right sorts"><span>Sort by: </span><a class="current asc" href="/boats?direction=desc&amp;sort=created_at">Latest Inventory</a><span class="divider"> |</span><a class="" href="/boats?direction=asc&amp;sort=length">Length</a><span class="divider"> |  </span><a class="" href="/boats?direction=asc&amp;sort=price">Price</a><span class="divider"> |  </span><a class="" href="/boats?direction=asc&amp;sort=make">Make</a><span class="divider"> |  </span><a class="" href="/boats?direction=asc&amp;sort=year">Year</a>
                            </div>
                            <div>Displaying Boat <b>1&nbsp;-&nbsp;5</b> of <b>30</b> in total</div>
                            <ul class="media-list">
                                <li class="media">
                                    <a class="pull-left" href="/boats/30">
                                        <img alt="AOKI YACHT 24 ALBATROSS GAFUKATTA" src="https://boat-flow.s3.amazonaws.com/uploads/image/image/30/thumb_boat7.jpg" /><span class="img-count">1 pictures</span>
                                    </a>
                                    <div class="media-body">
                                        <h3 class="media-heading"><a href="/boats/30">AOKI YACHT 24 ALBATROSS GAFUKATTA</a></h3>
                                        <div class="boat-make">AOKI YACHT</div>
                                        <div class="boat-price">JPY22,933.00</div>
                                        <div class="boat-length"><span>Length: </span><span>33</span>
                                        </div>
                                        <div class="boat-location"><span>Location: </span><span>Shogunnohigashi, Akita, Japan</span>
                                        </div>
                                        <div class="boat-views-count pull-right"><span>0 views</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="media">
                                    <a class="pull-left" href="/boats/29">
                                        <img alt="YAMAHA 24" src="https://boat-flow.s3.amazonaws.com/uploads/image/image/29/thumb_boat2.jpg" /><span class="img-count">1 pictures</span>
                                    </a>
                                    <div class="media-body">
                                        <h3 class="media-heading"><a href="/boats/29">YAMAHA 24</a></h3>
                                        <div class="boat-make">YAMAHA</div>
                                        <div class="boat-price">JPY12,097.00</div>
                                        <div class="boat-length"><span>Length: </span><span>28</span>
                                        </div>
                                        <div class="boat-location"><span>Location: </span><span>Tokoname, Aichi, Japan</span>
                                        </div>
                                        <div class="boat-views-count pull-right"><span>0 views</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="media">
                                    <a class="pull-left" href="/boats/28">
                                        <img alt="SUZUKI 24" src="https://boat-flow.s3.amazonaws.com/uploads/image/image/28/thumb_boat6.jpg" /><span class="img-count">1 pictures</span>
                                    </a>
                                    <div class="media-body">
                                        <h3 class="media-heading"><a href="/boats/28">SUZUKI 24</a></h3>
                                        <div class="boat-make">SUZUKI</div>
                                        <div class="boat-price">JPY27,743.00</div>
                                        <div class="boat-length"><span>Length: </span><span>34</span>
                                        </div>
                                        <div class="boat-location"><span>Location: </span><span>Nagoya, Aichi, Japan</span>
                                        </div>
                                        <div class="boat-views-count pull-right"><span>0 views</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="media">
                                    <a class="pull-left" href="/boats/27">
                                        <img alt="MIYAMA 24" src="https://boat-flow.s3.amazonaws.com/uploads/image/image/27/thumb_boat7.jpg" /><span class="img-count">1 pictures</span>
                                    </a>
                                    <div class="media-body">
                                        <h3 class="media-heading"><a href="/boats/27">MIYAMA 24</a></h3>
                                        <div class="boat-make">MIYAMA</div>
                                        <div class="boat-price">JPY26,317.00</div>
                                        <div class="boat-length"><span>Length: </span><span>22</span>
                                        </div>
                                        <div class="boat-location"><span>Location: </span><span>Shiotomecho, Minato Ward, Nagoya, Aichi, Japan</span>
                                        </div>
                                        <div class="boat-views-count pull-right"><span>0 views</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="media">
                                    <a class="pull-left" href="/boats/26">
                                        <img alt="YAMAHA 23II" src="https://boat-flow.s3.amazonaws.com/uploads/image/image/26/thumb_boat1.jpg" /><span class="img-count">1 pictures</span>
                                    </a>
                                    <div class="media-body">
                                        <h3 class="media-heading"><a href="/boats/26">YAMAHA 23II</a></h3>
                                        <div class="boat-make">YAMAHA</div>
                                        <div class="boat-price">JPY17,894.00</div>
                                        <div class="boat-length"><span>Length: </span><span>31</span>
                                        </div>
                                        <div class="boat-location"><span>Location: </span><span>Shitogodake, Yakushima, Kumage District, Kagoshima, Japan</span>
                                        </div>
                                        <div class="boat-views-count pull-right"><span>0 views</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <div class="pagination" data-no-turbolink=""><span class="previous_page disabled">&#8592; Previous</span>  <em class="current">1</em>  <a rel="next" href="/boats?page=2">2</a>  <a href="/boats?page=3">3</a>  <a href="/boats?page=4">4</a>  <a href="/boats?page=5">5</a>  <a href="/boats?page=6">6</a>  <a class="next_page" rel="next" href="/boats?page=2">Next &#8594;</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    <div class="footer">
        <?php include'footer.php'?>
    </div>
</body>

</html>