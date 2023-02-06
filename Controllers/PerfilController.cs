using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class PerfilController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
