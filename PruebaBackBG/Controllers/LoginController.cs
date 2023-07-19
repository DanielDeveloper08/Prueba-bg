using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaBackBG.Helpers;
using PruebaBackBG.Models;
using PruebaBackBG.Models.DTO;
using PruebaBackBG.Services.Interfaces;
using System.Net;

namespace PruebaBackBG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<ActionResult> LoginCliente(UserDTO userLoginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(
                    new ApiResponse<Product>
                    {
                        StatusCode = HttpStatusCode.BadRequest,
                        Message = ModelState.ToString(),
                        Data = null
                    });
            }

            var user = await _loginService.GetUser(userLoginDto);

            if (user == null)
            {
                return NotFound(
                        new ApiResponse<Product>
                        {
                            StatusCode = HttpStatusCode.NotFound,
                            Message = "Usuario no encontrado",
                            Data = null
                        }
                    );
            }

            bool isPasswordValid = _loginService.VerifyPassword(userLoginDto.Password, user.Password);

            if (!isPasswordValid)
            {
                 return BadRequest(
                        new ApiResponse<Product>
                        {
                            StatusCode = HttpStatusCode.Unauthorized,
                            Message = "Contrasena incorrecta",
                            Data = null
                        }
                   );
            }

            string token = _loginService.GenerateToken(user);

            return Ok(
                new ApiResponse<Product>
                {
                    StatusCode = HttpStatusCode.OK,
                    Message = "Inicio de sesion exitoso",
                    Data = null,
                    Token = token
                });
        }



    }
}
