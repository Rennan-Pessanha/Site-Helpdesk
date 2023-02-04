using Microsoft.EntityFrameworkCore;
using SiteHelpdesk.Models;
using SiteHelpdesk.SelectModels;

namespace SiteHelpdesk.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<ChamadoModel> Chamados { get; set; }

        public DbSet<SelectModel> Select { get; set; }
        public DbSet<Select2Model> Select2 { get; set; }
        public DbSet<Select3Model> Select3 { get; set; }
        public DbSet<Select4Model> Select4 { get; set; }
    }
}
