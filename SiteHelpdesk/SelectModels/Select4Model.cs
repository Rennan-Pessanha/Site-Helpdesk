using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SiteHelpdesk.SelectModels
{
    public class Select4Model
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        public string Valor { get; set; }

        [ForeignKey("Select")]
        public int IdPai { get; set; }

        public Select3Model Select { get; set; }
    }
}
