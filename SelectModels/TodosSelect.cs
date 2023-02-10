using Microsoft.EntityFrameworkCore;

namespace SiteHelpdesk.SelectModels
{
    public class TodosSelect
    {
        public DbSet<SelectModel> Processos { get; set; }

        public DbSet<Select2Model> Aplicacao { get; set; }
        public DbSet<Select3Model> Area { get; set; }
        public DbSet<Select4Model> Problema { get; set; }

        public TodosSelect(DbSet<SelectModel> selectModel, DbSet<Select2Model> selectModel2, DbSet<Select3Model> selectModel3, DbSet<Select4Model> selectModel4)
        {
            Processos = selectModel;
            Aplicacao = selectModel2;
            Area = selectModel3;
            Problema = selectModel4;
        }

    }
}
