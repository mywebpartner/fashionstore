using Microsoft.EntityFrameworkCore;
using static FashionAPI.Model.AppDbModel;

namespace FashionAPI.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<ShoppingCart> ShoppingCart { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
