using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;

namespace SiteHelpdesk.Models
{
    public class ChamadoModel
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string NomeAluno { get; set; }
        
        [Required]
        public int IdAluno { get; set; }
        [Required]
        public string Cpf { get; set; }
        [Required]
        public string Ov { get; set; }
        [Required]
        public string OvData { get; set; }
        [Required]
        public string OvHora { get; set; }
        [Required]
        public string OvStatus { get; set; }
        [Required]

        public string ChamadoData { get; set; }
        [Required]
        public string ChamadoHora { get; set; }
        [Required]
        public string Responsavel { get; set; }

        public string Dispositivo { get; set; }
        [Range(0, 10000000)]
        public int? IdCard { get; set; } = 0;
        
        public string? AppVersao { get; set; }
        public bool? Reproduzido { get; set; } = false;
    }
}


/*aluno_id: {type: String, required: true},
aluno_cpf: { type: String, required: true},
    aluno_nome: { type: String, required: true},
    aluno_ov: { type: String, required: true},
    aluno_ov_data: { type: String, required: true},
    aluno_ov_hora: { type: String, required: true},
    aluno_ov_status: { type: String, required: true},
    aluno_chamado_data: { type: String, required: true},
    aluno_chamado_hora: { type: String, required: true},
    responsavel: { type: String, required: true},
    aluno_dispositivo: { type: String},
    aluno_card_id: { type: String},
    aluno_app_versao: { type: String},
    aluno_reproducao: { type: String},*/