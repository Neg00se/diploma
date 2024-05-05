using BusinessLogicLayer;
using DataAccessLayer;
using DataAccessLayer.IdentityItems;
using DataAccessLayer.Repositories;
using GasApi.DataSeed;
using GasApi.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
	options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
	{
		In = ParameterLocation.Header,
		Name = "Authorization",
		Type = SecuritySchemeType.ApiKey
	});

	options.OperationFilter<SecurityRequirementsOperationFilter>();
}
);

builder.Services.AddAutoMapper(typeof(AutomapperProfile));

builder.Services.AddDbContext<GasDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("default")));

builder.Services.AddDbContext<AppIdentityDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("identity")));

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<User>(options =>
options.User.RequireUniqueEmail = true).AddRoles<IdentityRole>()
	.AddEntityFrameworkStores<AppIdentityDbContext>();

builder.Services.AddRepos();
builder.Services.AddServices();

builder.Services.AddCors(options =>
{
	options.AddPolicy("CorsPolicy", opt =>
	opt.WithOrigins("http://localhost:5173")
	.AllowAnyHeader()
	.AllowAnyMethod()
	.AllowCredentials());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

await SeedRoles.EnsurePopulated(app);
await SeedAdminUser.EnsurePopulated(app);

app.UseCors("CorsPolicy");

app.MapIdentityApi<User>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
