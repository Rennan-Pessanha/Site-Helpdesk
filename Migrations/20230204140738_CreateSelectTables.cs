using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteHelpdesk.Migrations
{
    /// <inheritdoc />
    public partial class CreateSelectTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Select",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Select", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Select2",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    IdPai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Select2", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Select2_Select_IdPai",
                        column: x => x.IdPai,
                        principalTable: "Select",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Select3",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    IdPai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Select3", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Select3_Select2_IdPai",
                        column: x => x.IdPai,
                        principalTable: "Select2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Select4",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    IdPai = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Select4", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Select4_Select3_IdPai",
                        column: x => x.IdPai,
                        principalTable: "Select3",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Select2_IdPai",
                table: "Select2",
                column: "IdPai");

            migrationBuilder.CreateIndex(
                name: "IX_Select3_IdPai",
                table: "Select3",
                column: "IdPai");

            migrationBuilder.CreateIndex(
                name: "IX_Select4_IdPai",
                table: "Select4",
                column: "IdPai");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Select4");

            migrationBuilder.DropTable(
                name: "Select3");

            migrationBuilder.DropTable(
                name: "Select2");

            migrationBuilder.DropTable(
                name: "Select");
        }
    }
}
