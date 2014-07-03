<?php
    $id=$_SESSION['id'];
					include "connector.php";
					$query="SELECT * FROM user where iduser='$id'";
					$hasil=mysql_query($query, $id_mysql);
					while ($record=mysql_fetch_row($hasil))
					{
						$name=$record[1];}
                        ?>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="overflow: visible;">
    <div class="navbar-header">
        <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse">
        <div class="sec-left"><a class="navbar-brand" href="index.php"> Boatflow</a>
        </div>
        <div class="sec-center">
            <form accept-charset="UTF-8" action="" class="navbar-form navbar-left top-form-search" id="filterrific_filter" method="get">
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
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span><span class="header-firstname"><?php echo "$name";?></span><b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Dashboard</a>
                            </li>
                            <li><a href="#">My Boats</a>
                            </li>
                            <li><a href="#">Inbox</a>
                            </li>
                            <li><a href="#">Account</a>
                            </li>
                            <li><a data-method="delete" href="logout.php" rel="nofollow">Sign Out</a>
                            </li>
                        </ul>
                    </li>
                </li>
                <li class="nav-button">
                    <a href="listboat.php">
                        <div class="def-button">List Your Boat</div>
                    </a>
                </li>
                <li class="nav-button">
                    <a href="listboat.php">
                        <div class="def-button">View All Boat</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>