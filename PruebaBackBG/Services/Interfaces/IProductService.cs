using PruebaBackBG.Models;

namespace PruebaBackBG.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetListProducts();
        Task<Product> GetProductById(int idProduct);

    }
}
