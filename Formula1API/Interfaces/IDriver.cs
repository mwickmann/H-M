using System.ComponentModel.DataAnnotations;
namespace Formula1API.Interfaces;

public class IDriver
{
    int Id { get; set; }
    string? DateOfBirth { get; set; }
    int Rank { get; set; }
    string? Name { get; set; }
    string? Nationality { get; set; }
    string? Team { get; set; }
    int Points { get; set; }
    string? ImageDriver { get; set;}
}
