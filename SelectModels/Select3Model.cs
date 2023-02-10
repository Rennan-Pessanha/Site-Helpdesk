using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SiteHelpdesk.SelectModels
{
    public class Select3Model : SelectGeneric
    {
        [ForeignKey("Select")]
        public int IdPai { get; set; }

        private Select2Model Select { get; set; }
    }
}
