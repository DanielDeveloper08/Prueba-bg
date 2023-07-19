using System.ComponentModel.DataAnnotations;

namespace PruebaBackBG.Models
{
    public class Product
    {
        [Key]
        public int IdProduct { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public float Price { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string UrlImage { get; set; }

        [Required]
        public int QuantityAvailable { get; set; }

        public bool State { get; set; }
    }
}
