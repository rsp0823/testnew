/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Clarivate/ClarivateDownload/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});