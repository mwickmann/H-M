namespace Formula1API.Interfaces;

public interface IRace
{
    int Id { get; set;}
    string? Date { get; set;}
    string? Winner { get; set;}
    TimeSpan WinnerTime { get; set;}
    string? GrandPrix { get; set;}
    string? Team {get; set; }
    int NrOfLaps { get; set;}

}