using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class PadroesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
