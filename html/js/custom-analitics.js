(function () {
    window.bcanalytics || (window.bcanalytics = []), window.bcanalytics.methods = ["debug", "identify", "track",
        "trackLink", "trackForm", "trackClick", "trackSubmit", "page", "pageview", "ab", "alias", "ready", "group",
        "on", "once", "off", "initialize"], window.bcanalytics.factory = function (a) {
        return function () {
            var b = Array.prototype.slice.call(arguments);
            return b.unshift(a), window.bcanalytics.push(b),
                window.bcanalytics
        }
    };
    for (var i = 0; i < window.bcanalytics.methods.length; i++) {
        var method = window.bcanalytics.methods[i];
        window.bcanalytics[method] = window.bcanalytics.factory(method)
    }
    window.bcanalytics.load = function () {
        var a = document.createElement("script");
        a.type = "text/javascript",
            a.async = !0, a.src = "https://cdn4.bigcommerce.com/r-be78c484c990ae34216e1f3addc9149f41c991e6/app/assets/js/vendor/bigcommerce/analytics.min.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }, window.bcanalytics.SNIPPET_VERSION = "2.0.8", window.bcanalytics.load();
    bcanalytics.initialize({
        "Fornax": {
            "host": "https:\/\/analytics.bigcommerce.com",
            "cdn": "https:\/\/cdn4.bigcommerce.com\/r-be78c484c990ae34216e1f3addc9149f41c991e6\/app\/assets\/js\/vendor\/bigcommerce\/fornax.min.js",
            "defaultEventProperties": {
                "storeId": 933183,
                "experiments": {
                    "PROJECT-174.channel_twitter": "control",
                    "PROJECT-331.pos_manager": "on",
                    "PROJECT-632.square_export": "on",
                    "PROJECT-756.channel_pinterest": "on",
                    "PROJECT-756.pinterest_material_options": "control",
                    "PROJECT-783.channel_facebook": "on",
                    "PROJECT-783.channel_facebook.disconnect": "on",
                    "PROJECT-1245.amazon-payments.registration.eu": "on",
                    "PROJECT-1245.amazon-payments.registration.us": "on",
                    "OMNI-1010.channel_amazon.coming_soon": "on",
                    "OMNI-913.channel_amazon": "on",
                    "OMNI-2917.channel_buy_buttons": "on",
                    "OMNI-3493.ebay_multiple_business_policies": "on",
                    "OMNI-2918.google_shopping": "control",
                    "OMNI-1010.channel_ebay.coming_soon": "control",
                    "OMNI-764.channel_ebay": "on",
                    "OMNI-3167.channel_instagram.coming_soon": "on",
                    "OMNI-900.channel_amazon.amazon_variants": "control",
                    "OMNI-799.facebook_checkout": "on",
                    "OMNI-2943.channel_facebook.refactor": "control",
                    "OMNI-2999.products.cdn": "on",
                    "OMNI-3354.omnichannel.cdn": "on",
                    "BIG-29859.facebook_messenger_integration": "control",
                    "CP-78.cp_click_tracking": "control",
                    "PROJECT-1082.promote_ppec": "on",
                    "BIG-28672.shipstation": "on",
                    "ng-products": "control",
                    "ng-add-edit-products": "control",
                    "API-417.enable_api_oauth_account_creation": "on",
                    "CRO-16.left_align_buttons": "on",
                    "CRO-8.getting-started-content-test": "on",
                    "CRO-63.separate-design-options": "on",
                    "PROJECT-1441.dashboard.store_performance_channels": "on",
                    "PROJECT-1413.PinterestProductListings": "off",
                    "CP-860.switch_stores": "on",
                    "PROJECT-1413.PinterestChannelServiceAuth": "control",
                    "CRO-46.upload-logo-design": "on",
                    "CP-1284.search-ui": "control",
                    "PROJECT-1522.google_customer_reviews": "on",
                    "PROJECT-976.braintree.visa.checkout": "control",
                    "CP-1252.self_help.phase2": "control",
                    "DATA-2896.ng-analytics.enable": "control",
                    "PROJECT-1581.cybersourcedirect.advanced-fraud-screen": "control",
                    "checkout.PaymentRequest": "on",
                    "CHECKOUT-1605.finalize.order.panel": "control",
                    "CRO-9.new_storefront_defaults": "control",
                    "CP-2120.logout_sentry": "on",
                    "CP-2143.ng-customers": "control"
                }
            },
            "defaultContext": {"source": "Bigcommerce Storefront"},
            "anonymousId": "c7d86c0a-cca4-44d7-af95-c70fcc7598c3"
        }
    });
})();