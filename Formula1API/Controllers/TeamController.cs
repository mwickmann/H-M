namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly Formula1Context context;

    public TeamsController(Formula1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Team>>> Get()
    {
        try{
            List<Team> teams = await context.Teams.ToListAsync();
            if( teams != null)
            {
                return Ok(teams);
            }
            else{
                return NotFound();
            }
        }
        catch{
            return StatusCode(500);
        }
    }

    [HttpGet("byTeamName/{teamName}")]
    public async Task<ActionResult<List<Team>>> GetTeamByTeamName(string teamName)
    {
        try
        {
            Team? team = await context.Teams.FirstOrDefaultAsync(t => t.TeamName == teamName);
            if (team != null)
            {
                return Ok(team);
            }
            else
            {
                return NotFound($"Team with name: {teamName} not found");
            }
        }
        catch
        {
            return StatusCode(500, "Internal Server Error, TeamController");
        }
    }


}




