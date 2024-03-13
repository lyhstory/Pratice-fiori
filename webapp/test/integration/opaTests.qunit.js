sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zbrfsales/test/integration/FirstJourney',
		'zbrfsales/test/integration/pages/OrdersList',
		'zbrfsales/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zbrfsales') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);