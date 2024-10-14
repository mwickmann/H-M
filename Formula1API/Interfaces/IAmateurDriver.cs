using System.ComponentModel.DataAnnotations;
namespace Formula1API.Models;

public class IAmateurDriver
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Nationality { get; set; }
    public string? Manufacture {get; set;}
    public string? Team { get; set; }
    public string? Image { get; set; }
}
