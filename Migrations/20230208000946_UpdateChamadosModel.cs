using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteHelpdesk.Migrations
{
    /// <inheritdoc />
    public partial class UpdateChamadosModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Aplicativo",
                table: "Chamados",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Area",
                table: "Chamados",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Problema",
                table: "Chamados",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Processo",
                table: "Chamados",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aplicativo",
                table: "Chamados");

            migrationBuilder.DropColumn(
                name: "Area",
                table: "Chamados");

            migrationBuilder.DropColumn(
                name: "Problema",
                table: "Chamados");

            migrationBuilder.DropColumn(
                name: "Processo",
                table: "Chamados");
        }
    }
}
