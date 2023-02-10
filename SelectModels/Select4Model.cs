using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SiteHelpdesk.SelectModels
{
    public class Select4Model : SelectGeneric
    {
        [ForeignKey("Select")]
        public int IdPai { get; set; }

        private Select3Model Select { get; set; }
    }
}
