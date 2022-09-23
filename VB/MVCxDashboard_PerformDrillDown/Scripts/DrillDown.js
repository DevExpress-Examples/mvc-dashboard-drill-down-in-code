var dashboardControl;
var viewerApiExtension;

function onBeforeRender(s) {
    dashboardControl = s.GetDashboardControl();
    viewerApiExtension = dashboardControl.findExtension('viewerApi');

    if (viewerApiExtension)
        viewerApiExtension.on('itemActionAvailabilityChanged', onActionAvailabilityChanged);
    if (dashboardControl)
        dashboardControl.on('dashboardEndUpdate', initializeControls);
}

function initializeControls() {
    $("#buttonContainer").dxButton({
        onClick: performDrillAction,
    });

    $("#selectBox").dxSelectBox({
        dataSource: getDrillDownValues(),
        value: getDrillDownValues()[0]
    });
};

function getDrillDownValues() {
    var drillDownTuples = viewerApiExtension.getAvailableDrillDownValues("gridDashboardItem1"),
        drillDownValues = [];

    if (viewerApiExtension.getAvailableDrillDownValues("gridDashboardItem1") != null) {
        $.each(drillDownTuples, function (index, value) {
            drillDownValues.push(value.getAxisPoint().getValue());
        });
        return drillDownValues;
    }
    else {
        return function () { };
    }
};

function performDrillAction() {
    var tuple = viewerApiExtension.getItemData("gridDashboardItem1").createTuple([{
        axisName: "Default",
        value: [$("#selectBox").data("dxSelectBox").option("value")]
    }]);

    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) {
        viewerApiExtension.performDrillDown("gridDashboardItem1", tuple);
    }
    else {
        viewerApiExtension.performDrillUp("gridDashboardItem1");
    };
};

function onActionAvailabilityChanged() {
    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Drill Down"
        });
        $("#selectBox").dxSelectBox({
            disabled: false
        });
    }
    if (viewerApiExtension.canPerformDrillUp("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Drill Up"
        });
        $("#selectBox").dxSelectBox({
            disabled: true
        });
    }
};