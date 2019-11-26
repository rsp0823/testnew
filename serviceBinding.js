function initModel() {
	var sUrl = "/apihub_sandbox/s4hanacloud/sap/opu/odata/sap/API_MKT_CAMPAIGN_TEMPLATE_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}