using System.ComponentModel.DataAnnotations;

namespace PruebaBackBG.Models
{
    public class Client
    {
        [Key]
        public int IdCliente { get; set; }

        [Required]
        public string Names { get; set; }

        [Required]
        public string LastNames { get; set; }

        [Required]
        [MaxLength(10)]
        public string Phone { get; set; }

        [Required]
        public string Email { get; set; }

        public bool State { get; set; }
    }
}
