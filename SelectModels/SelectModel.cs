using System.ComponentModel.DataAnnotations;

namespace SiteHelpdesk.SelectModels
{
    public class SelectModel
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        public string Valor { get; set; }
    }
}
