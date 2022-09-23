Imports DevExpress.DashboardWeb
Imports DevExpress.DashboardWeb.Mvc
Imports System.Web.Routing

Namespace MVCxDashboard_PerformDrillDown

    Public Module DashboardConfig

        Public Sub RegisterService(ByVal routes As RouteCollection)
            routes.MapDashboardRoute("dashboardControl", "DefaultDashboard")
            Dim dashboardFileStorage As DashboardFileStorage = New DashboardFileStorage("~/App_Data/Dashboards")
            DashboardConfigurator.Default.SetDashboardStorage(dashboardFileStorage)
            ' Uncomment this string to allow end users to create new data sources based on predefined connection strings.
            'DashboardConfigurator.Default.SetConnectionStringsProvider(new DevExpress.DataAccess.Web.ConfigFileConnectionStringsProvider());
            Dim dataSourceStorage As DataSourceInMemoryStorage = New DataSourceInMemoryStorage()
            DashboardConfigurator.Default.SetDataSourceStorage(dataSourceStorage)
        End Sub
    End Module
End Namespace
