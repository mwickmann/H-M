namespace Formula1.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1API.Models;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;

//All /Name

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly Formula1Context context;

    public DriversController(Formula1Context _context)
    {
        context = _context;
    }
    
    //Get All
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try{
            List<Driver> drivers = await context.Drivers.ToListAsync();

            if(drivers != null){
                return Ok( drivers );
            }
            else{
                return NotFound();
            }
        }catch{
            return StatusCode(500);
        }
    }



    [HttpGet("{name}")]
    public async Task<ActionResult<List<Driver>>> GetDriverByName(string name)
    {
        try
        {
            Driver? driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);

            if (driver != null)
            {
                return Ok(driver);
            }
            else
            {
                return NotFound($"Driver with name {name} not found");
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

[HttpGet("byTeam/{team}")]
public async Task<ActionResult<List<Driver>>> GetDriverByTeam(string team)
{
    try
    {
        List<Driver> drivers = await context.Drivers
            .Where(d => d.Team.ToLower() == team.ToLower()) // Case-insensitive sammenligning
            .ToListAsync();

        if (drivers.Count > 0)
        {
            return Ok(drivers);
        }
        else
        {
            return NotFound($"No drivers found for the team {team}");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return StatusCode(500, "Internal Server Error");
    }
}
}