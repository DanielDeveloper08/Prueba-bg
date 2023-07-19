using PruebaBackBG.Models;
using PruebaBackBG.Models.DTO;

namespace PruebaBackBG.Services.Interfaces
{
    public interface ILoginService
    {
        Task<User?> GetUser(UserDTO user);

        bool VerifyPassword(string inputPassword, string hashedPassword);

        string GenerateToken(User user);
    }
}
