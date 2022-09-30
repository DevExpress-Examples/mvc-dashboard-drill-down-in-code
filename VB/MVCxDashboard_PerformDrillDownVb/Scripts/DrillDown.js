var dashboardControl;
var viewerApiExtension;

function onBeforeRender(s) {
    dashboardControl = s.GetDashboardControl();
    if (dashboardControl) {
        viewerApiExtension = dashboardControl.findExtension('viewerApi');
        dashboardControl.on('dashboardEndUpdate', initializeControls);
    }
    if (viewerApiExtension)
        viewerApiExtension.on('itemActionAvailabilityChanged', onActionAvailabilityChanged);
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
    var drillDownValues = [];
    if (viewerApiExtension) {
        var drillDownTuples = viewerApiExtension.getAvailableDrillDownValues("gridDashboardItem1");
        if (drillDownTuples != null) {
            $.each(drillDownTuples, function (index, value) {
                drillDownValues.push(value.getAxisPoint().getValue());
            });
        }
    }
    return drillDownValues;
};

function performDrillAction() {
    var tuple = viewerApiExtension.getItemData("gridDashboardItem1").createTuple([{
        axisName: "Default",
        value: [$("#selectBox").data("dxSelectBox").option("value")]
    }]);

    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) 
        viewerApiExtension.performDrillDown("gridDashboardItem1", tuple)
    else {
        if (viewerApiExtension.canPerformDrillUp("gridDashboardItem1"))
            viewerApiExtension.performDrillUp("gridDashboardItem1");   
    };
};

function onActionAvailabilityChanged() {
    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            text: "Drill Down"
        });
        $("#selectBox").dxSelectBox({
            disabled: false
        });
    }
    if (viewerApiExtension.canPerformDrillUp("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            text: "Drill Up"
        });
        $("#selectBox").dxSelectBox({
            disabled: true
        });
    }
};
