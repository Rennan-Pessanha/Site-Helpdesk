using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SiteHelpdesk.Migrations
{
    /// <inheritdoc />
    public partial class updateSelect2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Select2_Select_IdPai",
                table: "Select2");

            migrationBuilder.DropForeignKey(
                name: "FK_Select3_Select2_IdPai",
                table: "Select3");

            migrationBuilder.DropForeignKey(
                name: "FK_Select4_Select3_IdPai",
                table: "Select4");

            migrationBuilder.DropIndex(
                name: "IX_Select4_IdPai",
                table: "Select4");

            migrationBuilder.DropIndex(
                name: "IX_Select3_IdPai",
                table: "Select3");

            migrationBuilder.DropIndex(
                name: "IX_Select2_IdPai",
                table: "Select2");

            migrationBuilder.DropColumn(
                name: "IdPai",
                table: "Select2");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdPai",
                table: "Select2",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Select4_IdPai",
                table: "Select4",
                column: "IdPai");

            migrationBuilder.CreateIndex(
                name: "IX_Select3_IdPai",
                table: "Select3",
                column: "IdPai");

            migrationBuilder.CreateIndex(
                name: "IX_Select2_IdPai",
                table: "Select2",
                column: "IdPai");

            migrationBuilder.AddForeignKey(
                name: "FK_Select2_Select_IdPai",
                table: "Select2",
                column: "IdPai",
                principalTable: "Select",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Select3_Select2_IdPai",
                table: "Select3",
                column: "IdPai",
                principalTable: "Select2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Select4_Select3_IdPai",
                table: "Select4",
                column: "IdPai",
                principalTable: "Select3",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
