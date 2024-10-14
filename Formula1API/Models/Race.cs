
namespace Formula1API.Models;

using Formula1API.Interfaces;

public class Race : IRace
{
    public int Id { get; set;}
    public string? Date { get; set; }
    public string? Winner { get; set;}
    public TimeSpan WinnerTime { get; set;}
    public string? GrandPrix { get; set;}
    public string? Team { get; set;}
    public int NrOfLaps { get; set;}
}