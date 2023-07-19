using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PruebaBackBG.Migrations
{
    /// <inheritdoc />
    public partial class v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UrlImge",
                table: "Product",
                newName: "UrlImage");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UrlImage",
                table: "Product",
                newName: "UrlImge");
        }
    }
}
