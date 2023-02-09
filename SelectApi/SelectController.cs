using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SiteHelpdesk.Data;
using SiteHelpdesk.Models;
using SiteHelpdesk.SelectModels;

namespace SiteHelpdesk.SelectApi;


public class SelectController : Controller
{
    private ApplicationDbContext _context;

    public SelectController(ApplicationDbContext context)
    {
        _context = context;
    }

    [Route("/listaCategorias")]
    [HttpGet]
    public IActionResult ListaCategorias()
    {
        var TodosSelect = new TodosSelect(_context.Select, _context.Select2, _context.Select3, _context.Select4);        

        return Ok(TodosSelect);
    }

    [Route("/criarCategoria/1")]
    [HttpPost]
    public IActionResult criarCategoria1([FromBody] SelectModel categoria)
    {
        if (categoria != null)
        {
            _context.Select.Add(categoria);
            _context.SaveChanges();
            return Ok(categoria);
        }
        else
        {
            return NotFound();
        }
    }
    [Route("/criarCategoria/2")]
    [HttpPost]
    public IActionResult criarCategoria2([FromBody] Select2Model categoria)
    {
        if (categoria != null)
        {
            _context.Select2.Add(categoria);
            _context.SaveChanges();
            return Ok(categoria);
        }
        else
        {
            return NotFound();
        }
    }
    [Route("/criarCategoria/3")]
    [HttpPost]
    public IActionResult criarCategoria3([FromBody] Select3Model categoria)
    {
        if (categoria != null)
        {
            _context.Select3.Add(categoria);
            _context.SaveChanges();
            return Ok(categoria);
        }
        else
        {
            return NotFound();
        }
    }
    [Route("/criarCategoria/4")]
    [HttpPost]
    public IActionResult criarCategoria4([FromBody] Select4Model categoria)
    {
        if (categoria != null)
        {
            _context.Select4.Add(categoria);
            _context.SaveChanges();
            return Ok(categoria);
        }
        else
        {
            return NotFound();
        }
    }

}
