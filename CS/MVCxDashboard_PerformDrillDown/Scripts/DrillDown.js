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
    var drillDownTuples = webDashboard.GetAvailableDrillDownValues("gridDashboardItem1"),
        drillDownValues = [];

    if (webDashboard.GetAvailableDrillDownValues("gridDashboardItem1") != null) {
        $.each(drillDownTuples, function (index, value) {
            drillDownValues.push(value.GetAxisPoint().GetValue());
        });
        return drillDownValues;
    }
    else {
        return function () { };
    }
};

function performDrillAction() {
    var tuple = webDashboard.GetItemData("gridDashboardItem1").CreateTuple([{
        AxisName: DashboardDataAxisNames.DefaultAxis,
        Value: [$("#selectBox").data("dxSelectBox").option("value")]
    }]);
    if (webDashboard.CanPerformDrillDown("gridDashboardItem1")) {
        webDashboard.PerformDrillDown("gridDashboardItem1", tuple);
    }
    else {
        webDashboard.PerformDrillUp("gridDashboardItem1");
    };
};

function setState() {
    if (webDashboard.CanPerformDrillDown("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Perform Drill-Down"
        });
        $("#selectBox").dxSelectBox({
            disabled: false
        });
    }
    if (webDashboard.CanPerformDrillUp("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Perform Drill-Up"
        });
        $("#selectBox").dxSelectBox({
            disabled: true
        });
    }
};