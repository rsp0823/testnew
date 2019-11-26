/*global QUnit*/

sap.ui.define([
	"Clarivate/ClarivateDownload/controller/Clarivate.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Clarivate Controller");

	QUnit.test("I should test the Clarivate controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});