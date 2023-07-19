using System.ComponentModel.DataAnnotations;

namespace PruebaBackBG.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public bool State { get; set; }
    }
}
