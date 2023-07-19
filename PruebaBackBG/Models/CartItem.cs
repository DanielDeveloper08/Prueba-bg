using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaBackBG.Models
{
    public class CartItem
    {
        [Key]
        public int IdCartItem { get; set; }

        [Required]
        public int Quantity { get; set; }

        [ForeignKey("Cart")]
        public int CartId { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }

        public ShoppingCart Cart { get; set; }
        public Product Product { get; set; }
    }
}
