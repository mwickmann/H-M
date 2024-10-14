namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;


[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    private readonly Formula1Context context;

    public RacesController(Formula1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try{
            List<Race> races = await context.Races.ToListAsync();//Forvandler hva vi får til list
            if( races != null)
            {
                return Ok(races);
            }
            else{
                return NotFound();
            }
        }
        catch{
            return StatusCode(500);
        }
    }

}



