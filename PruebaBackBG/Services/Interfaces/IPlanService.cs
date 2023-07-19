using PruebaBackBG.Models;

namespace PruebaBackBG.Services.Interfaces
{
    public interface IPlanService
    {
        Task<Plan[]> GetPlans();
    }
}
