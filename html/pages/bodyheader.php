<body class="HomePage" cz-shortcut-listen="true">
<div id="Container">
    <div id="AjaxLoading"><img src="./Datatech_files/ajax-loader.gif" alt="IBM iSeries AS400 IBM Power Systems and Software">&nbsp; Loading... Please wait...</div>
    <div id="TopMenu">
        <div class="Inner">
            <ul>
                <li style="" class="HeaderLiveChat"></li>
                <li style="display:" class="First"><a href="https://datatechcomputer.com/account.php">My Account</a>&nbsp;
                </li>
                <li style="display:">
                    <div class="accLink">
                        <a href="https://datatechcomputer.com/login.php" onclick="">Sign in</a> or <a
                            href="https://datatechcomputer.com/login.php?action=create_account" onclick="">Create an
                            account</a>
                    </div>
                </li>
            </ul>
            Call 770-772-0200
            <div class="FloatRight">
                <div class="currency-converter">
                    <p>Currency Displayed in <span class="selCurr">USD</span></p>
                    <div class="Block Moveable Panel" id="SideCurrencySelector" style="display:none;"></div>
                </div><!-- currency-converter -->
                <div style="display:" class="wishLink"><a href="https://datatechcomputer.com/wishlist.php">Wish
                        Lists</a></div>
                <div style="display:" class="CartLink"><a href="https://datatechcomputer.com/cart.php">View Cart (<span
                            class="item">0</span>) </a></div>
            </div>
            <div class="clear"></div>
        </div><!-- Inner -->
    </div><!-- TopMenu -->
    <div class="mobileView">
        <div class="togglemenucover">
            <a href="javascript:void(0);" class="togglemenu" title="Toggle Top Menu">Toggle Top Menu</a>
        </div>
    </div>

    <script type="text/javascript">
        if (!jQuery(window).width() > 767) {
            jQuery(".togglemenu").click(function () {
                jQuery(".togglemenu").toggleClass("Active");
                jQuery("#TopMenu").slideToggle();
            });
        }
    </script>


    <div id="Outer" class="compare">
        <div id="Header">
            <div id="Logo">
                <a href="https://datatechcomputer.com/"><img src="./Datatech_files/logo8_1444420111__20119.jpg"
                                                             id="LogoImage" alt="Data Tech"></a>
            </div>

            <a href="#" id="quickcartview" title="View Cart"><img
                    src="./Datatech_files/icon_cart.png" alt="View Cart"></a>
            <a href="#" id="compareview" title="Compare Product"><img
                    src="./Datatech_files/icon_compare.png" alt="Compare Product"></a>
            <div id="SearchForm">
                <form action="https://datatechcomputer.com/search.php" method="get"
                      onsubmit="return check_small_search_form()">
                    <label for="search_query">Search</label>
                    <input type="text" name="search_query" id="search_query" class="Textbox autobox"
                           value="Search for a product" autocomplete="off">
                    <button class="btn" type="submit"><span>Search</span></button>
                </form>

            </div>


            <script type="text/javascript">
                var QuickSearchAlignment = 'right';
                var QuickSearchWidth = '260px';
                lang.EmptySmallSearch = "You forgot to enter some search keywords.";
            </script>


            <div class="mobileView">
                <a href="javascript:void(0);" class="menuIcon ">Main Navigation</a>
            </div>
            <div class="clear"></div>
            <!--<h2><p align='right'>test</h2><p>-->
            <!--<h2 class="H2" style="text-align: right;"><span style="color: #176eb2;">CALL NOW!!!! 770-772-0200</span>&nbsp;</h2><br>-->
            <div id="HeaderLower" class="clearfix">
                <div class="Block">
                    <div class="Block Panel BlockContent" id="Menu">
                        <ul>
                            <li class="parent ActivePage" style="z-index: 14;"><a
                                    href="https://datatechcomputer.com/"><span>Home</span></a></li>


                            <li class="parent" style="z-index: 13;">
                                <a href="https://datatechcomputer.com/IBM-iSeries-AS400-about-us/"><span>About Data Tech</span></a>

                            </li>
                            <li class="parent" style="z-index: 12;">
                                <a href="https://datatechcomputer.com/shop-for-equipment/"><span>Shop For Equipment</span></a>

                            </li>
                            <li class="HasSubMenu  parent" style="z-index: 11;">
                                <a href="https://datatechcomputer.com/Services/"
                                   class="hasSub"><span>Services</span><span class="sub-indicator"> </span></a>
                                <ul style="height: 209px;">
                                    <li class="parent" style="z-index: 10;"><a
                                            href="https://datatechcomputer.com/IBM-iseries-services/">iSeries
                                            Services</a></li>
                                    <li class="parent" style="z-index: 9;"><a
                                            href="https://datatechcomputer.com/ibm-iseries-migration-services/">Migration
                                            Services</a></li>
                                    <li class="parent" style="z-index: 8;"><a
                                            href="https://datatechcomputer.com/ibm-software-services/">IBM Software
                                            Services</a></li>
                                    <li class="parent" style="z-index: 7;"><a
                                            href="https://datatechcomputer.com/ibm-iseries-disaster-recovery/">Disaster
                                            Recovery</a></li>
                                    <li class="parent" style="z-index: 6;"><a
                                            href="https://datatechcomputer.com/ism-iseries-asset-recovery/">Asset
                                            Recovery</a></li>
                                </ul>
                            </li>
                            <li class="parent" style="z-index: 5;">
                                <a href="https://datatechcomputer.com/ibm-iseries-faq/"><span>FAQ</span></a>

                            </li>
                            <li class="parent" style="z-index: 4;">
                                <a href="https://datatechcomputer.com/ibm-iseries-testimonials/"><span>Testimonials</span></a>

                            </li>
                            <li class="parent" style="z-index: 3;">
                                <a href="https://datatechcomputer.com/warranty-returns/"><span>Warranty / Returns</span></a>

                            </li>
                            <li class="parent" style="z-index: 2;">
                                <a href="https://datatechcomputer.com/ibm-iseries-power-systems-sell-your-excess-equipment/"><span>Sell Your Excess Equipment</span></a>

                            </li>
                            <li class="parent" style="z-index: 1;">
                                <a href="https://datatechcomputer.com/ibm-iseries-power-systems-contact-us/"><span>Contact Us</span></a>

                            </li>
                        </ul>
                    </div>

                </div>


            </div><!-- HeaderLower -->
        </div><!-- #Header -->
        <script type="text/javascript">
            jQuery(document).ready(function () {
                if (jQuery(".Left #SideAccountMenu").length) jQuery("body").addClass("AccountPage");
            });
        </script>

        <div id="Wrapper">