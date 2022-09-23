Imports DevExpress.DashboardWeb
Imports DevExpress.DashboardWeb.Mvc

Public NotInheritable Class DashboardConfig
    Public Shared Sub RegisterService(ByVal routes As RouteCollection)
        routes.MapDashboardRoute("dashboardControl", "DefaultDashboard")

        Dim dashboardFileStorage As New DashboardFileStorage("~/App_Data/Dashboards")
        DashboardConfigurator.Default.SetDashboardStorage(dashboardFileStorage)

        ' Uncomment this string to allow end users to create new data sources based on predefined connection strings.
        ' DashboardConfigurator.Default.SetConnectionStringsProvider(New DevExpress.DataAccess.Web.ConfigFileConnectionStringsProvider())

        Dim dataSourceStorage As New DataSourceInMemoryStorage()

        DashboardConfigurator.Default.SetDataSourceStorage(dataSourceStorage)
    End Sub

End Class