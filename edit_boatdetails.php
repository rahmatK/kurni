<?php include 'checksession_user.php'?>
<?php include 'connector.php'?>
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
    <meta content="lvlpIhIMtM5FH0OQnayPQJkqBTYBnWcUHKi/IbkIA2Q=" name="csrf-token" />
    <script type="text/javascript">
        $(document).ready(function () {
            var search = JSON.parse("[{\"id\":20,\"label\":\"SANO\",\"value\":\"SANO\"},{\"id\":20,\"label\":\"?????\",\"value\":\"SANO\"},{\"id\":20,\"label\":\"22 RUNABOUT\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":\"22??????\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":1908,\"value\":1908},{\"id\":20,\"label\":\"Diesel\",\"value\":\"Diesel\"},{\"id\":20,\"label\":\"Itsukushima, Japan\",\"value\":\"Itsukushima, Japan\"},{\"id\":21,\"label\":\"YAMAHA\",\"value\":\"YAMAHA\"},{\"id\":21,\"label\":\"???\",\"value\":\"YAMAHA\"},{\"id\":21,\"label\":\"23\",\"value\":\"23\"},{\"id\":21,\"label\":2003,\"value\":2003},{\"id\":21,\"label\":\"Gasoline\",\"value\":\"Gasoline\"},{\"id\":21,\"label\":\"Miyamoto, Mimasaka, Okayama, Japan\",\"value\":\"Miyamoto, Mimasaka, Okayama, Japan\"},{\"id\":22,\"label\":\"23 RENAISSA\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":\"23????\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":2004,\"value\":2004},{\"id\":22,\"label\":\"Miyamoto, Funabashi, Chiba, Japan\",\"value\":\"Miyamoto, Funabashi, Chiba, Japan\"},{\"id\":23,\"label\":\"230SX\",\"value\":\"230SX\"},{\"id\":23,\"label\":1977,\"value\":1977},{\"id\":23,\"label\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\",\"value\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\"},{\"id\":24,\"label\":\"232 LIMITED\",\"value\":\"232 LIMITED\"},{\"id\":24,\"label\":1938,\"value\":1938},{\"id\":24,\"label\":\"Miyamotocho, Koshigaya, Saitama, Japan\",\"value\":\"Miyamotocho, Koshigaya, Saitama, Japan\"},{\"id\":25,\"label\":\"TOHATSU\",\"value\":\"TOHATSU\"},{\"id\":25,\"label\":\"????\",\"value\":\"TOHATSU\"},{\"id\":25,\"label\":\"23FT\",\"value\":\"23FT\"},{\"id\":25,\"label\":1975,\"value\":1975},{\"id\":25,\"label\":\"Kagawa-gun, Kagawa, Japan\",\"value\":\"Kagawa-gun, Kagawa, Japan\"},{\"id\":26,\"label\":\"23II\",\"value\":\"23II\"},{\"id\":26,\"label\":2012,\"value\":2012},{\"id\":26,\"label\":\"Ethanol\",\"value\":\"Ethanol\"},{\"id\":26,\"label\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\",\"value\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\"},{\"id\":27,\"label\":\"MIYAMA\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"???\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"24\",\"value\":\"24\"},{\"id\":27,\"label\":1926,\"value\":1926},{\"id\":27,\"label\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\",\"value\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\"},{\"id\":1,\"label\":\"11M CLASSIC BOAT\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":\"11M????????\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":1953,\"value\":1953},{\"id\":1,\"label\":\"Hokkaido Prefecture, Japan\",\"value\":\"Hokkaido Prefecture, Japan\"},{\"id\":2,\"label\":\"SUGAR RAY\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"??????\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"123 TOMBOY\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":\"123 ?????\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":1939,\"value\":1939},{\"id\":2,\"label\":\"Tohoku, Kamikita District, Aomori, Japan\",\"value\":\"Tohoku, Kamikita District, Aomori, Japan\"},{\"id\":3,\"label\":\"OKAMOTO\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"????\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"14\",\"value\":\"14\"},{\"id\":3,\"label\":1916,\"value\":1916},{\"id\":3,\"label\":\"Tohoku, Niiza, Saitama, Japan\",\"value\":\"Tohoku, Niiza, Saitama, Japan\"},{\"id\":4,\"label\":\"140 HAMMER HEAD E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":\"140 ???????E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":2000,\"value\":2000},{\"id\":4,\"label\":\"Misaki, Funabashi, Chiba, Japan\",\"value\":\"Misaki, Funabashi, Chiba, Japan\"},{\"id\":5,\"label\":\"140 HAMMER HEAD E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":\"140 ???????E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":1952,\"value\":1952},{\"id\":5,\"label\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\",\"value\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\"},{\"id\":6,\"label\":\"140 HAMMER HEAD E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":\"140 ???????E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":1995,\"value\":1995},{\"id\":6,\"label\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\",\"value\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\"},{\"id\":7,\"label\":\"140 HAMMER HEAD E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":\"140 ???????E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":1930,\"value\":1930},{\"id\":7,\"label\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\",\"value\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\"},{\"id\":8,\"label\":\"140 HAMMER HEAD T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":\"140 ???????T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":1957,\"value\":1957},{\"id\":8,\"label\":\"Aibara Iwamuracho, Ena, Gifu, Japan\",\"value\":\"Aibara Iwamuracho, Ena, Gifu, Japan\"},{\"id\":9,\"label\":\"15FT\",\"value\":\"15FT\"},{\"id\":9,\"label\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\",\"value\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\"},{\"id\":10,\"label\":\"SUNAGA\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"???\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"16F-5\",\"value\":\"16F-5\"},{\"id\":10,\"label\":1965,\"value\":1965},{\"id\":10,\"label\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\",\"value\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\"},{\"id\":11,\"label\":\"17F\",\"value\":\"17F\"},{\"id\":11,\"label\":1998,\"value\":1998},{\"id\":11,\"label\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\",\"value\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\"},{\"id\":12,\"label\":\"NISSAN\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"????\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"18\",\"value\":\"18\"},{\"id\":12,\"label\":1904,\"value\":1904},{\"id\":12,\"label\":\"Hiroo, Shibuya, Tokyo, Japan\",\"value\":\"Hiroo, Shibuya, Tokyo, Japan\"},{\"id\":13,\"label\":\"18M CUSTOM\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":\"18M????\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":1982,\"value\":1982},{\"id\":13,\"label\":\"Shibushi, Kagoshima, Japan\",\"value\":\"Shibushi, Kagoshima, Japan\"},{\"id\":14,\"label\":\"AKIPURA\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"????\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"19CD\",\"value\":\"19CD\"},{\"id\":14,\"label\":1914,\"value\":1914},{\"id\":14,\"label\":\"Shibuya, Tokyo, Japan\",\"value\":\"Shibuya, Tokyo, Japan\"},{\"id\":15,\"label\":\"ALLEX\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"?????\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"20SP\",\"value\":\"20SP\"},{\"id\":15,\"label\":1919,\"value\":1919},{\"id\":16,\"label\":\"21 C\",\"value\":\"21 C\"},{\"id\":16,\"label\":2007,\"value\":2007},{\"id\":16,\"label\":\"Iga, Mie, Japan\",\"value\":\"Iga, Mie, Japan\"},{\"id\":17,\"label\":\"212SS\",\"value\":\"212SS\"},{\"id\":17,\"label\":2009,\"value\":2009},{\"id\":17,\"label\":\"Koga, Ibaraki, Japan\",\"value\":\"Koga, Ibaraki, Japan\"},{\"id\":18,\"label\":\"212X\",\"value\":\"212X\"},{\"id\":18,\"label\":1996,\"value\":1996},{\"id\":18,\"label\":\"Koga, Fukuoka, Japan\",\"value\":\"Koga, Fukuoka, Japan\"},{\"id\":19,\"label\":\"21R\\u0026C\",\"value\":\"21R\\u0026C\"},{\"id\":19,\"label\":1937,\"value\":1937},{\"id\":19,\"label\":\"Koga, Yanagawa, Fukuoka, Japan\",\"value\":\"Koga, Yanagawa, Fukuoka, Japan\"},{\"id\":28,\"label\":\"SUZUKI\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":\"???\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":1956,\"value\":1956},{\"id\":28,\"label\":\"Nagoya, Aichi, Japan\",\"value\":\"Nagoya, Aichi, Japan\"},{\"id\":29,\"label\":1959,\"value\":1959},{\"id\":29,\"label\":\"Tokoname, Aichi, Japan\",\"value\":\"Tokoname, Aichi, Japan\"},{\"id\":30,\"label\":\"AOKI YACHT\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"?????\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"24 ALBATROSS GAFUKATTA\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":\"???24??????\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":2013,\"value\":2013},{\"id\":30,\"label\":\"Shogunnohigashi, Akita, Japan\",\"value\":\"Shogunnohigashi, Akita, Japan\"}]");
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
    
    <main id="content" role="main"
        <section class="content contentwrap">
            <div class="container" style="padding-left:0px; padding-right:0px;">
                <h1>Editing Boat</h1>
            </div>
            <div class="container content">
                <div class="col-md-4 col-sm-12 col-xs-12 sideleft">
                    <div class="left-list">
                        <ul class="left-ul">
                            <a href="edit_boatdetails.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li active">Boat Details</li>
                            </a>
                            <a href="edit_location.php?idboat=<?php echo "$_GET[idboat]";  ?>">
                                <li class="left-li">Location</li>
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
                <div class="col-md-8 col-sm-12 col-xs-12 contentright">Your list is 0.00% complete
                    <div class="percent-slider">
                        <div class="percentage" style="width: 0.00%"></div>
                    </div>
                    <div class="boat-details">
                        <form accept-charset="UTF-8" action="update_boatdetails.php" class="edit_boat" id="id" method="post">
                            <div style="display:none">
                                <input name="utf8" type="hidden" value="&#x2713;" />
                                <input name="_method" type="hidden" value="patch" />
                                <input name="authenticity_token" type="hidden" value="lvlpIhIMtM5FH0OQnayPQJkqBTYBnWcUHKi/IbkIA2Q=" />
                            </div>
                            <div class="form-title">Hull</div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_category">Category</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_category" name="category" placeholder="Example Powerboats" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_make">Make</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_make" name="make" placeholder="Manufacturer" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_model">Model</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_model" name="model" placeholder="Model" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_year">Year</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_year" name="year" placeholder="ex. 1996" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_size">Size</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_size" name="size" placeholder="ex. 27" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_material">Material</label>
                                <div class="form-group col-md-12">
                                    <select class="form-control" id="boat_hull_attributes_material" name="material">
                                        <option value="">Hull Material</option>
                                        <option value="aluminium">aluminium</option>
                                        <option value="FRP">FRP</option>
                                        <option value="">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_length">Length</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_length" name="length" placeholder="Length" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_beam">Beam</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_beam" name="beam" placeholder="Beam" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_hull_attributes_height">Height</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_hull_attributes_height" name="height" placeholder="Height" type="text" />
                                </div>
                            </div>
                            <input id="boat_hull_attributes_id" name="id" type="hidden" value="<?php echo $id;?>" />
                            <div class="form-title">Engine</div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_engine_type">Engine type</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_engine_type" name="enginetype" placeholder="Engine type" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_make">Make</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_make" name="enginemake" placeholder="Engine Manufacturer" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_model">Model</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_model" name="enginemodel" placeholder="Engine Model" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_fuel_type">Fuel type</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_fuel_type" name="fueltype" placeholder="Fuel type" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_horsepower">Horsepower</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_horsepower" name="horsepower" placeholder="Engine HP" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_hours">Hours</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_hours" name="hours" placeholder="Engine Hours " type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_number_of_engines">Number of engines</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_number_of_engines" name="numberofengines" placeholder="Number of Engines" type="text" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="boat_engine_attributes_condition">Condition</label>
                                <div class="form-group col-md-12">
                                    <input class="form-control" id="boat_engine_attributes_condition" name="condition" placeholder="Engine Condition" type="text" />
                                </div>
                            </div>
                            <input type="hidden" name="id" value="<?php echo "$_GET[idboat]";  ?>" />
                            <div class="form-group">
                                <a href="javascript:void(0)">
                                    <input class="def-button" name="commit" type="submit" value="Save And Next" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container text-right showback"><a class="test" href="/boats/32">Show</a><a class="test" href="/boats">Back</a>
            </div>
        </section>
    </main>
    <div class="footer">
        <?php include 'footer.php'?>
    </div>
</body>

</html>