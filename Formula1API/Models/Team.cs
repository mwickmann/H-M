using System.ComponentModel.DataAnnotations;
namespace Formula1API.Models;

public class Team
{
    public int Id { get; set; }
    public int Rank { get; set; }
    public string? TeamName { get; set; }

    public string? Manufacturer {get; set;}

    public string? Driver1 {get; set;}

    public string? Driver2 {get; set;}
    public string? Image {get; set;}
    public string? ImageLogo { get; set; }
}