<div id="selectBox" style="float: left;"></div>
<div id="buttonContainer" style="float: left; margin-left: 150px;"></div>

<div style="position: absolute; left: 0; right: 0; top:50px; bottom:0;">
    @Html.DevExpress().Dashboard(
        Sub(settings)
            settings.Name = "Dashboard"
            settings.ControllerName = "DefaultDashboard"
            settings.Width = Unit.Percentage(100)
            settings.Height = Unit.Percentage(100)
            settings.WorkingMode = DevExpress.DashboardWeb.WorkingMode.Viewer
            settings.ClientSideEvents.BeforeRender = "onBeforeRender"
        End Sub).GetHtml()
</div>