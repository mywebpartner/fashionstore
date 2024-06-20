using FashionAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace FashionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FashionStoreApi : ControllerBase
    {
        private readonly AppDbContext _context;

        public class ApiResponse
        {
            public object Result { get; set; }
            public string Message { get; set; }
        }

        public FashionStoreApi(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetCartItems")]
        public ApiResponse GetCartItems()
        {
            var cartItems = _context.CartItems.ToList();
            return new ApiResponse { Message = "CartItems", Result = cartItems };
        }

        [HttpGet("GetCategories")]
        public ApiResponse GetCategories()
        {
            var categories = _context.Categories.ToList();
            return new ApiResponse { Message = "Categories", Result = categories };
        }

        [HttpGet("GetOrderItems")]
        public ApiResponse GetOrderItems()
        {
            var orderItems = _context.OrderItems.ToList();
            return new ApiResponse { Message = "OrderItems", Result = orderItems };
        }

        [HttpGet("GetOrders")]
        public ApiResponse GetOrders()
        {
            var orders = _context.Orders.ToList();
            return new ApiResponse { Message = "Orders", Result = orders };
        }

        [HttpGet("GetProducts")]
        public ApiResponse GetProducts()
        {
            var products = _context.Products.ToList();
            return new ApiResponse { Message = "Products", Result = products };
        }

        [HttpGet("GetReviews")]
        public ApiResponse GetReviews()
        {
            var reviews = _context.Reviews.ToList();
            return new ApiResponse { Message = "Reviews", Result = reviews };
        }

        [HttpGet("GetShoppingCarts")]
        public ApiResponse GetShoppingCarts()
        {
            var shoppingCarts = _context.ShoppingCart.ToList();
            return new ApiResponse { Message = "ShoppingCarts", Result = shoppingCarts };
        }

        [HttpGet("GetUserRoles")]
        public ApiResponse GetUserRoles()
        {
            var userRoles = _context.UserRole.ToList();
            return new ApiResponse { Message = "UserRoles", Result = userRoles };
        }

        [HttpGet("GetUsers")]
        public ApiResponse GetUsers()
        {
            var users = _context.Users.ToList();
            return new ApiResponse { Message = "Users", Result = users };
        }
    }
}
