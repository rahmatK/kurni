<!DOCTYPE html>
<html lang="en">

<head>
    <title>BoatFlow</title>
    <link data-turbolinks-track="true" href="/assets/application-538a517f3d111f703586ad674a236036.css" media="all" rel="stylesheet" />
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&amp;amp;sensor=false"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/tags/markerclustererplus/2.0.14/src/markerclusterer_packed.js"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
    <script data-turbolinks-track="true" src="/assets/application-9a8c11b859a00cbbcf605671e19e0354.js"></script>
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
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="overflow: visible;">
        <div class="navbar-header">
            <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <div class="sec-left"><a class="navbar-brand" href="/"> Boatflow</a>
            </div>
            <div class="sec-center">
                <form accept-charset="UTF-8" action="/boats" class="navbar-form navbar-left top-form-search" id="filterrific_filter" method="get">
                    <div style="display:none">
                        <input name="utf8" type="hidden" value="&#x2713;" />
                    </div>
                    <div class="input-group">
                        <input class="form-control filterrific-periodically-observed" id="search" name="filterrific[search_query]" placeholder="Search by: Location, Make, Model, Year, Engine Fuel" type="text" /><span class="input-group-addon glyphicon glyphicon-search"></span>
                    </div>
                </form>
            </div>
            <div class="sec-right">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <li><a><span class="glyphicon glyphicon-bell"></span><span class="badge">5</span></a>
                        </li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span><span class="header-firstname">tes</span><b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="/users/10">Dashboard</a>
                                </li>
                                <li><a href="#">My Boats</a>
                                </li>
                                <li><a href="#">Inbox</a>
                                </li>
                                <li><a href="/users/edit">Account</a>
                                </li>
                                <li><a data-method="delete" href="/users/sign_out" rel="nofollow">Sign Out</a>
                                </li>
                            </ul>
                        </li>
                    </li>
                    <li class="nav-button">
                        <a href="/boats/new">
                            <div class="def-button">List Your Boat</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <main id="content" role="main">
        <section class="content contentwrap">
            <div class="container" style="padding-left:0px; padding-right:0px;">
                <h1>Editing Boat</h1>
            </div>
            <div class="container content">
                <div class="col-md-4 col-sm-12 col-xs-12 sideleft">
                    <div class="left-list">
                        <ul class="left-ul">
                            <a href="?form=details">
                                <li class="left-li">Boat Details</li>
                            </a>
                            <a href="?form=location">
                                <li class="left-li">Location</li>
                            </a>
                            <a href="?form=pricing">
                                <li class="left-li active">Pricing</li>
                            </a>
                            <a href="?form=photos">
                                <li class="left-li">Photos</li>
                            </a>
                            <a href="?form=description">
                                <li class="left-li">Description</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12 contentright">Your list is 33.33% complete
                    <div class="percent-slider">
                        <div class="percentage" style="width: 33.33%"></div>
                    </div>
                    <div class="boat-details">
                        <div class="form-title">Hull</div>
                        <div class="col-md-12">
                            <label style="margin-bottom:10px;">Equipment</label>
                            <div class="form-group col-md-12">
                                <button class="btn btn-warning labelbtn" type="button">GPS</button>
                                <button class="btn btn-warning labelbtn" type="button">Generator</button>
                                <button class="btn btn-warning labelbtn" type="button">Fishfinder</button>
                                <button class="btn btn-success labelbtn" type="button">Air Conditioner</button>
                                <button class="btn btn-success labelbtn" type="button">Radar</button>
                                <button class="btn btn-warning labelbtn" type="button">Hot Water Success</button>
                                <button class="btn btn-warning labelbtn" type="button">Windlass</button>
                                <button class="btn btn-warning labelbtn" type="button">Refrigator</button>
                                <button class="btn btn-warning labelbtn" type="button">Anchor</button>
                                <button class="btn btn-warning labelbtn" type="button">Microwave oven</button>
                                <button class="btn btn-warning labelbtn" type="button">Head</button>
                                <button class="btn btn-warning labelbtn" type="button">Galley</button>
                                <button class="btn btn-warning labelbtn" type="button">Shower</button>
                                <button class="btn btn-success labelbtn" type="button">Autopilot</button>
                                <button class="btn btn-warning labelbtn" type="button">Livewel</button>
                                <button class="btn btn-warning labelbtn" type="button">Stereo</button>
                                <button class="btn btn-warning labelbtn" type="button">Outriggers</button>
                                <button class="btn btn-warning labelbtn" type="button">Trailer</button>
                                <button class="btn btn-warning labelbtn" type="button">Rod holders</button>
                                <button class="btn btn-success labelbtn" type="button">Auxiliary engine</button>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label>Description</label>
                            <div class="form-group col-md-12">
                                <textarea class="form-control" placeholder="Describe Your Boat here"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label>Listing Price</label>
                            <div class="form-group col-md-12">
                                <input class="form-control" placeholder="Manufacter" type="text" value="$20.000" />
                            </div>
                        </div>
                        <div class="form-group">
                            <a href="javascript:void(0)">
                                <input class="def-button" type="submit" value="Save And Next" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-right showback"><a class="test" href="/boats/52">Show</a><a class="test" href="/boats">Back</a>
            </div>
        </section>
    </main>
    <div class="footer">
        <div class="container">
            <div class="col-md-2">
                <ul class="footer-ul">
                    <li>
                        <h3>Boatfloat</h3>
                    </li>
                    <li><a href="#"> Join Now</a>
                    </li>
                    <li><a href="#Services"> Sign In</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul class="footer-ul">
                    <li>
                        <h3>Latest Post</h3>
                    </li>
                    <li class="blog-list">
                        <a href="#about">
                            <div class="col-md-2 img">
                                <img src="http://placehold.it/40x40" />
                            </div>
                            <div class="col-md-10 title">Lorem ipsum dolor et, consectetur adipiscing eli.</div>
                        </a>
                    </li>
                    <li class="blog-list">
                        <a href="#about">
                            <div class="col-md-2 img">
                                <img src="http://placehold.it/40x40" />
                            </div>
                            <div class="col-md-10 title">Lorem ipsum dolor et, consectetur adipiscing eli.</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="footer-ul">
                    <li>
                        <h3>Company</h3>
                    </li>
                    <li class="address-list"><a href="#about"> Addres : 1234 Street Name, City Name, Egypt</a>
                    </li>
                    <li class="address-list"><a href="#Services"> Phone Number: +01 234 567 890</a>
                    </li>
                    <li class="address-list"><a href="#contact"> Email: company@company.com</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="footer-ul">
                    <li>
                        <h3>Company</h3>
                    </li>
                    <li>
                        <p>Join our mailing list to stay up to date and get notices about our new releases!</p>
                    </li>
                    <li class="social-icons-wrap">
                        <div class="social-icons"><a href="https://www.facebook.com/BoatFlow"><i class="fa fa-facebook"></i></a><a href="https://twitter.com/BoatFlowJP"><i class="fa fa-twitter"></i></a><a href="https://plus.google.com/u/0/109414330939041192146"><i class="fa fa-google-plus"></i></a><a href="https://www.youtube.com/user/BoatFlowJP"><i class="fa fa-youtube"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>