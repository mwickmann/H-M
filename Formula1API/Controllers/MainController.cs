namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;

[ApiController]
[Route("api/[controller]")]
public class MainController : ControllerBase
{
    private readonly Formula1Context context;
    
    public MainController(Formula1Context _context)
    {
        context = _context;
    }


[HttpGet]
    public async Task<ActionResult<List<AmateurDriver>>> GetAmateurDrivers()
    {
        try{
            List<AmateurDriver> amateurDrivers = await context.AmateurDrivers.ToListAsync();

            if(amateurDrivers != null){
                return Ok( amateurDrivers );
            }
            else{
                return NotFound();
            }
        }catch{
            return StatusCode(500);
        }
    }
    //Legge til ny AmateurDriver
    [HttpPost]
    public async Task<ActionResult<AmateurDriver>> Post(AmateurDriver newAmateurDriver)
    {
        //Riktig? skal det også settes inn en if/else?
        try{
        // 1. Gjøre context løar til å lagre
        context.AmateurDrivers.Add(newAmateurDriver);

        // 2. Lagre Db
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = newAmateurDriver.Id }, newAmateurDriver);

        }
        catch{
            return StatusCode(500); 
        }

    }


     [HttpGet("{name}")]
    public async Task<ActionResult<List<AmateurDriver>>> GetAmateurDriverByName(string name)
    {
        try
        {
            AmateurDriver? amDriver = await context.AmateurDrivers.FirstOrDefaultAsync(d => d.Name == name);

            if (amDriver != null)
            {
                return Ok(amDriver);
            }
            else
            {
                return NotFound($"Amateur Driver with name {name} not found");
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }


    [HttpDelete("{name}")]
    public async Task<IActionResult> Delete(string name)//Task henger sammen med async, ActionREsult: sende objekt i tillegg til statusmedling. IActionREsult: bare statusmelding
    {
        try{
            //(for det kan være en "null" verdi)
            AmateurDriver? amateurDrivers = await context.AmateurDrivers.FirstOrDefaultAsync(d=> d.Name == name); //Ikke klassen MediaContext, men objektet mediaContext! Husk også å si hvilke Tabell man skal hente det fra
            
            if(amateurDrivers != null){
                //har funnet serien
                context.AmateurDrivers.Remove(amateurDrivers); //gjør mediacontext klar til sletting
                await context.SaveChangesAsync();
                return NoContent(); //204 
            }else{
                //fant ikke serien
                return NotFound();
            }

        }catch{
            return StatusCode(500, "Internal Server Error. MainController"); //Finnes egne koder for hva som kan gå galt!
        }
    }
   
   [HttpGet("id{id}")]
    public async Task<ActionResult<AmateurDriver>> Get(int id)
    {
        try
        {
            AmateurDriver? amDrivers = await context.AmateurDrivers.FindAsync(id);
            if( amDrivers != null )
            {
                return Ok(amDrivers);
            }
            else
            {
                return NotFound();
            }            
        }
        catch
        {
            return StatusCode(500);
        }
    }


    [HttpPut]
    public async Task<IActionResult> Put(AmateurDriver updatedAmateurDriver)
    {
        try
        {
            AmateurDriver? existingAmDriver = await context.AmateurDrivers.FirstOrDefaultAsync(d => d.Id == updatedAmateurDriver.Id);

            if (existingAmDriver == null)
            {
                return NotFound();
            }

            existingAmDriver.Name = updatedAmateurDriver.Name;  
            existingAmDriver.Nationality = updatedAmateurDriver.Nationality;   
            existingAmDriver.Manufacturer = updatedAmateurDriver.Manufacturer;   
            existingAmDriver.Team = updatedAmateurDriver.Team;   
            existingAmDriver.Image = updatedAmateurDriver.Image;   

            await context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error: {ex.Message}");
        }
    }
}

