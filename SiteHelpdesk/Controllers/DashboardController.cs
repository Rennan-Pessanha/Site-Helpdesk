using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
