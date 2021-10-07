using DevExpress.DashboardWeb;
using DevExpress.DashboardWeb.Mvc;
using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVCxDashboard_PerformDrillDown
{
    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{resource}.ashx/{*pathInfo}");
            routes.MapDashboardRoute("dashboardControl", "DefaultDashboard");

            routes.MapRoute(
                "Default",
                "{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);
            ModelBinders.Binders.DefaultBinder = new DevExpress.Web.Mvc.DevExpressEditorsBinder();
            DevExpress.Web.ASPxWebControl.CallbackError += Application_Error;

            DashboardConfigurator.Default.SetDashboardStorage(new DashboardFileStorage(@"~/App_Data/"));
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exception = System.Web.HttpContext.Current.Server.GetLastError();
        }
    }
}