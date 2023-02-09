using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteHelpdesk.SelectModels
{
    public class Select2Model : SelectGeneric
    {
        [ForeignKey("Select")]
        public int IdPai { get; set; }

        public SelectModel Select { get; set; }
    }
}
