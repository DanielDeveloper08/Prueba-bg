using Microsoft.AspNetCore.Mvc;
using PruebaBackBG.Services.Interfaces;

namespace PruebaBackBG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanController : Controller
    {
        private readonly IPlanService _planService;
        public PlanController(IPlanService planRepository)
        {
            _planService = planRepository;
        }

        [HttpGet("/getAllPlans")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listPlan = await _planService.GetPlans();

                if (!listPlan.Any())
                {
                    return NotFound();
                }
                else
                {
                    return Ok(listPlan);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("/findPlan/{id}")]
        public async Task<IActionResult> GetPlanById(int id)
        {
            try
            {
                var plan = await _planService.GetPlanById(id);

                if( plan == null )
                {
                    return NotFound();
                }
                else
                {
                    return Ok(plan);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

    }
}
