using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
