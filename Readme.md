<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128579144/17.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T496083)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [HomeController.cs](./CS/MVCxDashboard_PerformDrillDown/Controllers/HomeController.cs) (VB: [HomeController.vb](./VB/MVCxDashboard_PerformDrillDown/Controllers/HomeController.vb))
* [Global.asax.cs](./CS/MVCxDashboard_PerformDrillDown/Global.asax.cs) (VB: [Global.asax.vb](./VB/MVCxDashboard_PerformDrillDown/Global.asax.vb))
* [DrillDown.js](./CS/MVCxDashboard_PerformDrillDown/Scripts/DrillDown.js) (VB: [DrillDown.js](./VB/MVCxDashboard_PerformDrillDown/Scripts/DrillDown.js))
* [Index.cshtml](./CS/MVCxDashboard_PerformDrillDown/Views/Home/Index.cshtml)
* [_Layout.cshtml](./CS/MVCxDashboard_PerformDrillDown/Views/Shared/_Layout.cshtml)
<!-- default file list end -->
# ASP.NET MVC Dashboard - How to perform a drill-down in code


<p>The following example demonstrates how to perform a drill-down in the <a href="https://documentation.devexpress.com/#Dashboard/CustomDocument16977">ASP.NET MVC Dashboard Extension</a> on the client side.</p>
<p>In this example, the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_PerformDrillDowntopic">ASPxClientDashboard.PerformDrillDown</a> method is used to perform a drill-down for a specified row in a <a href="https://documentation.devexpress.com/#Dashboard/CustomDocument117161">Grid</a> dashboard item. The <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxSelectBox/">dxSelectBox</a> widget contains categories for which a drill-down can be performed. These categories are obtained using the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_GetAvailableDrillDownValuestopic">ASPxClientDashboard.GetAvailableDrillDownValues</a> method. Select a required category and click the <strong>Perform Drill-Down</strong> button to perform a drill-down by the selected category.</p>
<p>When the Grid displays a list of products (the bottom-most detail level), you can only perform a drill-up action that returns you to the top detail level. The <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_PerformDrillUptopic">ASPxClientDashboard.PerformDrillUp</a> method is called to do this.</p>

<br/>


<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=mvc-dashboard-drill-down-in-code&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=mvc-dashboard-drill-down-in-code&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
