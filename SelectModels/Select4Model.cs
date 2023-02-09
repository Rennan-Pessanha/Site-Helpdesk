using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SiteHelpdesk.SelectModels
{
    public class Select4Model : SelectGeneric
    {
        [ForeignKey("Select")]
        public int IdPai { get; set; }

        public Select3Model Select { get; set; }
    }
}
