using Microsoft.EntityFrameworkCore;
using PruebaBackBG.DataAccess;
using PruebaBackBG.Models;
using PruebaBackBG.Services.Interfaces;

namespace PruebaBackBG.Services
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _context;

        public ProductService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetListProducts()
        {
            try
            {
                return await _context.Product.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error al obtener la lista de productos."+ ex.Message);
            }
        }

        public async Task<Product> GetProductById(int idProduct)
        {
            try
            {
                return await _context.Product.FindAsync(idProduct);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al obtener el producto con ID {idProduct}.", ex);
            }
        }
    }
}
