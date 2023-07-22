using Microsoft.EntityFrameworkCore;
using PruebaBackBG.Models;

namespace PruebaBackBG.DataAccess
{
    public class AppDbContext: DbContext
    {

        public AppDbContext( DbContextOptions<AppDbContext> options): base(options) { }

        public DbSet<Product> Product { get; set; }
        public DbSet<Client> Client { get; set; }
        public DbSet<ShoppingCart> ShoppingCart { get; set; }
        public DbSet<CartItem> CartItem { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Plan> Plan { get; set; }

    }
}
