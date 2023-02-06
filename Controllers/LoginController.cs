using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
