using Microsoft.EntityFrameworkCore;
using PruebaBackBG.DataAccess;
using PruebaBackBG.Models;
using PruebaBackBG.Services.Interfaces;

namespace PruebaBackBG.Services
{
    public class PlanService
    {
        private readonly AppDbContext _context;

        public PlanService(AppDbContext context)
        {
            _context = context;
        }
    }
}
