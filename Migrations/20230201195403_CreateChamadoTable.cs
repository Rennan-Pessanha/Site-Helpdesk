using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteHelpdesk.Migrations
{
    /// <inheritdoc />
    public partial class CreateChamadoTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chamados",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAluno = table.Column<int>(type: "int", nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ov = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OvData = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OvHora = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OvStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ChamadoData = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ChamadoHora = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Responsavel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Dispositivo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdCard = table.Column<int>(type: "int", nullable: false),
                    AppVersao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Reproduzido = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chamados", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Chamados");
        }
    }
}
