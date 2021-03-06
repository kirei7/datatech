(function() {
    var $form;
    var btClient;
    var config = {};
    var lang = {};
    lang.BraintreeGenericErrorTitle = "Oh no, we can't do that";
    lang.BraintreeGenericError = "We are unable to process transactions with this payment method. Please try again.";

    function displayError(message) {
        $.modal.close();
        ModalBox(lang.BraintreeGenericErrorTitle, message);
    }

    function onBraintreeClientInitError(message) {
        window.braintreeVDotZeroIntegration.onError(message || lang.BraintreeGenericError);
    }

    function onBraintreeClientInit() {
        window.braintreeVDotZeroIntegration.onInit();
    }

    function tokenize(e){
        var deferred = $.Deferred();
        e.stopPropagation();
        e.preventDefault();
        var creditCard = {
            number: config.number.val(),
            cardholderName: config.cardHolderName.val(),
            expirationMonth: config.expirationMonth.val(),
            expirationYear: config.expirationYear.val(),
            cvv: config.cvv.val()
        };

        //init billingAddress
        creditCard['billingAddress'] = {};

        if ('streetAddress' in config) {
            creditCard['billingAddress']['streetAddress'] = config.streetAddress;
        }

        if ('postalCode' in config) {
           creditCard['billingAddress']['postalCode'] = config.postalCode;
        }

        if ('country' in config) {
            creditCard['billingAddress']['countryName'] = config.country;
        }

        btClient.request({
            endpoint: 'payment_methods/credit_cards',
            method: 'post',
            data: {
              creditCard: creditCard
            }
        }, resolveCallback);

        return deferred;

        function resolveCallback(error, response) {

            if (error) {
                onBraintreeClientInitError();

                return;
            }

            if (config.is3DSecuredEnabled) {
                return handle3DSecureEnabledPayment(error, response);
            } else {
                return tokenizationHandler(error, response.creditCards[0]);
            }
        }

        function tokenizationHandler(error, creditCard) {
            var nonce = creditCard.nonce;

            var $container = $("<div>").attr({
                "class": "orderMachineStateSummary" //Needed for manual order flow
            });

            if (error) {
                deferred.reject(error);
                onBraintreeClientInitError("Error: " + error);

                return;
            }

            $("<input>").attr({
                type: "hidden",
                name: config.paymentFieldName
            }).val(nonce).appendTo($container);

            $container.appendTo($form);

            if (config.shouldSubmitForm) {
                $form.submit();
            }

            deferred.resolve();

            return true;
        }

        function handle3DSecureEnabledPayment(err, response) {
            var threeDSContainer;
            var creditCardNonce = response.creditCards[0].nonce;
            ShowLoadingIndicator();
            braintree.threeDSecure.create({
                client: btClient
            }, function threeDSecureClientCallback(threeDSecureError, threeDSecureInstance) {
                if (threeDSecureError) {
                    onBraintreeClientInitError(lang.BraintreeThreeDSecureError);

                    return;
                }

                threeDSecureInstance.verifyCard({
                    amount: config.amount,
                    nonce: creditCardNonce,
                    addFrame: function (err, iframe) {
                        HideLoadingIndicator();
                        threeDSContainer = document.createElement('div');
                        threeDSContainer.appendChild(iframe);
                        ModalBoxInline('Authentication', threeDSContainer);
                    },
                    removeFrame: function() {
                        $.modal.close();
                    }
                }, tokenizationHandler);
            });
        }
    }

    /*
     * This function manages extraction of payment details and getting them
     * to a back end endpoint.
     *
     * @param clientToken String a string that serves as the clientToken for BT
     * @param orderAmount Number the total amount to send towards the payment gateway
     */
    function braintreeVDotZeroIntegration(configObj) {
        config = configObj;

        $form = config.form;

        braintree.client.create({
          authorization: config.clientToken
        }, function braintreeClientInstanceCallback(clientCreateError, clientInstance) {
            if (clientCreateError) {
                onBraintreeClientInitError();

                return;
            }

            btClient = clientInstance;
            braintree.dataCollector.create({
                client: clientInstance,
                kount: true
            }, handleDeviceDataCollection);

            onBraintreeClientInit();
        });

        if (config.submitButton) {
            config.submitButton.off('click').click(tokenize);
        } else {
            $('body')
                .off('orderFormFSMBeforeFormSerialization')
                .on('orderFormFSMBeforeFormSerialization', tokenize);
        }
    }

    function braintreeVDotZeroDestroy() {
        $('body').off('orderFormFSMBeforeFormSerialization', tokenize);
    }

    /**
     * Handlers are intended to be overridden by third party checkout providers
     */
    braintreeVDotZeroIntegration.onInit = function() {};
    braintreeVDotZeroIntegration.onError = displayError;

    function handleDeviceDataCollection(dataCollectorError, dataCollectorInstance) {
        if (dataCollectorError) {
            var data = {};
        } else {
            var data = dataCollectorInstance.deviceData;
        }

        var form = $form;
        var deviceDataInput = form['device_data'];

        if (deviceDataInput == null) {
            deviceDataInput = document.createElement('input');
            deviceDataInput.name = 'device_data';
            deviceDataInput.type = 'hidden';
            form.append(deviceDataInput);
        }

        deviceDataInput.value = data;
    }

    window.braintreeVDotZeroIntegration = braintreeVDotZeroIntegration;
    window.braintreeVDotZeroDestroy = braintreeVDotZeroDestroy;
})();
