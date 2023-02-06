using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using SiteHelpdesk.Data;
using SiteHelpdesk.Migrations;
using SiteHelpdesk.Models;
using System.Linq;
using System.Text.Json.Serialization;

namespace SiteHelpdesk.Controllers
{
    public class AtendimentosController : Controller
    {
        private ApplicationDbContext _context;

        public AtendimentosController(ApplicationDbContext context)
        {
            _context = context;
        }


        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create([FromBody] ChamadoModel chamadoToCreate)
        {
            try
            {

                _context.Chamados.Add(chamadoToCreate);
                _context.SaveChanges();
                return Ok(chamadoToCreate);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
                
            }
        }

        [HttpGet]
        public IActionResult Todos()
        {
            return Ok(_context.Chamados);
        }





        public IActionResult Aluno(int id)
        {
            
            IEnumerable<ChamadoModel> chamados = _context.Chamados.Where(chamado => chamado.IdAluno == id);

                return Ok(chamados);

        }

    }
}
