<?php include 'checksession_user.php'?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>BoatFlow</title>
    <link data-turbolinks-track="true" href="css/application.css" media="all" rel="stylesheet" />
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&amp;amp;sensor=false"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/tags/markerclustererplus/2.0.14/src/markerclusterer_packed.js"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
    <script data-turbolinks-track="true" src="js/application-.js"></script>
    <meta content="authenticity_token" name="csrf-param" />
    <meta content="xGZQtqFDUi76djhWkFUl5nbBInrNKLdanSnSd+1IV3I=" name="csrf-token" />
    <script type="text/javascript">
        $(document).ready(function () {
            var search = JSON.parse("[{\"id\":1,\"label\":\"SANO\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"?????\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"11M CLASSIC BOAT\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":\"11M????????\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":1996,\"value\":1996},{\"id\":1,\"label\":\"Bensin\",\"value\":\"Bensin\"},{\"id\":1,\"label\":\"Hokkaido Prefecture, Japan\",\"value\":\"Hokkaido Prefecture, Japan\"},{\"id\":2,\"label\":\"SUGAR RAY\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"??????\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"123 TOMBOY\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":\"123??????\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":1912,\"value\":1912},{\"id\":2,\"label\":\"Tohoku, Kamikita District, Aomori, Japan\",\"value\":\"Tohoku, Kamikita District, Aomori, Japan\"},{\"id\":3,\"label\":\"OKAMOTO\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"????\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"14\",\"value\":\"14\"},{\"id\":3,\"label\":1945,\"value\":1945},{\"id\":3,\"label\":\"Tohoku, Niiza, Saitama, Japan\",\"value\":\"Tohoku, Niiza, Saitama, Japan\"},{\"id\":4,\"label\":\"140 HAMMER HEAD E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":\"140????????E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":1909,\"value\":1909},{\"id\":4,\"label\":\"Misaki, Funabashi, Chiba, Japan\",\"value\":\"Misaki, Funabashi, Chiba, Japan\"},{\"id\":5,\"label\":\"140 HAMMER HEAD E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":\"140????????E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":1906,\"value\":1906},{\"id\":5,\"label\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\",\"value\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\"},{\"id\":8,\"label\":\"140 HAMMER HEAD T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":\"140????????T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":1982,\"value\":1982},{\"id\":8,\"label\":\"Spiritus\",\"value\":\"Spiritus\"},{\"id\":8,\"label\":\"Aibara Iwamuracho, Ena, Gifu, Japan\",\"value\":\"Aibara Iwamuracho, Ena, Gifu, Japan\"},{\"id\":9,\"label\":\"YAMAHA\",\"value\":\"YAMAHA\"},{\"id\":9,\"label\":\"???\",\"value\":\"YAMAHA\"},{\"id\":9,\"label\":\"15FT\",\"value\":\"15FT\"},{\"id\":9,\"label\":1914,\"value\":1914},{\"id\":9,\"label\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\",\"value\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\"},{\"id\":10,\"label\":\"SUNAGA\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"???\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"16F-5\",\"value\":\"16F-5\"},{\"id\":10,\"label\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\",\"value\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\"},{\"id\":12,\"label\":\"NISSAN\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"????\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"18\",\"value\":\"18\"},{\"id\":12,\"label\":1922,\"value\":1922},{\"id\":12,\"label\":\"Hiroo, Shibuya, Tokyo, Japan\",\"value\":\"Hiroo, Shibuya, Tokyo, Japan\"},{\"id\":13,\"label\":\"18M CUSTOM\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":\"18M????\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":1987,\"value\":1987},{\"id\":13,\"label\":\"Shibushi, Kagoshima, Japan\",\"value\":\"Shibushi, Kagoshima, Japan\"},{\"id\":14,\"label\":\"AKIPURA\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"????\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"19CD\",\"value\":\"19CD\"},{\"id\":14,\"label\":1926,\"value\":1926},{\"id\":14,\"label\":\"Shibuya, Tokyo, Japan\",\"value\":\"Shibuya, Tokyo, Japan\"},{\"id\":16,\"label\":\"21 C\",\"value\":\"21 C\"},{\"id\":16,\"label\":\"Solar\",\"value\":\"Solar\"},{\"id\":16,\"label\":\"Iga, Mie, Japan\",\"value\":\"Iga, Mie, Japan\"},{\"id\":17,\"label\":\"212SS\",\"value\":\"212SS\"},{\"id\":17,\"label\":2004,\"value\":2004},{\"id\":17,\"label\":\"Koga, Ibaraki, Japan\",\"value\":\"Koga, Ibaraki, Japan\"},{\"id\":18,\"label\":\"212X\",\"value\":\"212X\"},{\"id\":18,\"label\":1943,\"value\":1943},{\"id\":18,\"label\":\"Koga, Fukuoka, Japan\",\"value\":\"Koga, Fukuoka, Japan\"},{\"id\":20,\"label\":\"22 RUNABOUT\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":\"22??????\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":1997,\"value\":1997},{\"id\":20,\"label\":\"Itsukushima, Japan\",\"value\":\"Itsukushima, Japan\"},{\"id\":21,\"label\":\"23\",\"value\":\"23\"},{\"id\":21,\"label\":1911,\"value\":1911},{\"id\":21,\"label\":\"Miyamoto, Mimasaka, Okayama, Japan\",\"value\":\"Miyamoto, Mimasaka, Okayama, Japan\"},{\"id\":22,\"label\":\"23 RENAISSA\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":\"23????\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":1950,\"value\":1950},{\"id\":22,\"label\":\"Miyamoto, Funabashi, Chiba, Japan\",\"value\":\"Miyamoto, Funabashi, Chiba, Japan\"},{\"id\":24,\"label\":\"232 LIMITED\",\"value\":\"232 LIMITED\"},{\"id\":24,\"label\":1971,\"value\":1971},{\"id\":24,\"label\":\"Miyamotocho, Koshigaya, Saitama, Japan\",\"value\":\"Miyamotocho, Koshigaya, Saitama, Japan\"},{\"id\":25,\"label\":\"TOHATSU\",\"value\":\"TOHATSU\"},{\"id\":25,\"label\":\"????\",\"value\":\"TOHATSU\"},{\"id\":25,\"label\":\"23FT\",\"value\":\"23FT\"},{\"id\":25,\"label\":1984,\"value\":1984},{\"id\":25,\"label\":\"Kagawa-gun, Kagawa, Japan\",\"value\":\"Kagawa-gun, Kagawa, Japan\"},{\"id\":26,\"label\":\"23II\",\"value\":\"23II\"},{\"id\":26,\"label\":1992,\"value\":1992},{\"id\":26,\"label\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\",\"value\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\"},{\"id\":6,\"label\":\"140 HAMMER HEAD E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":\"140????????E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":1980,\"value\":1980},{\"id\":6,\"label\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\",\"value\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\"},{\"id\":7,\"label\":\"140 HAMMER HEAD E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":\"140????????E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":1921,\"value\":1921},{\"id\":7,\"label\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\",\"value\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\"},{\"id\":11,\"label\":\"17F\",\"value\":\"17F\"},{\"id\":11,\"label\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\",\"value\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\"},{\"id\":15,\"label\":\"ALLEX\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"?????\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"20SP\",\"value\":\"20SP\"},{\"id\":15,\"label\":1979,\"value\":1979},{\"id\":19,\"label\":\"21R\\u0026C\",\"value\":\"21R\\u0026C\"},{\"id\":19,\"label\":1936,\"value\":1936},{\"id\":19,\"label\":\"Koga, Yanagawa, Fukuoka, Japan\",\"value\":\"Koga, Yanagawa, Fukuoka, Japan\"},{\"id\":23,\"label\":\"230SX\",\"value\":\"230SX\"},{\"id\":23,\"label\":1944,\"value\":1944},{\"id\":23,\"label\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\",\"value\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\"},{\"id\":27,\"label\":\"MIYAMA\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"???\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"24\",\"value\":\"24\"},{\"id\":27,\"label\":1963,\"value\":1963},{\"id\":27,\"label\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\",\"value\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\"},{\"id\":29,\"label\":1952,\"value\":1952},{\"id\":29,\"label\":\"Tokoname, Aichi, Japan\",\"value\":\"Tokoname, Aichi, Japan\"},{\"id\":30,\"label\":\"AOKI YACHT\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"?????\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"24 ALBATROSS GAFUKATTA\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":\"???24??????\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":1986,\"value\":1986},{\"id\":30,\"label\":\"Shogunnohigashi, Akita, Japan\",\"value\":\"Shogunnohigashi, Akita, Japan\"},{\"id\":28,\"label\":\"SUZUKI\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":\"???\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":1981,\"value\":1981},{\"id\":28,\"label\":\"Nagoya, Aichi, Japan\",\"value\":\"Nagoya, Aichi, Japan\"}]");
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
        <section class="content contentwrap">
            <div class="container" style="padding-left:0px; padding-right:0px;">
                <h1>Editing Boat</h1>
            </div>
            <div class="container content">
                <div class="col-md-4 col-sm-12 col-xs-12 sideleft">
                    <div class="left-list">
                        <ul class="left-ul">
                            <a href="edit_boatdetails.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li">Boat Details</li>
                            </a>
                            <a href="edit_location.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li active">Location</li>
                            </a>
                            <a href="edit_description.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li">Description &amp; Pricing</li>
                            </a>
                            <a href="edit_photos.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li">Photos</li>
                            </a>
                            <a href="edit_contact.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li">Contact Details</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12 contentright">Your list is 33.33% complete
                    <div class="percent-slider">
                        <div class="percentage" style="width: 33.33%"></div>
                    </div>
                    <script type="text/javascript">
                        $(document).ready(function () {

                            $('select').chosen();
                            $('#boat_location_location_type').change(function () {
                                if ($('#boat_location_location_type').val().indexOf('Marina') >= 0) {
                                    $('#location_name').show();
                                } else {
                                    $('#location_name').hide();
                                }
                            });
                            var geocoder;
                            var map;
                            geocoder = new google.maps.Geocoder();
                            var latlng = new google.maps.LatLng(36.204824, 138.252924);
                            var mapOptions = {
                                mapTypeControlOptions: {
                                    mapTypeIds: [google.maps.MapTypeId.ROADMAP]
                                },
                                mapTypeControl: false,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.LARGE
                                },
                                zoom: 6,
                                center: latlng,
                                streetViewControl: false

                            };
                            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                            var input = /** @type {HTMLInputElement} */ (
                                document.getElementById('formatted_address'));

                            //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
                            var autocompleteOptions = {
                                componentRestrictions: {
                                    country: 'jp'
                                }
                            };
                            var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
                            autocomplete.bindTo('bounds', map);
                            var infowindow = new google.maps.InfoWindow();
                            var marker = new google.maps.Marker({
                                map: map,
                                anchorPoint: new google.maps.Point(0, -29),
                                draggable: true
                            });
                            if ($('#boat_location_attributes_latitude').val() && $('#boat_location_attributes_longitude').val()) {
                                var latLng = new google.maps.LatLng($('#boat_location_attributes_latitude').val(), $('#boat_location_attributes_longitude').val())
                                marker.setPosition(latLng);
                                map.setZoom(13);
                                map.setCenter(latLng);
                                console.log('boat_location_attrubutes_latitude & boat_location_attrubutes_latitude not empty');
                            }



                            google.maps.event.addListener(map, 'click', function (event) {
                                marker.setPosition(event.latLng);
                                geocodePosition(event.latLng);

                            });
                            google.maps.event.addListener(marker, 'dragend', function (event) {
                                geocodePosition(marker.getPosition());
                            });

                            function geocodePosition(pos) {
                                geocoder = new google.maps.Geocoder();
                                geocoder.geocode({
                                    latLng: pos
                                }, function (results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        fillInAddress(results[0]);
                                        document.getElementById('formatted_address').value = results[0].formatted_address;
                                        map.setZoom(13);
                                        map.setCenter(pos);
                                    } else {
                                        $("#map-error-message").html('Cannot determine address at this location.' + status).show(100);
                                    }
                                });
                            }

                            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                                console.log('place_changed is triggered');
                                infowindow.close();
                                marker.setVisible(false);
                                var place = autocomplete.getPlace();


                                if (!place.geometry) {
                                    codeAddress(place.name);
                                }

                                // If the place has a geometry, then present it on a map.
                                if (place.geometry) {
                                    geocodePosition(place.geometry.location);
                                    if (place.geometry.viewport) {
                                        map.fitBounds(place.geometry.viewport);
                                    } else {
                                        map.setCenter(place.geometry.location);
                                        map.setZoom(13);
                                    }
                                    /*marker.setIcon(({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));*/
                                    marker.setPosition(place.geometry.location);
                                    marker.setVisible(true);


                                }

                            });
                            var componentForm = {
                                street_number: 'long_name',
                                route: 'long_name',
                                locality: 'long_name',
                                administrative_area_level_1: 'long_name',
                                country: 'long_name',
                                postal_code: 'long_name'
                            };

                            function fillInAddress(result) {

                                for (var component in componentForm) {
                                    document.getElementById(component).value = '';
                                    document.getElementById(component).disabled = false;
                                }

                                // Get each component of the address from the place details
                                // and fill the corresponding field on the form.
                                for (var i = 0; i < result.address_components.length; i++) {
                                    var addressType = result.address_components[i].types[0];
                                    if (componentForm[addressType]) {
                                        var val = result.address_components[i][componentForm[addressType]];
                                        document.getElementById(addressType).value = val;
                                    }
                                }
                                document.getElementById('boat_location_attributes_latitude').value = result.geometry.location.lat();
                                document.getElementById('boat_location_attributes_longitude').value = result.geometry.location.lng();
                                //document.getElementById('formatted_address').value = result.formatted_address;
                            }
                            $('input').click(function () {
                                $(this).select();
                            });

                            $('#formatted_address').keypress(function (e) {
                                if (e.which == 13) {
                                    e.preventDefault();
                                    codeAddress($(this).val());
                                }
                            });

                            function codeAddress(address) {
                                geocoder.geocode({
                                    'address': address
                                }, function (results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        fillInAddress(results[0]);
                                        map.setCenter(results[0].geometry.location);
                                        map.setZoom(13); // Why 17? Because it looks good.
                                        marker.setPosition(results[0].geometry.location);
                                        marker.setVisible(true);
                                    } else {
                                        $("#map-error-message").html('Cannot determine address at this location.' + status).show().delay(3000).fadeOut();
                                    }
                                });
                            }
                        });
                    </script>
                    <br />
                    <form accept-charset="UTF-8" action="update_boatlocation.php" class="form-horizontal" id="edit_boat_52" method="post">
                        <div style="display:none">
                            <input name="utf8" type="hidden" value="&#x2713;" />
                            <input name="_method" type="hidden" value="patch" />
                            <input name="authenticity_token" type="hidden" value="xGZQtqFDUi76djhWkFUl5nbBInrNKLdanSnSd+1IV3I=" />
                        </div>
                        <div class="boat-details">
                            <div class="col-md-12">
                                <label>Location type</label>
                                <div class="form-group col-md-12">
                                    <div class="controls"></div>
                                    <select class="form-control" id="boat_location_attributes_location_type" name="boat[location_attributes][location_type]">
                                        <option value=""></option>
                                        <option value="Marina slip">Marina slip</option>
                                        <option value="Marina dry storage">Marina dry storage</option>
                                        <option value="Marina rack storage">Marina rack storage</option>
                                        <option value="Marina mooring">Marina mooring</option>
                                        <option value="Residence trailer">Residence trailer</option>
                                        <option value="Residence slip">Residence slip</option>
                                        <option value="Residence mooring">Residence mooring</option>
                                        <option value="Storage facility">Storage facility</option>
                                        <option value="Storage trailer">Storage trailer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label>Location Address</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="formatted_address" name="boat[location_attributes][formatted_address]" placeholder="Enter address here" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div id="map-canvas" style="width: 100%; height: 300px; margin-top: 20px;"></div>
                                <div id="map-error-message" style="display: none;"></div>
                                <div id="map-fields">
                                    <input id="boat_location_attributes_latitude" name="boat[location_attributes][latitude]" type="hidden" />
                                    <input id="boat_location_attributes_longitude" name="boat[location_attributes][longitude]" type="hidden" />
                                    <input id="street_number" name="boat[location_attributes][street_number]" type="hidden" />
                                    <input id="route" name="boat[location_attributes][route]" type="hidden" />
                                    <input id="locality" name="boat[location_attributes][locality]" type="hidden" />
                                    <input id="administrative_area_level_1" name="boat[location_attributes][state]" type="hidden" />
                                    <input id="postal_code" name="boat[location_attributes][postal_code]" type="hidden" />
                                    <input id="country" name="boat[location_attributes][country]" type="hidden" />
                                </div>
                                <div class="form-group">
                                    <a href="javascript:void(0)">
                                        <input class="def-button" type="submit" value="Save And Next" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <input id="boat_location_attributes_id" name="boat[location_attributes][id]" type="hidden" value="53" />
                    </form>
                </div>
            </div>
            <div class="container text-right showback"><a class="test" href="/boats/52">Show</a><a class="test" href="/boats">Back</a>
            </div>
        </section>
    </main>
    <div class="footer">
        <?php include 'footer.php'?>
    </div>
</body>

</html>