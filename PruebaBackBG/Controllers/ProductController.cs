using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebaBackBG.Helpers;
using PruebaBackBG.Models;
using PruebaBackBG.Services.Interfaces;
using System.Net;

namespace PruebaBackBG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productRepository)
        {
            _productService = productRepository;
        }

        [HttpGet("/getAllProducts")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listProducts = await _productService.GetListProducts();

                if (!listProducts.Any()) 
                {
                    return NotFound(
                        new ApiResponse<IEnumerable<Product>>
                        {
                            StatusCode = HttpStatusCode.NotFound,
                            Message = "No existen productos",
                            Data = null
                        }
                    );
                }
                else
                {
                    return Ok(
                       new ApiResponse<IEnumerable<Product>>
                       {
                           StatusCode = HttpStatusCode.OK,
                           Message = "Proceso realizado con exito",
                           Data = listProducts
                       }
                    );
                }
               
            }
            catch (Exception ex)
            {
                return BadRequest(
                    new ApiResponse<object>
                    {
                        StatusCode = HttpStatusCode.BadRequest,
                        Message = "Error en la solicitud",
                        Data = ex.Message
                    }
                );
            }
        }



        [HttpGet("/findProduct/{id}")]
        public async Task<IActionResult> buscarProductoId(int id)
        {
            try
            {
                Product producto = await _productService.GetProductById(id);
                if (producto == null)
                {
                    return NotFound(
                        new ApiResponse<Product>
                        {
                            StatusCode = HttpStatusCode.NotFound,
                            Message = "Producto no encontrado",
                            Data = null
                        }
                    );
                }
                else
                {
                    return Ok(
                        new ApiResponse<Product>
                        {
                            StatusCode = HttpStatusCode.OK,
                            Message = "Proceso realizado con exito",
                            Data = producto
                        }
                    );
                }
            }
            catch (Exception ex)
            {
                return BadRequest(
                    new ApiResponse<object>
                    {
                        StatusCode = HttpStatusCode.BadRequest,
                        Message = "Error en la solicitud",
                        Data = ex.Message
                    }
                );
            }
        }
    }
}
