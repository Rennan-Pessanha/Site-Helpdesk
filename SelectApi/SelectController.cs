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
    
}
