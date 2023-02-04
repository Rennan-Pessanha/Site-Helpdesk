using Microsoft.AspNetCore.Mvc;

namespace SiteHelpdesk.Controllers
{
    public class CadastroController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
