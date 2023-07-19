using System.ComponentModel.DataAnnotations;

namespace PruebaBackBG.Models.DTO
{
    public class UserDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
