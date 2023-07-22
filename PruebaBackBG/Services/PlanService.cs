using Microsoft.EntityFrameworkCore;
using PruebaBackBG.DataAccess;
using PruebaBackBG.Models;
using PruebaBackBG.Services.Interfaces;

namespace PruebaBackBG.Services
{
    public class PlanService: IPlanService
    {
        private readonly AppDbContext _context;

        public PlanService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Plan>> GetPlans()
        {
            try
            {
                return await _context.Plan.ToListAsync();
            }
            catch( Exception ex)
            {
                throw new Exception("Error al obtener la lista de planes" + ex.Message);
            }
        }

        public async Task<Plan> GetPlanById(int idPlan)
        {
            try
            {
                return await _context.Plan.FindAsync(idPlan);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al obtener el plan con ID {idPlan}.", ex);
            }
        }
    }
}
