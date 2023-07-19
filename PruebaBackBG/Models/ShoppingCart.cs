using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaBackBG.Models
{
    public class ShoppingCart
    {
        [Key]
        public int IdShoppingCart { get; set; }

        [ForeignKey("Client")]
        public int IdCliente { get; set; }

        [Required]
        public DateTime CreationDate { get; set; }

        public Client Client { get; set; }
    }
}
