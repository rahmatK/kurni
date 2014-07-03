<?php include 'checksession_user.php'?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>BoatFlow</title>
    <link data-turbolinks-track="true" href="css/application.css" media="all" rel="stylesheet" />
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&amp;amp;sensor=false"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/tags/markerclustererplus/2.0.14/src/markerclusterer_packed.js"></script>
    <script src="//google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
    <script data-turbolinks-track="true" src="css/application.js"></script>
    <meta content="authenticity_token" name="csrf-param" />
    <meta content="n6A+EKWG8oddHbaPBrm1Zvz60Cf6Uw5rVKTuJtC7IbU=" name="csrf-token" />
    <script type="text/javascript">
        $(document).ready(function () {
            var search = JSON.parse("[{\"id\":29,\"label\":\"YAMAHA\",\"value\":\"YAMAHA\"},{\"id\":29,\"label\":\"???\",\"value\":\"YAMAHA\"},{\"id\":29,\"label\":\"24\",\"value\":\"24\"},{\"id\":29,\"label\":2003,\"value\":2003},{\"id\":29,\"label\":\"Diesel\",\"value\":\"Diesel\"},{\"id\":29,\"label\":\"Hokkaido Prefecture, Japan\",\"value\":\"Hokkaido Prefecture, Japan\"},{\"id\":30,\"label\":\"AOKI YACHT\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"?????\",\"value\":\"AOKI YACHT\"},{\"id\":30,\"label\":\"24 ALBATROSS GAFUKATTA\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":\"???24??????\",\"value\":\"24 ALBATROSS GAFUKATTA\"},{\"id\":30,\"label\":1937,\"value\":1937},{\"id\":30,\"label\":\"Tohoku, Kamikita District, Aomori, Japan\",\"value\":\"Tohoku, Kamikita District, Aomori, Japan\"},{\"id\":1,\"label\":\"SANO\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"?????\",\"value\":\"SANO\"},{\"id\":1,\"label\":\"11M CLASSIC BOAT\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":\"11M????????\",\"value\":\"11M CLASSIC BOAT\"},{\"id\":1,\"label\":1933,\"value\":1933},{\"id\":1,\"label\":\"Gasoline\",\"value\":\"Gasoline\"},{\"id\":1,\"label\":\"Tohoku, Niiza, Saitama, Japan\",\"value\":\"Tohoku, Niiza, Saitama, Japan\"},{\"id\":2,\"label\":\"SUGAR RAY\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"??????\",\"value\":\"SUGAR RAY\"},{\"id\":2,\"label\":\"123 TOMBOY\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":\"123??????\",\"value\":\"123 TOMBOY\"},{\"id\":2,\"label\":1971,\"value\":1971},{\"id\":2,\"label\":\"Ethanol\",\"value\":\"Ethanol\"},{\"id\":2,\"label\":\"Misaki, Funabashi, Chiba, Japan\",\"value\":\"Misaki, Funabashi, Chiba, Japan\"},{\"id\":3,\"label\":\"OKAMOTO\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"????\",\"value\":\"OKAMOTO\"},{\"id\":3,\"label\":\"14\",\"value\":\"14\"},{\"id\":3,\"label\":1994,\"value\":1994},{\"id\":3,\"label\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\",\"value\":\"Kanto Osaka, Itano, Itano District, Tokushima, Japan\"},{\"id\":4,\"label\":\"140 HAMMER HEAD E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":\"140????????E-40M\",\"value\":\"140 HAMMER HEAD E-40M\"},{\"id\":4,\"label\":1957,\"value\":1957},{\"id\":4,\"label\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\",\"value\":\"Tohoku Kajika, Kakuda, Miyagi, Japan\"},{\"id\":5,\"label\":\"140 HAMMER HEAD E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":\"140????????E-40MT\",\"value\":\"140 HAMMER HEAD E-40MT\"},{\"id\":5,\"label\":1927,\"value\":1927},{\"id\":5,\"label\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\",\"value\":\"Chubu Takaokahonmachi, Toyota, Aichi, Japan\"},{\"id\":6,\"label\":\"140 HAMMER HEAD E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":\"140????????E-50S\",\"value\":\"140 HAMMER HEAD E-50S\"},{\"id\":6,\"label\":2011,\"value\":2011},{\"id\":6,\"label\":\"Aibara Iwamuracho, Ena, Gifu, Japan\",\"value\":\"Aibara Iwamuracho, Ena, Gifu, Japan\"},{\"id\":7,\"label\":\"140 HAMMER HEAD E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":\"140????????E-50ST\",\"value\":\"140 HAMMER HEAD E-50ST\"},{\"id\":7,\"label\":1906,\"value\":1906},{\"id\":7,\"label\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\",\"value\":\"Kansai Kawaragi, Hachinohe, Aomori, Japan\"},{\"id\":8,\"label\":\"140 HAMMER HEAD T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":\"140????????T-PAC\",\"value\":\"140 HAMMER HEAD T-PAC\"},{\"id\":8,\"label\":1975,\"value\":1975},{\"id\":8,\"label\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\",\"value\":\"1 Senshukukokita, Izumisano, Osaka Prefecture, Japan\"},{\"id\":9,\"label\":\"15FT\",\"value\":\"15FT\"},{\"id\":9,\"label\":1939,\"value\":1939},{\"id\":9,\"label\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\",\"value\":\"Hirobentenbashicho, Kure, Hiroshima, Japan\"},{\"id\":10,\"label\":\"SUNAGA\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"???\",\"value\":\"SUNAGA\"},{\"id\":10,\"label\":\"16F-5\",\"value\":\"16F-5\"},{\"id\":10,\"label\":1914,\"value\":1914},{\"id\":10,\"label\":\"Hiroo, Shibuya, Tokyo, Japan\",\"value\":\"Hiroo, Shibuya, Tokyo, Japan\"},{\"id\":11,\"label\":\"TOHATSU\",\"value\":\"TOHATSU\"},{\"id\":11,\"label\":\"????\",\"value\":\"TOHATSU\"},{\"id\":11,\"label\":\"17F\",\"value\":\"17F\"},{\"id\":11,\"label\":1935,\"value\":1935},{\"id\":11,\"label\":\"Shibushi, Kagoshima, Japan\",\"value\":\"Shibushi, Kagoshima, Japan\"},{\"id\":12,\"label\":\"NISSAN\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"????\",\"value\":\"NISSAN\"},{\"id\":12,\"label\":\"18\",\"value\":\"18\"},{\"id\":12,\"label\":\"Shibuya, Tokyo, Japan\",\"value\":\"Shibuya, Tokyo, Japan\"},{\"id\":13,\"label\":\"18M CUSTOM\",\"value\":\"18M CUSTOM\"},{\"id\":13,\"label\":\"18M????\",\"value\":\"18M CUSTOM\"},{\"id\":14,\"label\":\"AKIPURA\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"????\",\"value\":\"AKIPURA\"},{\"id\":14,\"label\":\"19CD\",\"value\":\"19CD\"},{\"id\":14,\"label\":1922,\"value\":1922},{\"id\":14,\"label\":\"Iga, Mie, Japan\",\"value\":\"Iga, Mie, Japan\"},{\"id\":15,\"label\":\"ALLEX\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"?????\",\"value\":\"ALLEX\"},{\"id\":15,\"label\":\"20SP\",\"value\":\"20SP\"},{\"id\":15,\"label\":1913,\"value\":1913},{\"id\":15,\"label\":\"Koga, Ibaraki, Japan\",\"value\":\"Koga, Ibaraki, Japan\"},{\"id\":16,\"label\":\"21 C\",\"value\":\"21 C\"},{\"id\":16,\"label\":1931,\"value\":1931},{\"id\":16,\"label\":\"Koga, Fukuoka, Japan\",\"value\":\"Koga, Fukuoka, Japan\"},{\"id\":17,\"label\":\"212SS\",\"value\":\"212SS\"},{\"id\":17,\"label\":\"Koga, Yanagawa, Fukuoka, Japan\",\"value\":\"Koga, Yanagawa, Fukuoka, Japan\"},{\"id\":18,\"label\":\"212X\",\"value\":\"212X\"},{\"id\":18,\"label\":1960,\"value\":1960},{\"id\":18,\"label\":\"Itsukushima, Japan\",\"value\":\"Itsukushima, Japan\"},{\"id\":19,\"label\":\"21R\\u0026C\",\"value\":\"21R\\u0026C\"},{\"id\":19,\"label\":1991,\"value\":1991},{\"id\":19,\"label\":\"Miyamoto, Mimasaka, Okayama, Japan\",\"value\":\"Miyamoto, Mimasaka, Okayama, Japan\"},{\"id\":20,\"label\":\"22 RUNABOUT\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":\"22??????\",\"value\":\"22 RUNABOUT\"},{\"id\":20,\"label\":1993,\"value\":1993},{\"id\":20,\"label\":\"Miyamoto, Funabashi, Chiba, Japan\",\"value\":\"Miyamoto, Funabashi, Chiba, Japan\"},{\"id\":21,\"label\":\"23\",\"value\":\"23\"},{\"id\":21,\"label\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\",\"value\":\"Miyamotocho, Minami Ward, Yokohama, Kanagawa, Japan\"},{\"id\":22,\"label\":\"23 RENAISSA\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":\"23????\",\"value\":\"23 RENAISSA\"},{\"id\":22,\"label\":2004,\"value\":2004},{\"id\":22,\"label\":\"Miyamotocho, Koshigaya, Saitama, Japan\",\"value\":\"Miyamotocho, Koshigaya, Saitama, Japan\"},{\"id\":23,\"label\":\"230SX\",\"value\":\"230SX\"},{\"id\":23,\"label\":\"Kagawa-gun, Kagawa, Japan\",\"value\":\"Kagawa-gun, Kagawa, Japan\"},{\"id\":24,\"label\":\"232 LIMITED\",\"value\":\"232 LIMITED\"},{\"id\":24,\"label\":1928,\"value\":1928},{\"id\":24,\"label\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\",\"value\":\"Shitogodake, Yakushima, Kumage District, Kagoshima, Japan\"},{\"id\":25,\"label\":\"23FT\",\"value\":\"23FT\"},{\"id\":25,\"label\":2014,\"value\":2014},{\"id\":25,\"label\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\",\"value\":\"Shiotomecho, Minato Ward, Nagoya, Aichi, Japan\"},{\"id\":26,\"label\":\"23II\",\"value\":\"23II\"},{\"id\":26,\"label\":1989,\"value\":1989},{\"id\":26,\"label\":\"Nagoya, Aichi, Japan\",\"value\":\"Nagoya, Aichi, Japan\"},{\"id\":27,\"label\":\"MIYAMA\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"???\",\"value\":\"MIYAMA\"},{\"id\":27,\"label\":\"Tokoname, Aichi, Japan\",\"value\":\"Tokoname, Aichi, Japan\"},{\"id\":28,\"label\":\"SUZUKI\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":\"???\",\"value\":\"SUZUKI\"},{\"id\":28,\"label\":\"Shogunnohigashi, Akita, Japan\",\"value\":\"Shogunnohigashi, Akita, Japan\"}]");
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
            $(".owl-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        });
    </script>
</head>

<body>
    
    <main id="content" role="main">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                    <header class="panel-header">
                        <h2 class="text-center">Edit User</h2>
                    </header>
                    <div class="panel">
                        <form accept-charset="UTF-8" action="/users" class="edit_user" data-parsley-validate="" id="edit_user" method="post">
                            <div style="display:none">
                                <input name="utf8" type="hidden" value="&#x2713;" />
                                <input name="_method" type="hidden" value="put" />
                                <input name="authenticity_token" type="hidden" value="n6A+EKWG8oddHbaPBrm1Zvz60Cf6Uw5rVKTuJtC7IbU=" />
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="user_first_name">First name</label>
                                    <br />
                                    <input autofocus="autofocus" class="form-control" id="user_first_name" name="user[first_name]" required="required" type="text" value="tes" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="user_last_name">Last name</label>
                                    <br />
                                    <input class="form-control" id="user_last_name" name="user[last_name]" required="required" type="text" value="tes" />
                                </div>
                                <div class="form-group col-sm-12">
                                    <label for="user_email">Email</label>
                                    <br />
                                    <input autofocus="autofocus" class="form-control" data-parsley-trigger="change" id="user_email" name="user[email]" required="required" type="email" value="tes@tes.com" />
                                </div>
                                <div class="form-group col-sm-12">
                                    <label for="user_password">Password</label><i>(leave blank if you don't want to change it)</i>
                                    <br />
                                    <input autocomplete="off" class="form-control" data-parsley-min="8" data-parsley-trigger="change" id="user_password" name="user[password]" type="password" />
                                </div>
                                <div class="form-group col-sm-12">
                                    <label for="user_password_confirmation">Password confirmation</label>
                                    <br />
                                    <input autocomplete="off" class="form-control" data-parsley-equalto="#user_password" data-parsley-trigger="change" id="user_password_confirmation" name="user[password_confirmation]" required="required" type="password" />
                                </div>
                                <div class="form-group col-sm-12">
                                    <label for="user_current_password">Current password</label><i>(we need your current password to confirm your changes)</i>
                                    <br />
                                    <input autocomplete="off" class="form-control" id="user_current_password" name="user[current_password]" type="password" />
                                </div>
                                <div class="form-group col-sm-12">
                                    <input class="btn btn-default btn-primary btn-sm form-control" name="commit" type="submit" value="Update" />
                                </div>
                            </div>
                            <h3 class="text-center">Cancel my account</h3>
                            <p class="text-center">Unhappy?
                                <form action="/users" class="button_to" method="post">
                                    <div>
                                        <input name="_method" type="hidden" value="delete" />
                                        <input class="btn btn-default btn-danger btn-sm form-control" data-confirm="Are you sure?" type="submit" value="Cancel my account" />
                                        <input name="authenticity_token" type="hidden" value="n6A+EKWG8oddHbaPBrm1Zvz60Cf6Uw5rVKTuJtC7IbU=" />
                                    </div>
                                </form>
                            </p><a href="http://boatflow.herokuapp.com/">Back</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="footer">
        <?php include'footer.php'?>
    </div>
    </body>

</html>