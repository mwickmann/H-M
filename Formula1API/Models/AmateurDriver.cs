namespace Formula1API.Models;
using System.ComponentModel.DataAnnotations;
using Formula1API.Interfaces;

public class AmateurDriver
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Nationality { get; set; }

    public string? Manufacturer {get; set;}
    public string? Team { get; set; }
    public string? Image { get; set;}

}