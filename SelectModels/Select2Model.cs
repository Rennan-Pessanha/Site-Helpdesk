using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteHelpdesk.SelectModels
{
    public class Select2Model
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        public string Valor { get; set; }

        [ForeignKey("Select")]
        public int IdPai { get; set; }

        public SelectModel Select { get; set; }
    }
}
