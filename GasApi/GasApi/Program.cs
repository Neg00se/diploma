using DataAccessLayer;
using DataAccessLayer.IdentityItems;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<GasDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("default")));

builder.Services.AddDbContext<AppIdentityDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("identity")));

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<User>().AddRoles<IdentityRole>()
	.AddEntityFrameworkStores<AppIdentityDbContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.MapIdentityApi<User>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
