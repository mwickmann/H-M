// namespace Formula1API.Controllers;

// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using System;
// using System.IO;
// using System.Threading.Tasks;

// // Jobber mot wwwroot

// [ApiController]
// [Route("api/[controller]")]
// public class ImageUploadController : ControllerBase
// {    
//     private readonly IWebHostEnvironment environment;

//     public ImageUploadController(IWebHostEnvironment _environment)
//     {
//         environment = _environment;
//     }

//     [HttpGet]
//     public string Get()
//     {
//         return "Hello from Get() in ImageUploadController"; 
//     }

//     [HttpPost]
//     public async Task<IActionResult> SaveImage(IFormFile file)
//     {
//         try
//         {
//             if (file == null || file.Length == 0)
//                 return BadRequest("Invalid file");

//             string webRootPath = environment.WebRootPath;

//             // Generer et unikt filnavn
//             string uniqueFilename = $"{Guid.NewGuid().ToString()}-{DateTime.Now.Ticks}{Path.GetExtension(file.FileName)}";

//             // Oppdater banen for å inkludere undermapper (Amateurdrivers_img)
//             string absolutePath = Path.Combine($"{webRootPath}/images/Amateurdrivers_img/{uniqueFilename}");

//             using (var fileStream = new FileStream(absolutePath, FileMode.Create))
//             {
//                 await file.CopyToAsync(fileStream);
//             }

//             return Ok("Image saved successfully");
//         }
//         catch (Exception ex)
//         {
//             // Logg feilen eller gjør andre nødvendige tiltak
//             return StatusCode(500, $"Internal server error: {ex.Message}");
//         }
//     }
// }

namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;

    public ImageUploadController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    [HttpGet]
    public string Get()
    {
        return "Hello from Get() in ImageUploadController";
    }

    [HttpPost]
    public async Task<IActionResult> SaveImage(IFormFile file)
    {
        try
        {
            // Sjekk om filen er gyldig
            if (file == null || file.Length == 0)
                return BadRequest("Invalid file");

            string webRootPath = _environment.WebRootPath;

            string absolutePath = Path.Combine(webRootPath, "images", "Amateurdrivers_img", file.FileName);

            // Bruk CopyToAsync for asynkron kopiering
            using (var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            // Returner en bekreftelse
            return Ok("Image saved successfully");
        }
        catch (Exception ex)
        {
            // Logg feilen eller gjør andre nødvendige tiltak
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}