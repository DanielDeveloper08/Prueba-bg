using PruebaBackBG.Models;

namespace PruebaBackBG.Services.Interfaces
{
    public interface IPlanService
    {
        Task<IEnumerable<Plan>> GetPlans();

        Task<Plan> GetPlanById(int idPlan);
    }
}
