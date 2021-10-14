<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T496083)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

## Dashboard for MVC - How to perform a drill-down in code
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t496083/)**
<!-- run online end -->

The following example demonstrates how to perform a drill-down in the [ASP.NET MVC Dashboard Extension](https://docs.devexpress.com/Dashboard/16977/web-dashboard/aspnet-mvc-dashboard-extension) on the client side.

In this example, the [ASPxClientDashboard.PerformDrillDown](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard#js_aspxclientdashboard_performdrilldown_itemname_value_) method is used to perform a drill-down for a specified row in a [Grid](https://docs.devexpress.com/Dashboard/117161/web-dashboard/create-dashboards-on-the-web/dashboard-item-settings/grid) dashboard item. The [dxSelectBox](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxSelectBox/) widget contains categories for which a drill-down can be performed. These categories are obtained using the [ASPxClientDashboard.GetAvailableDrillDownValues](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard#js_aspxclientdashboard_getavailabledrilldownvalues_itemname_) method. Select a required category and click the **Perform Drill-Down** button to perform a drill-down by the selected category.
When the Grid displays a list of products (the bottom-most detail level), you can only perform a drill-up action that returns you to the top detail level. The [ASPxClientDashboard.PerformDrillUp](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard#js_aspxclientdashboard_performdrillup_itemname_) method is called to do this.


<!-- default file list -->
## Files to Look At:

* [HomeController.cs](./CS/MVCxDashboard_PerformDrillDown/Controllers/HomeController.cs) (VB: [HomeController.vb](./VB/MVCxDashboard_PerformDrillDown/Controllers/HomeController.vb))
* [Global.asax.cs](./CS/MVCxDashboard_PerformDrillDown/Global.asax.cs) (VB: [Global.asax.vb](./VB/MVCxDashboard_PerformDrillDown/Global.asax.vb))
* [DrillDown.js](./CS/MVCxDashboard_PerformDrillDown/Scripts/DrillDown.js) (VB: [DrillDown.js](./VB/MVCxDashboard_PerformDrillDown/Scripts/DrillDown.js))
* [Index.cshtml](./CS/MVCxDashboard_PerformDrillDown/Views/Home/Index.cshtml)
* [\_Layout.cshtml](./CS/MVCxDashboard_PerformDrillDown/Views/Shared/_Layout.cshtml)
<!-- default file list end -->

## Documentation

* [Drill-Down](https://docs.devexpress.com/Dashboard/116913/common-features/interactivity/drill-down?p=netframework)
* [Web Dashboard - Drill-Down](https://docs.devexpress.com/Dashboard/117061/web-dashboard/create-dashboards-on-the-web/interactivity/drill-down)
