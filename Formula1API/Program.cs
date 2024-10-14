using Microsoft.EntityFrameworkCore;
using Formula1API.Contexts;
using Formula1API.Models;
using Microsoft.Extensions.Options;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formula1Context>(
    options => options.UseSqlite("Data Source=Databases/Formula1Db.db")
);

// Har med kontakt mellom front-end og back-end. Denne åpner opp sånn at front end kan gå inn i WebApiet
builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll", 
            policy => policy
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
        );
    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Setter index.html som default fil
DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

// starter konfigurasjonen av Api nettsidene
// Endrer komponentene, gjør de dynamiske
app.UseStaticFiles();

app.UseCors("AllowAll"); // Legg til denne linjen for å håndtere CORS-problemet

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();


// using Microsoft.EntityFrameworkCore;
// using Formula1API.Contexts;
// // using Formula1API.Models;
// // using Microsoft.Extensions.Options;

// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// builder.Services.AddDbContext<Formula1Context>(
//     options => options.UseSqlite("Data Source=Databases/Formula1Db.db")
// );

// // Har med kontakt mellom front-end og back-end. Denne åpner opp sånn at front end kan gå inn i WebApiet
// builder.Services.AddCors(
//     builder => {
//         builder.AddPolicy("AllowAll", 
//             policies => policies
//                 .AllowAnyHeader()
//                 .AllowAnyMethod()
//                 .AllowAnyOrigin()
//         );
//     }
// );

// builder.Services.AddControllers();
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// var app = builder.Build();

// // Setter index.html som default fil
// DefaultFilesOptions options = new DefaultFilesOptions();
// options.DefaultFileNames.Add("index.html");
// app.UseDefaultFiles(options);

// // starter konfigurasjonen av Api nettsidene
// //Endrer komponentene, gjør de dynamiske
// app.UseStaticFiles();

// app.UseCors("AllowAll"); // Legg til denne linjen for å håndtere CORS-problemet

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();
// app.UseAuthorization();
// app.MapControllers();
// app.Run();

// // using Microsoft.EntityFrameworkCore;
// // using Formula1API.Contexts;
// // // using Formula1API.Models;
// // // using Microsoft.Extensions.Options;


// // var builder = WebApplication.CreateBuilder(args);

// // // Add services to the container.
// // builder.Services.AddDbContext<Formula1Context>(
// //     options => options.UseSqlite("Data Source=Databases/Formula1Db.db")
// // );

// // // Har med kontakt mellom front-end og back-end. Denne åpner opp sånn at front end kan gå inn i WebApiet
// // builder.Services.AddCors(
// //     builder => {
// //         builder.AddPolicy("AllowAll", 
// //             policies => policies
// //                 .AllowAnyHeader()
// //                 .AllowAnyMethod()
// //                 .AllowAnyOrigin()
// //         );
// //     }
// // )
// // ;
// // builder.Services.AddControllers();
// // // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// // builder.Services.AddEndpointsApiExplorer();
// // builder.Services.AddSwaggerGen();


// // var app = builder.Build();

// // // Setter index.html som default fil
// // DefaultFilesOptions options = new DefaultFilesOptions();
// // options.DefaultFileNames.Add("index.html");
// // app.UseDefaultFiles(options);


// // // starter konfigurasjonen av Api nettsidene
// // //Endrer komponentene, gjør de dynamiske


// // app.UseStaticFiles();
// // app.UseCors("AllowAll");


// // // Configure the HTTP request pipeline.
// // if (app.Environment.IsDevelopment())
// // {
// //     app.UseSwagger();
// //     app.UseSwaggerUI();
// // }

// // app.UseHttpsRedirection();

// // app.UseAuthorization();

// // app.MapControllers();

// // app.Run();
