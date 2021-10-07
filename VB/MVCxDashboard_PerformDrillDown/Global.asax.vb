Imports DevExpress.DashboardWeb
Imports DevExpress.DashboardWeb.Mvc
Imports System
Imports System.Web.Mvc
Imports System.Web.Routing

Namespace MVCxDashboard_PerformDrillDown
    Public Class MvcApplication
        Inherits System.Web.HttpApplication

        Public Shared Sub RegisterRoutes(ByVal routes As RouteCollection)
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}")
            routes.IgnoreRoute("{resource}.ashx/{*pathInfo}")
            routes.MapDashboardRoute("dashboardControl", "DefaultDashboard")

            routes.MapRoute("Default", "{controller}/{action}/{id}", New With {Key .controller = "Home", Key .action = "Index", Key .id = UrlParameter.Optional})
        End Sub

        Protected Sub Application_Start()
            AreaRegistration.RegisterAllAreas()
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters)
            RegisterRoutes(RouteTable.Routes)
            ModelBinders.Binders.DefaultBinder = New DevExpress.Web.Mvc.DevExpressEditorsBinder()
            AddHandler DevExpress.Web.ASPxWebControl.CallbackError, AddressOf Application_Error

            DashboardConfigurator.Default.SetDashboardStorage(New DashboardFileStorage("~/App_Data/"))
        End Sub

        Protected Sub Application_Error(ByVal sender As Object, ByVal e As EventArgs)
            Dim exception As Exception = System.Web.HttpContext.Current.Server.GetLastError()
        End Sub
    End Class
End Namespace