using Microsoft.AspNetCore.Identity;

namespace GasApi.DataSeed;

public static class SeedRoles
{
	public static async Task EnsurePopulated(IApplicationBuilder app)
	{
		string[] roles = ["Admin", "User"];

		RoleManager<IdentityRole> roleManager = app.ApplicationServices.CreateScope().ServiceProvider
																 .GetRequiredService<RoleManager<IdentityRole>>();

		foreach (var role in roles)
		{
			if (!await roleManager.RoleExistsAsync(role))
			{
				await roleManager.CreateAsync(new IdentityRole(role));
			}
		}

	}
}
