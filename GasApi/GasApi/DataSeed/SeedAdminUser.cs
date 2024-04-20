using DataAccessLayer.IdentityItems;
using Microsoft.AspNetCore.Identity;

namespace GasApi.DataSeed;

public static class SeedAdminUser
{
	private const string AdminUser = "admin@mail.com";
	private const string AdminPassword = "Admin123$";

	public static async Task EnsurePopulated(IApplicationBuilder app)
	{
		UserManager<User> userManager = app.ApplicationServices.CreateScope().ServiceProvider
														 .GetRequiredService<UserManager<User>>();

		
		var user =await userManager.FindByNameAsync(AdminUser);
		if (user is null)
		{
			user = new User()
			{
				UserName = AdminUser,
				Email = "admin@mail.com",
				FirstName = "John",
				LastName = "Doe",
				PersonalCode = "123456789",

			};

			await userManager.CreateAsync(user, AdminPassword);
		}
	}
}
