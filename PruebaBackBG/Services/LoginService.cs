using Microsoft.EntityFrameworkCore;
using PruebaBackBG.DataAccess;
using PruebaBackBG.Models;
using PruebaBackBG.Models.DTO;
using PruebaBackBG.Services.Interfaces;
using BCrypt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace PruebaBackBG.Services
{
    public class LoginService: ILoginService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public LoginService(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<User?> GetUser(UserDTO user)
        {
            return await _context.User.
                SingleOrDefaultAsync( u => u.Username.Equals(user.Username));
        }

        public bool VerifyPassword(string inputPassword, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(inputPassword, BCrypt.Net.BCrypt.HashPassword(hashedPassword));
        }

        public async Task<User> StoreUser(UserDTO user)
        {
            var newUser = new User
            {
                Username = user.Username,
                Password = BCrypt.Net.BCrypt.HashPassword(user.Password),
            };

            _context.User.Add(newUser);
            await _context.SaveChangesAsync();

            return newUser;
        }



        public string GenerateToken(User user)
        {
            var claims = new []
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var securityToken = new JwtSecurityToken(
                claims : claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);
            
                
            
            var token = new JwtSecurityTokenHandler().WriteToken(securityToken);

            return token;
        }
    }
}
