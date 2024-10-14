
namespace Formula1API.Models;
using Formula1API.Interfaces;

public class Driver : IDriver
{
    //[Key]
    public int Id { get; set; }
    public string? DateOfBirth { get; set; }
    public int Rank { get; set; }
    public string? Name { get; set; }
    public string? Nationality { get; set; }
    public string? Team { get; set; }
    public int Points { get; set; }
    public string? ImageDriver { get; set; }
}