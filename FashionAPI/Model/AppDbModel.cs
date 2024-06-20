using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FashionAPI.Model
{
    public class AppDbModel
    {
        public class CartItem
        {
            public int CartItemId { get; set; }
            public int? CartId { get; set; }
            public int? ProductId { get; set; }
            public int? Quantity { get; set; }

            public virtual ShoppingCart Cart { get; set; }
            public virtual Product Product { get; set; }
        }

        public class Category
        {
            public int CategoryId { get; set; }
            public string CategoryName { get; set; }

            public virtual ICollection<Product> Products { get; set; }
        }

        public class OrderItem
        {
            public int OrderItemId { get; set; }
            public int? OrderId { get; set; }
            public int? ProductId { get; set; }
            public int? Quantity { get; set; }
            public decimal? Price { get; set; }

            public virtual Order Order { get; set; }
            public virtual Product Product { get; set; }
        }

        public class Order
        {
            public int OrderId { get; set; }
            public int? UserId { get; set; }
            public DateTime? OrderDate { get; set; }
            public decimal? TotalAmount { get; set; }
            public string Status { get; set; }

            public virtual User User { get; set; }
            public virtual ICollection<OrderItem> OrderItems { get; set; }
        }

        public class Product
        {
            public int ProductId { get; set; }
            public string ProductName { get; set; }
            public string Description { get; set; }
            public string ProductMainImage { get; set; }
            public string ProductImages { get; set; }
            public decimal? Price { get; set; }
            public int? Stock { get; set; }
            public int? CategoryId { get; set; }

            public virtual Category Category { get; set; }
            public virtual ICollection<CartItem> CartItems { get; set; }
            public virtual ICollection<OrderItem> OrderItems { get; set; }
            public virtual ICollection<Review> Reviews { get; set; }
        }

        public class Review
        {
            public int ReviewId { get; set; }
            public int? ProductId { get; set; }
            public int? UserId { get; set; }
            public int? Rating { get; set; }
            public string Comment { get; set; }
            public DateTime? ReviewDate { get; set; }

            public virtual Product Product { get; set; }
            public virtual User User { get; set; }
        }

        public class ShoppingCart
        {
            [Key]
            public int CartId { get; set; }
            public int? UserId { get; set; }
            public DateTime? CreatedDate { get; set; }

            public virtual User User { get; set; }
            public virtual ICollection<CartItem> CartItems { get; set; }
        }

        public class UserRole
        {
            public int ID { get; set; }
            public string Role { get; set; }
            public bool? IsActive { get; set; }

            public virtual ICollection<User> Users { get; set; }
        }

        public class User
        {
            public int UserId { get; set; }
            public string Username { get; set; }
            public string PasswordHash { get; set; }
            public string Email { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Address { get; set; }
            public string PhoneNumber { get; set; }
            public int? RoleID { get; set; }

            public virtual UserRole Role { get; set; }
            public virtual ICollection<Order> Orders { get; set; }
            public virtual ICollection<Review> Reviews { get; set; }
            public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; }
        }
    }
}
