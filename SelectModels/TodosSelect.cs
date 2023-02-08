using Microsoft.EntityFrameworkCore;

namespace SiteHelpdesk.SelectModels
{
    public class TodosSelect
    {
        public DbSet<SelectModel> SelectModel { get; set; }

        public DbSet<Select2Model> SelectModel2 { get; set; }
        public DbSet<Select3Model> SelectModel3 { get; set; }
        public DbSet<Select4Model> SelectModel4 { get; set; }

        public TodosSelect(DbSet<SelectModel> selectModel, DbSet<Select2Model> selectModel2, DbSet<Select3Model> selectModel3, DbSet<Select4Model> selectModel4)
        {
            SelectModel = selectModel;
            SelectModel2 = selectModel2;
            SelectModel3 = selectModel3;
            SelectModel4 = selectModel4;
        }

        public TodosSelect Exibe()
        {
            Console.WriteLine(this.SelectModel);
            return this;
        }
    }
}
